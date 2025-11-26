import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service - Saunders Simmons Ltd',
  description: 'Terms of Service for Saunders Simmons Ltd. Read our terms and conditions for using our web design, SEO, and software development services.',
  openGraph: {
    title: 'Terms of Service - Saunders Simmons Ltd',
    description: 'Terms of Service for Saunders Simmons Ltd',
    type: 'website',
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Terms of <span className="text-[#51AACD]">Service</span>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using the services of Saunders Simmons Ltd ("we", "our", or "us"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
              <p className="mb-3">We provide the following services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Web design and development</li>
                <li>SEO marketing services</li>
                <li>Custom software development</li>
                <li>Website hosting and maintenance</li>
                <li>Related digital services</li>
              </ul>
              <p className="mt-3">
                All services are provided subject to these Terms of Service and any specific service agreements we may enter into with you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Service Agreements</h2>
              <p>
                Specific terms, pricing, deliverables, and timelines for each project will be outlined in a separate service agreement or proposal. These Terms of Service apply to all services unless specifically modified by a written service agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
              <p className="mb-3">Payment terms are as follows:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment is due as specified in your service agreement</li>
                <li>All prices are exclusive of VAT unless stated otherwise</li>
                <li>Late payments may incur interest charges and may result in suspension of services</li>
                <li>We reserve the right to require a deposit before commencing work</li>
                <li>Refunds are subject to the terms outlined in your specific service agreement</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Client Responsibilities</h2>
              <p className="mb-3">You agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information necessary for us to perform the services</li>
                <li>Provide content, materials, and approvals in a timely manner</li>
                <li>Ensure you have the right to use any content, images, or materials you provide</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Maintain the security of any login credentials we provide</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
              <p className="mb-3">
                Unless otherwise agreed in writing:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Upon full payment, you will own the final deliverables created specifically for you</li>
                <li>We retain ownership of any pre-existing tools, code, templates, or methodologies we use</li>
                <li>You grant us a licence to use your name, logo, and project details for portfolio and marketing purposes (unless otherwise agreed)</li>
                <li>Any third-party materials (fonts, images, plugins) remain subject to their respective licences</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Warranties and Disclaimers</h2>
              <p className="mb-3">
                We warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Services will be performed with reasonable skill and care</li>
                <li>We will use industry-standard practices and technologies</li>
              </ul>
              <p className="mt-3">
                However, we do not guarantee:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Specific results from SEO or marketing services (results vary based on many factors)</li>
                <li>Uninterrupted or error-free service</li>
                <li>Compatibility with all devices, browsers, or third-party services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, our total liability for any claims arising from or related to our services shall not exceed the total amount paid by you to us in the 12 months preceding the claim. We shall not be liable for any indirect, incidental, special, or consequential damages, including but not limited to loss of profits, data, or business opportunities.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
              <p className="mb-3">
                Either party may terminate a service agreement:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With written notice as specified in the service agreement</li>
                <li>Immediately if the other party breaches a material term and fails to remedy it within a reasonable time</li>
                <li>Immediately if either party becomes insolvent or enters into administration</li>
              </ul>
              <p className="mt-3">
                Upon termination, you remain responsible for payment for all work completed up to the termination date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Confidentiality</h2>
              <p>
                We agree to keep confidential any proprietary or sensitive information you share with us, except where disclosure is required by law or with your consent. You agree to keep confidential any proprietary methodologies or processes we share with you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Third-Party Services</h2>
              <p>
                Our services may integrate with or rely on third-party services (hosting, payment processors, analytics, etc.). We are not responsible for the availability, performance, or terms of these third-party services. Your use of third-party services is subject to their respective terms and conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Force Majeure</h2>
              <p>
                We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, pandemics, or failures of third-party services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. We will notify you of any material changes by posting the updated terms on our website. Your continued use of our services after such changes constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Us</h2>
              <p className="mb-3">
                If you have any questions about these Terms of Service, please contact us:
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

