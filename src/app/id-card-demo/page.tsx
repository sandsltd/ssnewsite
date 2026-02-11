import IdCard, { IdCardVertical } from '@/components/IdCard';

export const metadata = {
  title: 'ID Card Demo | Saunders & Simmons',
  description: 'Team ID card design showcase',
};

export default function IdCardDemoPage() {
  const teamMembers = [
    {
      name: 'Nick Saunders',
      role: 'Co-Founder & Lead Developer',
      employeeId: 'SS-2024-001',
      department: 'Web Development',
      startDate: 'Jan 2020',
    },
    {
      name: 'Dan Simmons',
      role: 'Co-Founder & Director',
      employeeId: 'SS-2024-002',
      department: 'Business Development',
      startDate: 'Jan 2020',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#C4E3EA]/20 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C4E3EA]/30 border border-[#51AACD]/20 mb-6">
            <span className="text-sm font-semibold text-[#51AACD]">ID Card Design</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Team ID Cards
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional employee ID card designs featuring company branding, QR codes, and a premium finish that matches your website aesthetic.
          </p>
        </div>

        {/* Horizontal Cards Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Horizontal Layout</h2>
          <p className="text-gray-600 mb-8">Credit card style format - ideal for badges and digital displays.</p>

          <div className="flex flex-wrap gap-8 justify-center">
            {teamMembers.map((member) => (
              <IdCard
                key={member.employeeId}
                name={member.name}
                role={member.role}
                employeeId={member.employeeId}
                department={member.department}
                startDate={member.startDate}
              />
            ))}
          </div>
        </section>

        {/* Vertical Cards Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Vertical Layout</h2>
          <p className="text-gray-600 mb-8">Portrait format - perfect for lanyards and mobile displays.</p>

          <div className="flex flex-wrap gap-8 justify-center">
            {teamMembers.map((member) => (
              <IdCardVertical
                key={member.employeeId}
                name={member.name}
                role={member.role}
                employeeId={member.employeeId}
                department={member.department}
                startDate={member.startDate}
              />
            ))}
          </div>
        </section>

        {/* Features List */}
        <section className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Card Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Brand Colors',
                description: 'Uses your primary teal (#51AACD) and secondary cyan palette consistently.',
              },
              {
                title: 'QR Code Integration',
                description: 'Auto-generated QR codes linking to team member profiles.',
              },
              {
                title: 'Glassmorphic Design',
                description: 'Subtle gradients and transparency effects matching your site style.',
              },
              {
                title: 'Profile Silhouette',
                description: 'Professional placeholder ready for employee photos.',
              },
              {
                title: 'Status Indicator',
                description: 'Green dot showing active team member status.',
              },
              {
                title: 'Premium Shadows',
                description: 'Custom shadow effects for depth and visual appeal.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-[#51AACD]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#51AACD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
