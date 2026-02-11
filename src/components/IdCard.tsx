'use client';

import Image from 'next/image';

interface IdCardProps {
  name: string;
  role: string;
  employeeId: string;
  photoUrl?: string;
  department?: string;
  startDate?: string;
}

export default function IdCard({
  name,
  role,
  employeeId,
  photoUrl,
  department = 'Web Development',
  startDate,
}: IdCardProps) {
  // Generate a simple QR code placeholder (in production, use a QR library)
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://saunderssimmons.co.uk/team/${employeeId}&bgcolor=ffffff&color=51AACD`;

  return (
    <div className="id-card relative w-[380px] h-[240px] rounded-3xl overflow-hidden shadow-premium-xl">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8fcfd] to-[#C4E3EA]/30" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#51AACD]/10 to-[#51AACD]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#C4E3EA]/40 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#51AACD] via-[#3E8BA8] to-[#51AACD]" />

      {/* Content container */}
      <div className="relative h-full p-5 flex">
        {/* Left section - Photo and QR */}
        <div className="flex flex-col items-center justify-between mr-5">
          {/* Profile photo */}
          <div className="relative">
            <div className="w-[90px] h-[90px] rounded-2xl overflow-hidden border-2 border-[#51AACD]/30 shadow-lg">
              {photoUrl ? (
                <Image
                  src={photoUrl}
                  alt={name}
                  width={90}
                  height={90}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#C4E3EA] to-[#a8d4e0] flex items-center justify-center">
                  <svg className="w-14 h-14 text-[#51AACD]/60" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              )}
            </div>
            {/* Status indicator */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-sm" />
          </div>

          {/* QR Code */}
          <div className="mt-3">
            <div className="w-[70px] h-[70px] rounded-xl overflow-hidden border border-[#51AACD]/20 bg-white p-1.5 shadow-sm">
              <Image
                src={qrCodeUrl}
                alt="Employee QR Code"
                width={80}
                height={80}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Right section - Info */}
        <div className="flex-1 flex flex-col justify-between py-1">
          {/* Company branding */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden shadow-sm">
              <Image
                src="/logos/saunderssimmonslogo.webp"
                alt="Saunders & Simmons"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 leading-tight">Saunders & Simmons</h3>
              <p className="text-[10px] text-[#51AACD] font-medium uppercase tracking-wider">Web Design Studio</p>
            </div>
          </div>

          {/* Employee info */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-xl font-bold text-gray-900 leading-tight">{name}</h2>
            <p className="text-sm font-semibold text-[#51AACD] mt-0.5">{role}</p>
            <p className="text-xs text-gray-500 mt-1">{department}</p>
          </div>

          {/* Bottom details */}
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider">Employee ID</p>
              <p className="text-sm font-mono font-bold text-gray-700">{employeeId}</p>
            </div>
            {startDate && (
              <div className="text-right">
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Since</p>
                <p className="text-xs font-semibold text-gray-600">{startDate}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#51AACD]/50 to-transparent" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2351AACD' fill-opacity='1'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />
    </div>
  );
}

// Vertical/Portrait variant
export function IdCardVertical({
  name,
  role,
  employeeId,
  photoUrl,
  department = 'Web Development',
  startDate,
}: IdCardProps) {
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://saunderssimmons.co.uk/team/${employeeId}&bgcolor=ffffff&color=51AACD`;

  return (
    <div className="id-card-vertical relative w-[260px] h-[400px] rounded-3xl overflow-hidden shadow-premium-xl">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8fcfd] to-[#C4E3EA]/20" />

      {/* Decorative wave */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-br from-[#51AACD] to-[#3E8BA8]">
        <svg className="absolute bottom-0 left-0 right-0" viewBox="0 0 260 30" preserveAspectRatio="none">
          <path d="M0,30 C65,10 195,10 260,30 L260,30 L0,30 Z" fill="white" />
        </svg>
      </div>

      {/* Company logo in header */}
      <div className="absolute top-4 left-0 right-0 flex justify-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm overflow-hidden p-1">
            <Image
              src="/logos/saunderssimmonslogo.webp"
              alt="Saunders & Simmons"
              width={40}
              height={40}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white leading-tight">Saunders & Simmons</h3>
            <p className="text-[9px] text-white/80 font-medium uppercase tracking-wider">Web Design Studio</p>
          </div>
        </div>
      </div>

      {/* Profile photo - overlapping header */}
      <div className="absolute top-16 left-0 right-0 flex justify-center">
        <div className="relative">
          <div className="w-[100px] h-[100px] rounded-2xl overflow-hidden border-4 border-white shadow-xl">
            {photoUrl ? (
              <Image
                src={photoUrl}
                alt={name}
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#C4E3EA] to-[#a8d4e0] flex items-center justify-center">
                <svg className="w-16 h-16 text-[#51AACD]/60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            )}
          </div>
          {/* Status indicator */}
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-white shadow-sm" />
        </div>
      </div>

      {/* Content */}
      <div className="relative h-full pt-40 px-5 pb-4 flex flex-col">
        {/* Employee info */}
        <div className="text-center">
          <h2 className="text-lg font-bold text-gray-900 leading-tight">{name}</h2>
          <p className="text-sm font-semibold text-[#51AACD] mt-0.5">{role}</p>
          <p className="text-xs text-gray-500 mt-0.5">{department}</p>

          {/* Divider */}
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#51AACD]/30 to-transparent mx-auto my-3" />

          {/* Employee ID */}
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Employee ID</p>
            <p className="text-base font-mono font-bold text-gray-700">{employeeId}</p>
          </div>

          {startDate && (
            <div className="mt-1">
              <p className="text-[10px] text-gray-400 uppercase tracking-wider">Member Since</p>
              <p className="text-xs font-semibold text-gray-600">{startDate}</p>
            </div>
          )}
        </div>

        {/* QR Code at bottom */}
        <div className="flex justify-center mt-auto">
          <div className="w-[60px] h-[60px] rounded-lg overflow-hidden border border-[#51AACD]/20 bg-white p-1 shadow-sm">
            <Image
              src={qrCodeUrl}
              alt="Employee QR Code"
              width={60}
              height={60}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2351AACD' fill-opacity='1'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />
    </div>
  );
}
