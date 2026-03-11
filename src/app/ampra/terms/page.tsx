import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ampra — Terms of Service',
  description: 'Terms of Service for Ampra, the macOS menu bar audio switcher.',
  robots: { index: false, follow: false },
};

export default function AmpraTerms() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-4">📄</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Terms of <span className="text-[#51AACD]">Service</span>
          </h1>
          <p className="text-lg text-gray-600">Ampra · Last updated: March 2026</p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8 text-gray-700">

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Acceptance</h2>
            <p>By downloading or using Ampra, you agree to these Terms of Service. If you do not agree, please do not use the app.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. The App</h2>
            <p>Ampra is a macOS utility that allows you to switch audio input and output devices, save device profiles, and assign keyboard shortcuts. It is developed and published by Nicholas Saunders, trading as Saunders Simmons Ltd, 15 Oxford Road, Pen Mill Trading Estate, Yeovil, Somerset, BA21 5HR, United Kingdom.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Licence</h2>
            <p>Ampra is licensed to you, not sold. Your purchase grants you a personal, non-exclusive, non-transferable licence to use the app on Mac computers that you own or control, subject to the Mac App Store Terms and Conditions.</p>
            <p className="mt-3">You may not copy, modify, distribute, sell, or sublicense any part of the app.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Permitted Use</h2>
            <p>Ampra is intended for personal and professional use on your own Mac. You agree not to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Reverse engineer, decompile, or disassemble the app</li>
              <li>Use the app for any unlawful purpose</li>
              <li>Attempt to circumvent any security or licensing mechanisms</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Purchases and Refunds</h2>
            <p>Ampra is sold as a one-time purchase through the Mac App Store. All purchases are processed by Apple and are subject to Apple&apos;s refund policy. We do not handle payments directly. For refund requests, please contact Apple Support.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Updates</h2>
            <p>We may release updates to Ampra from time to time. Updates delivered through the Mac App Store are covered by these Terms. We reserve the right to change, suspend, or discontinue any feature of the app at any time.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Disclaimer of Warranties</h2>
            <p>Ampra is provided &quot;as is&quot; without warranty of any kind, express or implied. We do not warrant that the app will be error-free, uninterrupted, or compatible with all system configurations. Use the app at your own risk.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Limitation of Liability</h2>
            <p>To the fullest extent permitted by applicable law, Saunders Simmons Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of Ampra, even if we have been advised of the possibility of such damages.</p>
            <p className="mt-3">Our total liability to you for any claim arising from these Terms or your use of Ampra shall not exceed the amount you paid for the app.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">9. Governing Law</h2>
            <p>These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">10. Changes to These Terms</h2>
            <p>We may update these Terms from time to time. Continued use of Ampra after changes are posted constitutes acceptance of the updated Terms. We will update the date at the top of this page when changes are made.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">11. Contact</h2>
            <p>For any questions about these Terms, please contact us at <a href="mailto:ampra@saunders-simmons.co.uk" className="text-[#51AACD] hover:underline">ampra@saunders-simmons.co.uk</a>.</p>
          </div>

        </div>
      </section>

      <section className="py-8 px-4 border-t border-gray-100">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <span>Ampra © 2026 Nicholas Saunders</span>
          <div className="flex gap-4">
            <a href="/ampra/support" className="hover:text-[#51AACD] transition-colors">Support</a>
            <a href="/ampra/privacy" className="hover:text-[#51AACD] transition-colors">Privacy Policy</a>
          </div>
        </div>
      </section>
    </div>
  );
}
