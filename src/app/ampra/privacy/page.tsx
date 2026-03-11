import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ampra — Privacy Policy',
  description: 'Privacy Policy for Ampra, the macOS menu bar audio switcher.',
  robots: { index: false, follow: false },
};

export default function AmpraPrivacy() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-4">🔒</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Privacy <span className="text-[#51AACD]">Policy</span>
          </h1>
          <p className="text-lg text-gray-600">Ampra · Last updated: March 2026</p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8 text-gray-700">

          <div className="bg-[#51AACD]/10 border border-[#51AACD]/20 rounded-lg p-5">
            <p className="font-semibold text-gray-900">The short version: Ampra collects nothing. Zero.</p>
            <p className="mt-1 text-sm">No accounts, no analytics, no tracking. Everything stays on your Mac.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Who We Are</h2>
            <p>Ampra is a macOS application developed and published by Nicholas Saunders, trading as Saunders Simmons Ltd, 15 Oxford Road, Pen Mill Trading Estate, Yeovil, Somerset, BA21 5HR, United Kingdom.</p>
            <p className="mt-3">Contact: <a href="mailto:ampra@saunders-simmons.co.uk" className="text-[#51AACD] hover:underline">ampra@saunders-simmons.co.uk</a></p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Data We Collect</h2>
            <p>Ampra does not collect, transmit, or store any personal data. Specifically:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>No account or registration is required</li>
              <li>No analytics or usage tracking of any kind</li>
              <li>No crash reporting sent to external servers</li>
              <li>No advertising identifiers or third-party SDKs</li>
              <li>No network connections are made by the app</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Data Stored Locally</h2>
            <p>Ampra stores the following data <strong>locally on your device only</strong>, using macOS standard storage (UserDefaults):</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Your saved audio profiles (device names and pairings)</li>
              <li>Per-device volume preferences</li>
              <li>Keyboard shortcut assignments</li>
              <li>App preferences (e.g. launch at login setting)</li>
            </ul>
            <p className="mt-3">This data never leaves your device and can be cleared at any time by deleting the app.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. App Store</h2>
            <p>Ampra is distributed via the Mac App Store. Apple may collect certain information as part of the purchase and download process in accordance with <a href="https://www.apple.com/legal/privacy/" className="text-[#51AACD] hover:underline" target="_blank" rel="noopener noreferrer">Apple&apos;s Privacy Policy</a>. We have no access to this data.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Children&apos;s Privacy</h2>
            <p>Ampra does not collect any data from anyone, including children under 13. The app is suitable for all ages.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Changes to This Policy</h2>
            <p>If this policy changes in a future version of Ampra, we will update this page and the date above. We will never introduce data collection without clearly disclosing it here first.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Contact</h2>
            <p>Questions about this policy? Email us at <a href="mailto:ampra@saunders-simmons.co.uk" className="text-[#51AACD] hover:underline">ampra@saunders-simmons.co.uk</a>.</p>
          </div>

        </div>
      </section>

      <section className="py-8 px-4 border-t border-gray-100">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <span>Ampra © 2026 Nicholas Saunders</span>
          <div className="flex gap-4">
            <a href="/ampra/support" className="hover:text-[#51AACD] transition-colors">Support</a>
            <a href="/ampra/terms" className="hover:text-[#51AACD] transition-colors">Terms of Service</a>
          </div>
        </div>
      </section>
    </div>
  );
}
