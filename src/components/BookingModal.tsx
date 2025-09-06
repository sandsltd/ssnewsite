'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  currentWebsite: string;
  businessDescription: string;
  postcode: string;
  selectedSlot: string | null;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    currentWebsite: '',
    businessDescription: '',
    postcode: '',
    selectedSlot: null,
  });

  // Generate next 2 weeks of weekdays (Monday-Friday)
  const generateWeekdays = () => {
    const days = [];
    const today = new Date();
    let currentDate = new Date(today);
    
    // Find next Monday
    const dayOfWeek = currentDate.getDay();
    const daysUntilMonday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek;
    currentDate.setDate(currentDate.getDate() + daysUntilMonday);
    
    // Generate 2 weeks of weekdays (10 days total)
    for (let i = 0; i < 10; i++) {
      days.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
      
      // Skip weekends
      if (currentDate.getDay() === 6) { // Saturday
        currentDate.setDate(currentDate.getDate() + 2); // Skip to Monday
      }
    }
    
    return days;
  };

  const weekdays = generateWeekdays();
  
  // Group days by week for better display
  const week1 = weekdays.slice(0, 5);
  const week2 = weekdays.slice(5, 10);
  const timeSlots = ['10:00 AM - 11:00 AM', '1:00 PM - 2:00 PM', '3:00 PM - 4:00 PM'];

  // Fetch booked slots when modal opens
  useEffect(() => {
    if (isOpen) {
      fetchBookedSlots();
    }
  }, [isOpen]);

  const fetchBookedSlots = async () => {
    try {
      const response = await fetch('/api/availability');
      if (response.ok) {
        const data = await response.json();
        setBookedSlots(data.bookedSlots.map((booking: { slot: string }) => booking.slot));
      }
    } catch (error) {
      console.error('Error fetching booked slots:', error);
    }
  };

  const isSlotBooked = (day: Date, time: string) => {
    const slotString = `${day.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })} at ${time}`;
    return bookedSlots.includes(slotString);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSlotSelect = (day: Date, time: string) => {
    const slotString = `${day.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })} at ${time}`;
    setFormData(prev => ({ ...prev, selectedSlot: slotString }));
  };

  const handleNext = () => {
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Booking request submitted successfully! We\'ll be in touch soon to confirm your appointment.');
        onClose();
        setStep(1);
              setFormData({
                name: '',
                email: '',
                phone: '',
                businessName: '',
                currentWebsite: '',
                businessDescription: '',
                postcode: '',
                selectedSlot: null,
              });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || 'Failed to submit booking request'}`);
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      alert('Failed to submit booking request. Please try again or contact us directly.');
    }
  };

  const isStep1Valid = formData.name && formData.email && formData.phone && formData.businessName && formData.businessDescription && formData.postcode;
  const isStep2Valid = formData.selectedSlot;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {step === 1 ? 'Tell Us About Your Business' : 'Book Your Call'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Step 1: Business Details */}
        {step === 1 && (
          <div className="p-8">
            <div className="mb-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tell Us About Your Business</h3>
              <p className="text-gray-600">
                We'll use this information to prepare for our call and understand your needs better.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Your Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="your.email@company.com"
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="e.g., 07123 456789"
                />
              </div>

              {/* Business Name Field */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Business Name *
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="e.g., Your Business Ltd"
                />
              </div>

              {/* Website Field */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  Current Website
                  <span className="ml-1 text-xs text-gray-500">(Optional)</span>
                </label>
                <input
                  type="url"
                  value={formData.currentWebsite}
                  onChange={(e) => handleInputChange('currentWebsite', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="https://yourwebsite.co.uk"
                />
              </div>

              {/* Postcode Field */}
              <div className="space-y-2 md:col-span-1">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Postcode Location *
                </label>
                <input
                  type="text"
                  value={formData.postcode}
                  onChange={(e) => handleInputChange('postcode', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="e.g., SW1A 0AA"
                />
              </div>
            </div>

            {/* Business Description - Full Width */}
            <div className="mt-6 space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                What does your business do? *
              </label>
              <div className="relative">
                <textarea
                  value={formData.businessDescription}
                  onChange={(e) => {
                    if (e.target.value.length <= 500) {
                      handleInputChange('businessDescription', e.target.value);
                    }
                  }}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                  placeholder="Tell us about your business, services, and target customers. This helps us prepare for our call and understand how we can best help you grow online."
                ></textarea>
                <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                  {formData.businessDescription.length}/500
                </div>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="mt-8 mb-6">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span>Step 1 of 2</span>
                <span>Business Details</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full w-1/2 transition-all duration-300"></div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-gray-100">
              <div className="text-sm text-gray-500">
                <span className="text-red-500">*</span> Required fields
              </div>
              <button
                onClick={handleNext}
                disabled={!isStep1Valid}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 ${
                  isStep1Valid
                    ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <span>Next: Book Your Call</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Calendar Booking */}
        {step === 2 && (
          <div className="p-8">
            <div className="mb-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose Your Preferred Time</h3>
              <p className="text-gray-600">
                Select from our available slots over the next 2 weeks. All times are UK time.
              </p>
            </div>

            {/* Week 1 */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                {week1[0]?.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })} - {week1[4]?.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })}
              </h4>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                {week1.map((day, dayIndex) => (
                  <div key={`week1-${dayIndex}`} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                    <div className="bg-gray-50 px-3 py-2 border-b border-gray-200">
                      <h5 className="font-medium text-gray-900 text-sm text-center">
                        {day.toLocaleDateString('en-GB', { weekday: 'short' })}
                      </h5>
                      <p className="text-gray-600 text-xs text-center">
                        {day.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                      </p>
                    </div>
                    <div className="p-2 space-y-2">
                      {timeSlots.map((time, timeIndex) => {
                        const slotString = `${day.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })} at ${time}`;
                        const isSelected = formData.selectedSlot === slotString;
                        const isBooked = isSlotBooked(day, time);
                        
                        return (
                          <button
                            key={timeIndex}
                            onClick={() => !isBooked && handleSlotSelect(day, time)}
                            disabled={isBooked}
                            className={`w-full p-2 rounded-md border transition-all text-xs font-medium ${
                              isBooked
                                ? 'border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed'
                                : isSelected
                                ? 'border-orange-500 bg-orange-500 text-white shadow-md'
                                : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50 text-gray-700'
                            }`}
                          >
                            {isBooked ? 'Booked' : time.replace(' - ', '-').replace(' AM', 'am').replace(' PM', 'pm')}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Week 2 */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                {week2[0]?.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })} - {week2[4]?.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })}
              </h4>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                {week2.map((day, dayIndex) => (
                  <div key={`week2-${dayIndex}`} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                    <div className="bg-gray-50 px-3 py-2 border-b border-gray-200">
                      <h5 className="font-medium text-gray-900 text-sm text-center">
                        {day.toLocaleDateString('en-GB', { weekday: 'short' })}
                      </h5>
                      <p className="text-gray-600 text-xs text-center">
                        {day.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                      </p>
                    </div>
                    <div className="p-2 space-y-2">
                      {timeSlots.map((time, timeIndex) => {
                        const slotString = `${day.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })} at ${time}`;
                        const isSelected = formData.selectedSlot === slotString;
                        const isBooked = isSlotBooked(day, time);
                        
                        return (
                          <button
                            key={timeIndex}
                            onClick={() => !isBooked && handleSlotSelect(day, time)}
                            disabled={isBooked}
                            className={`w-full p-2 rounded-md border transition-all text-xs font-medium ${
                              isBooked
                                ? 'border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed'
                                : isSelected
                                ? 'border-orange-500 bg-orange-500 text-white shadow-md'
                                : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50 text-gray-700'
                            }`}
                          >
                            {isBooked ? 'Booked' : time.replace(' - ', '-').replace(' AM', 'am').replace(' PM', 'pm')}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {formData.selectedSlot && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-green-800 font-medium">Selected Time Slot</p>
                    <p className="text-green-700">{formData.selectedSlot}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Progress Indicator */}
            <div className="mt-8 mb-6">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span>Step 2 of 2</span>
                <span>Choose Your Time</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full w-full transition-all duration-300"></div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-gray-100">
              <button
                onClick={handleBack}
                className="px-6 py-3 rounded-lg font-semibold transition-all duration-200 bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back</span>
              </button>
              <button
                onClick={handleSubmit}
                disabled={!isStep2Valid}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 ${
                  isStep2Valid
                    ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Confirm Booking</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
