import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ampra Support',
  description: 'Support and help for Ampra — the macOS menu bar audio switcher.',
  robots: { index: false, follow: false },
};

export default function AmpraSupport() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-4">🔊</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Ampra <span className="text-[#51AACD]">Support</span>
          </h1>
          <p className="text-lg text-gray-600">
            macOS menu bar audio switcher — v1.0
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-12 text-gray-700">

          {/* Getting started */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Started</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Where is the app?</h3>
                <p>Ampra lives in your Mac&apos;s menu bar — the row of icons at the top right of your screen. Look for the speaker icon with arrows. Click it to open the panel.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">How do I switch audio devices?</h3>
                <p>Click any device listed under <strong>Output</strong> or <strong>Input</strong> to make it the active device. The currently active device is highlighted in blue with a checkmark.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">How do I create a profile?</h3>
                <p>Click <strong>New Profile…</strong> at the bottom of the panel. Give it a name, choose your preferred output and input device, then press <strong>Save</strong>. Your profile will appear at the top of the panel for quick access.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">How do I set up keyboard shortcuts?</h3>
                <p>Click <strong>Settings…</strong> (or press ⌘,) and click into any shortcut field, then press your desired key combination. Shortcuts work system-wide from any app.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">How do I make Ampra start at login?</h3>
                <p>Open <strong>Settings…</strong> and toggle <strong>Launch at login</strong>. Ampra will start silently in the background each time your Mac starts up.</p>
              </div>
            </div>
          </div>

          {/* Common issues */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Issues</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">A device isn&apos;t showing up</h3>
                <p>Try unplugging and reconnecting the device. If it&apos;s a Bluetooth device, disconnect and reconnect it from your Mac&apos;s Bluetooth menu. Ampra detects device changes automatically — it should appear within a few seconds.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">A profile shows an orange warning</h3>
                <p>The orange triangle means one or more devices in that profile aren&apos;t currently connected. Connect the missing device and the profile will become available again automatically.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Devices aren&apos;t showing after waking from sleep</h3>
                <p>Ampra automatically re-scans for devices 2 seconds after your Mac wakes from sleep to allow Bluetooth devices time to reconnect. If devices still don&apos;t appear, click the menu bar icon to open the panel — this triggers a refresh.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">The volume slider doesn&apos;t do anything</h3>
                <p>Some audio devices — particularly HDMI and optical outputs — don&apos;t support software volume control. In these cases the slider is visible but has no effect. Volume should be adjusted through the device itself or your TV/monitor.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">A keyboard shortcut isn&apos;t working</h3>
                <p>Make sure no other app is using the same key combination. Try clearing the shortcut in Settings and assigning a different one. If the issue persists, quitting and relaunching Ampra usually resolves it.</p>
              </div>
            </div>
          </div>

          {/* Privacy */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy</h2>
            <div className="bg-gray-50 rounded-lg p-5">
              <p>Ampra does not collect any personal data, analytics, or usage information. All settings and profiles are stored locally on your Mac using standard system storage. No account is required and no data ever leaves your device.</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <div className="bg-gray-50 rounded-lg p-5">
              <p className="mb-3">If you&apos;re experiencing an issue not covered above, or have a feature request, get in touch:</p>
              <a
                href="mailto:ampra@saunders-simmons.co.uk?subject=Ampra Support"
                className="inline-block bg-[#51AACD] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#3d96bc] transition-colors"
              >
                Email Support
              </a>
              <p className="mt-4 text-sm text-gray-500">Please include your macOS version and a description of the issue. We&apos;ll get back to you as soon as possible.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Footer note */}
      <section className="py-8 px-4 border-t border-gray-100">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <span>Ampra © 2026 Nicholas Saunders</span>
          <div className="flex gap-4">
            <a href="/ampra/privacy" className="hover:text-[#51AACD] transition-colors">Privacy Policy</a>
            <a href="/ampra/terms" className="hover:text-[#51AACD] transition-colors">Terms of Service</a>
          </div>
        </div>
      </section>
    </div>
  );
}
