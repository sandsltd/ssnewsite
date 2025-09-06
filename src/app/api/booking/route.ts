import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, businessName, currentWebsite, businessDescription, postcode, selectedSlot } = body;

    // Validate required fields
    if (!name || !email || !phone || !businessName || !businessDescription || !postcode || !selectedSlot) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if email environment variables are configured
    if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_FROM || !process.env.EMAIL_TO) {
      console.error('Email configuration missing. Please check .env.local file.');
      return NextResponse.json(
        { error: 'Email configuration not found. Please contact support.' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '465'),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Business email content (to you)
    const businessEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #ea580c; border-bottom: 2px solid #ea580c; padding-bottom: 10px;">
          New Booking Request
        </h2>
        
               <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                 <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
                 <p><strong>Name:</strong> ${name}</p>
                 <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                 <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
                 <p><strong>Business Name:</strong> ${businessName}</p>
                 ${currentWebsite ? `<p><strong>Current Website:</strong> <a href="${currentWebsite}" target="_blank">${currentWebsite}</a></p>` : ''}
                 <p><strong>Postcode:</strong> ${postcode}</p>
               </div>

        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Business Details</h3>
          <p><strong>What does your business do?</strong></p>
          <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #3b82f6;">
            ${businessDescription.replace(/\n/g, '<br>')}
          </div>
        </div>

        <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Requested Call Time</h3>
          <p style="font-size: 16px; color: #059669; font-weight: bold;">
            📅 ${selectedSlot}
          </p>
        </div>

        <div style="background: #fef3e2; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Next Steps</h3>
          <ul style="color: #92400e;">
            <li>Contact ${name} to confirm the appointment</li>
            <li>Prepare discussion points about their business needs</li>
            <li>Send calendar invitation for the confirmed time slot</li>
          </ul>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
        
        <p style="color: #6b7280; font-size: 14px; text-align: center;">
          This booking was submitted via the Saunders Simmons website booking system.
        </p>
      </div>
    `;

    // Customer confirmation email content
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #ea580c; border-bottom: 2px solid #ea580c; padding-bottom: 10px;">
          Booking Confirmation - Saunders Simmons Ltd
        </h2>
        
        <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Hi ${name},</h3>
          <p style="color: #059669; font-weight: bold; font-size: 16px;">
            ✅ Your call has been successfully booked!
          </p>
          <p>Thank you for choosing Saunders Simmons Ltd. We're excited to discuss how we can help ${businessName} grow online.</p>
        </div>

               <div style="background: #fef3e2; padding: 20px; border-radius: 8px; margin: 20px 0;">
                 <h3 style="color: #333; margin-top: 0;">📅 Your Booking Details</h3>
                 <p><strong>Date & Time:</strong> ${selectedSlot}</p>
                 <p><strong>Business:</strong> ${businessName}</p>
                 <p><strong>Contact Email:</strong> ${email}</p>
                 <p><strong>Phone Number:</strong> ${phone}</p>
                 <p style="margin-top: 15px; padding: 10px; background: #fff3cd; border-left: 4px solid #ffc107; font-size: 14px;">
                   📞 <strong>Please note:</strong> This is the number we will call you on. If this is incorrect, please contact us immediately.
                 </p>
               </div>

        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">What Happens Next?</h3>
          <ul style="color: #1f2937; line-height: 1.6;">
            <li>We'll send you a calendar invitation within 24 hours</li>
            <li>Our team will prepare for your call based on your business details</li>
            <li>We'll discuss your website needs and how our ongoing support works</li>
            <li>You'll receive a personalised proposal after our call</li>
          </ul>
        </div>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Need to Change Your Booking?</h3>
          <p>If you need to reschedule or have any questions, please contact us:</p>
          <p><strong>Email:</strong> <a href="mailto:hello@saunders-simmons.co.uk">hello@saunders-simmons.co.uk</a></p>
          <p><strong>Phone:</strong> <a href="tel:03300436608">0330 043 6608</a></p>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
        
        <div style="text-align: center;">
          <p style="color: #6b7280; font-size: 14px;">
            Thanks again for choosing Saunders Simmons Ltd<br>
            <strong>Building long-term digital partnerships</strong>
          </p>
        </div>
      </div>
    `;

    const businessEmailText = `
New Booking Request

Contact Information:
       - Name: ${name}
       - Email: ${email}
       - Phone: ${phone}
       - Business Name: ${businessName}
       ${currentWebsite ? `- Current Website: ${currentWebsite}` : ''}
       - Postcode: ${postcode}

Business Details:
${businessDescription}

Requested Call Time:
${selectedSlot}

Next Steps:
- Contact ${name} to confirm the appointment
- Prepare discussion points about their business needs  
- Send calendar invitation for the confirmed time slot
    `;

    const customerEmailText = `
Booking Confirmation - Saunders Simmons Ltd

Hi ${name},

✅ Your call has been successfully booked!

Thank you for choosing Saunders Simmons Ltd. We're excited to discuss how we can help ${businessName} grow online.

       📅 Your Booking Details:
       - Date & Time: ${selectedSlot}
       - Business: ${businessName}
       - Contact Email: ${email}
       - Phone Number: ${phone}
       
       📞 IMPORTANT: This is the number we will call you on. If this is incorrect, please contact us immediately.

What Happens Next?
- We'll send you a calendar invitation within 24 hours
- Our team will prepare for your call based on your business details
- We'll discuss your website needs and how our ongoing support works
- You'll receive a personalised proposal after our call

Need to Change Your Booking?
If you need to reschedule or have any questions, please contact us:
- Email: hello@saunders-simmons.co.uk
- Phone: 0330 043 6608

Thanks again for choosing Saunders Simmons Ltd
Building long-term digital partnerships
    `;

    // Send email to business
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Booking Request - ${businessName} (${name})`,
      text: businessEmailText,
      html: businessEmailHtml,
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: `Booking Confirmed - Your Call with Saunders Simmons Ltd`,
      text: customerEmailText,
      html: customerEmailHtml,
    });

    // Save booked slot to JSON file
    try {
      const filePath = path.join(process.cwd(), 'data', 'bookings.json');
      
      // Create file if it doesn't exist
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, JSON.stringify({ bookedSlots: [] }, null, 2));
      }
      
      // Read current bookings
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(fileContents);
      
      // Add new booking (only slot info, no customer details)
      const bookingEntry = {
        slot: selectedSlot,
        bookedAt: new Date().toISOString()
      };
      
      data.bookedSlots = data.bookedSlots || [];
      data.bookedSlots.push(bookingEntry);
      
      // Save updated bookings
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } catch (fileError) {
      console.error('Error saving booking to file:', fileError);
      // Continue anyway - email was sent successfully
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Booking request sent successfully' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json(
      { error: 'Failed to send booking request' },
      { status: 500 }
    );
  }
}
