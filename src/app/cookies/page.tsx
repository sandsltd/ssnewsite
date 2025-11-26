import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy - Saunders Simmons Ltd',
  description: 'Cookie Policy for Saunders Simmons Ltd. Learn about how we use cookies and similar technologies on our website.',
  openGraph: {
    title: 'Cookie Policy - Saunders Simmons Ltd',
    description: 'Cookie Policy for Saunders Simmons Ltd',
    type: 'website',
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Cookie <span className="text-[#51AACD]">Policy</span>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies allow websites to recognise your device and store some information about your preferences or past actions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
              <p className="mb-3">
                Saunders Simmons Ltd uses cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ensure our website functions properly and securely</li>
                <li>Remember your preferences and settings</li>
                <li>Analyse how visitors use our website to improve user experience</li>
                <li>Provide personalised content and features</li>
                <li>Track the effectiveness of our marketing campaigns</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                <p className="mb-2">
                  These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions you take, such as setting privacy preferences or filling in forms.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Purpose:</strong> Security, authentication, and core functionality
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
                <p className="mb-2">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Purpose:</strong> Website analytics, performance monitoring, and improvement
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
                <p className="mb-2">
                  These cookies may be set through our site by advertising partners to build a profile of your interests and show you relevant content on other sites.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Purpose:</strong> Marketing, advertising, and personalisation
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Functional Cookies</h3>
                <p className="mb-2">
                  These cookies enable enhanced functionality and personalisation, such as remembering your preferences.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Purpose:</strong> User preferences, enhanced features, and personalisation
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
              <p className="mb-3">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics and deliver content. These may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics:</strong> To analyse website traffic and user behaviour</li>
                <li><strong>Social Media Platforms:</strong> To enable social sharing and integration</li>
                <li><strong>Advertising Networks:</strong> To deliver relevant advertisements</li>
              </ul>
              <p className="mt-3">
                These third parties may use cookies to collect information about your online activities across different websites. We do not control these third-party cookies, and you should check their respective privacy policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Managing Cookies</h2>
              <p className="mb-3">
                You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. However, this may prevent you from taking full advantage of our website.
              </p>
              <p className="mb-3">
                You can manage cookies through:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or accept cookies, and delete existing cookies. Check your browser's help menu for instructions.</li>
                <li><strong>Cookie Consent Banner:</strong> When you first visit our website, you may see a cookie consent banner where you can choose which types of cookies to accept.</li>
                <li><strong>Third-Party Opt-Out:</strong> You can opt out of certain third-party cookies through their respective websites (e.g., Google Analytics opt-out).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Browser-Specific Instructions</h2>
              <p className="mb-3">
                To manage cookies in your browser:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Do Not Track Signals</h2>
              <p>
                Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Currently, there is no standard for how DNT signals should be interpreted. We do not currently respond to DNT browser signals.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Impact of Disabling Cookies</h2>
              <p>
                If you choose to disable cookies, some features of our website may not function properly. Essential cookies are required for basic website functionality, so disabling all cookies may prevent you from accessing certain parts of our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Updates to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. More Information</h2>
              <p className="mb-3">
                For more information about cookies and how they are used, you can visit:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#51AACD] hover:underline">www.allaboutcookies.org</a></li>
                <li><a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-[#51AACD] hover:underline">www.youronlinechoices.com</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="mb-3">
                If you have any questions about our use of cookies, please contact us:
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
              <p className="mt-4">
                For more information about how we handle your personal data, please see our <Link href="/privacy" className="text-[#51AACD] hover:underline">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

