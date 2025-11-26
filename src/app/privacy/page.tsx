import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - Saunders Simmons Ltd',
  description: 'Privacy Policy for Saunders Simmons Ltd. Learn how we collect, use, and protect your personal information.',
  openGraph: {
    title: 'Privacy Policy - Saunders Simmons Ltd',
    description: 'Privacy Policy for Saunders Simmons Ltd',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Privacy <span className="text-[#51AACD]">Policy</span>
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p>
                Saunders Simmons Ltd ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, postal address, and other contact details you provide when contacting us or using our services.</li>
                <li><strong>Business Information:</strong> Company name, business type, and other business-related information you provide.</li>
                <li><strong>Technical Information:</strong> IP address, browser type, device information, and usage data collected automatically when you visit our website.</li>
                <li><strong>Cookies:</strong> Information collected through cookies and similar tracking technologies. See our <Link href="/cookies" className="text-[#51AACD] hover:underline">Cookie Policy</Link> for more details.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, maintain, and improve our services</li>
                <li>To communicate with you about our services, respond to inquiries, and provide customer support</li>
                <li>To send you marketing communications (with your consent) about our services and updates</li>
                <li>To process payments and manage billing</li>
                <li>To comply with legal obligations and protect our rights</li>
                <li>To analyse website usage and improve user experience</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Legal Basis for Processing</h2>
              <p className="mb-3">Under UK GDPR, we process your personal data based on:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Consent:</strong> When you have given clear consent for us to process your data</li>
                <li><strong>Contract:</strong> When processing is necessary for the performance of a contract with you</li>
                <li><strong>Legal Obligation:</strong> When we need to comply with a legal obligation</li>
                <li><strong>Legitimate Interests:</strong> When processing is necessary for our legitimate business interests</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Sharing and Disclosure</h2>
              <p className="mb-3">We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (e.g., hosting providers, payment processors, email services)</li>
                <li><strong>Business Partners:</strong> Trusted partners who assist in delivering our services</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale, or transfer of assets</li>
              </ul>
              <p className="mt-3">
                We do not sell your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfil the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymise it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights</h2>
              <p className="mb-3">Under UK GDPR, you have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right of Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data in certain circumstances</li>
                <li><strong>Right to Restrict Processing:</strong> Request limitation of how we process your data</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another service provider</li>
                <li><strong>Right to Object:</strong> Object to processing of your data for certain purposes</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at <a href="mailto:hello@saunders-simmons.co.uk" className="text-[#51AACD] hover:underline">hello@saunders-simmons.co.uk</a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries outside the UK and European Economic Area (EEA). We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable data protection laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="mb-3">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold mb-2">Saunders Simmons Ltd</p>
                <p>15 Oxford Road, Pen Mill Trading Estate</p>
                <p>Yeovil, Somerset BA21 5HR</p>
                <p className="mt-2">
                  Email: <a href="mailto:hello@saunders-simmons.co.uk" className="text-[#51AACD] hover:underline">hello@saunders-simmons.co.uk</a>
                </p>
                <p>
                  Phone: <a href="tel:03300436608" className="text-[#51AACD] hover:underline">0330 043 6608</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

