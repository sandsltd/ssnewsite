import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Generate fake booked slots that change each week
const generateFakeBookedSlots = () => {
  const slots = [];
  const today = new Date();
  
  // Find next Monday
  const dayOfWeek = today.getDay();
  const daysUntilMonday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek;
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() + daysUntilMonday);
  
  const timeSlots = ['10:00 AM - 11:00 AM', '1:00 PM - 2:00 PM', '3:00 PM - 4:00 PM'];
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  
  // Generate 2 weeks of fake bookings
  for (let week = 0; week < 2; week++) {
    // Use week number and year to create consistent but changing seed
    const weekNumber = Math.floor((startDate.getTime() + week * 7 * 24 * 60 * 60 * 1000) / (7 * 24 * 60 * 60 * 1000));
    const seed = weekNumber % 1000; // Create a seed that changes weekly
    
    // Generate 2 fake bookings per week using the seed
    for (let i = 0; i < 2; i++) {
      const dayIndex = (seed + i * 3) % weekdays.length; // Pseudo-random day
      const timeIndex = (seed + i * 7) % timeSlots.length; // Pseudo-random time
      
      const fakeDate = new Date(startDate);
      fakeDate.setDate(fakeDate.getDate() + week * 7 + dayIndex);
      
      const slotString = `${fakeDate.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })} at ${timeSlots[timeIndex]}`;
      
      slots.push({
        slot: slotString,
        bookedAt: new Date().toISOString(),
        isFake: true
      });
    }
  }
  
  return slots;
};

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'bookings.json');
    
    // Create file if it doesn't exist
    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, JSON.stringify({ bookedSlots: [] }, null, 2));
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    // Get real bookings and add fake ones
    const realBookings = data.bookedSlots || [];
    const fakeBookings = generateFakeBookedSlots();
    const allBookings = [...realBookings, ...fakeBookings];
    
    return NextResponse.json({ bookedSlots: allBookings });
  } catch (error) {
    console.error('Error reading bookings:', error);
    return NextResponse.json({ bookedSlots: [] });
  }
}
