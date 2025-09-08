import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, businessName, currentWebsite, businessDescription, postcode } = body;

    // Validate required fields
    if (!name || !email || !phone || !businessName || !businessDescription || !postcode) {
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
    const transporter = nodemailer.createTransporter({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '465'),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Lead capture email content
    const leadEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #ea580c; border-bottom: 2px solid #ea580c; padding-bottom: 10px;">
          🚨 New Lead - Customer Started Booking Process
        </h2>
        
        <div style="background: #fef3e2; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ea580c;">
          <h3 style="color: #333; margin-top: 0;">⚠️ Action Required</h3>
          <p style="color: #92400e; font-weight: bold;">
            A potential customer has filled out their business details and proceeded to the booking calendar, but hasn't completed their booking yet. 
            This is a warm lead - consider following up!
          </p>
        </div>
        
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
          <p><strong>What does their business do?</strong></p>
          <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #3b82f6;">
            ${businessDescription.replace(/\n/g, '<br>')}
          </div>
        </div>

        <div style="background: #fef3e2; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">💡 Suggested Follow-up Actions</h3>
          <ul style="color: #92400e;">
            <li>Send a personalized email within 24 hours</li>
            <li>Offer to schedule a call at their convenience</li>
            <li>Provide case studies relevant to their business type</li>
            <li>Send your portfolio or examples of similar work</li>
          </ul>
        </div>

        <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">📧 Quick Response Template</h3>
          <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #059669; font-style: italic; color: #374151;">
            Hi ${name},<br><br>
            I noticed you were looking at booking a call with us for ${businessName}. I'd love to help you take your business to the next level with a professional website and digital marketing strategy.<br><br>
            Would you prefer to schedule a call at a time that works better for you? I'm here to answer any questions about how we can help ${businessName} grow online.<br><br>
            Best regards,<br>
            [Your Name]
          </div>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
        
        <p style="color: #6b7280; font-size: 14px; text-align: center;">
          This lead was captured from the Saunders Simmons website booking system.<br>
          Customer completed Step 1 (business details) but didn't finish booking a time slot.
        </p>
      </div>
    `;

    const leadEmailText = `
🚨 NEW LEAD - Customer Started Booking Process

⚠️ ACTION REQUIRED:
A potential customer has filled out their business details and proceeded to the booking calendar, but hasn't completed their booking yet. This is a warm lead - consider following up!

Contact Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Business Name: ${businessName}
${currentWebsite ? `- Current Website: ${currentWebsite}` : ''}
- Postcode: ${postcode}

Business Details:
${businessDescription}

💡 Suggested Follow-up Actions:
- Send a personalized email within 24 hours
- Offer to schedule a call at their convenience
- Provide case studies relevant to their business type
- Send your portfolio or examples of similar work

📧 Quick Response Template:
Hi ${name},

I noticed you were looking at booking a call with us for ${businessName}. I'd love to help you take your business to the next level with a professional website and digital marketing strategy.

Would you prefer to schedule a call at a time that works better for you? I'm here to answer any questions about how we can help ${businessName} grow online.

Best regards,
[Your Name]

---
This lead was captured from the Saunders Simmons website booking system.
Customer completed Step 1 (business details) but didn't finish booking a time slot.
    `;

    // Send lead capture email to business
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `🚨 New Lead Started Booking - ${businessName} (${name})`,
      text: leadEmailText,
      html: leadEmailHtml,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Lead captured successfully' 
    });

  } catch (error) {
    console.error('Lead capture email error:', error);
    console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json(
      { error: 'Failed to capture lead' },
      { status: 500 }
    );
  }
}
