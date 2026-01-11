import { useEffect } from 'react';
import SEO from '../components/common/SEO';

export default function PrivacyPolicy() {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <SEO
        title="Privacy Policy | RSpace Interiors"
        description="Read our Privacy Policy to understand how RSpace Interiors collects, uses, and protects your personal information."
        keywords="privacy policy, data protection, personal information, RSpace Interiors"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 md:pt-40 md:pb-16 min-h-screen">
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-primary mr-4"></div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Privacy Policy
            </h1>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-gray-600">
            At RSpace Interiors, we are committed to protecting your privacy and ensuring the security of your personal information.
            This Privacy Policy outlines how we collect, use, and safeguard your information when you use our services.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-primary mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Information We Collect
            </h2>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-gray-600">
            We may collect the following types of information when you interact with our website or services:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
            <li>Personal identification information (name, email, phone number, etc.)</li>
            <li>Billing and shipping addresses</li>
            <li>Payment information (processed securely through our payment processors)</li>
            <li>Browsing behavior and website usage data</li>
            <li>Communication preferences</li>
          </ul>
        </div>

        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-primary mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              How We Use Your Information
            </h2>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-gray-600">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
            <li>Processing and fulfilling your orders</li>
            <li>Providing customer support</li>
            <li>Improving our products and services</li>
            <li>Sending promotional communications (with your consent)</li>
            <li>Analyzing website usage and trends</li>
            <li>Preventing fraud and ensuring security</li>
          </ul>
        </div>

        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-primary mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Data Security
            </h2>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-gray-600">
            We implement appropriate security measures to protect your personal information from unauthorized access,
            alteration, disclosure, or destruction. All transactions are processed through secure gateways and are
            encrypted using SSL technology.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-primary mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Third-Party Services
            </h2>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-gray-600">
            We may use third-party services such as Google Analytics, Google Ads, Facebook Pixel, and other marketing tools to
            analyze website traffic and improve our marketing efforts. These services may collect information about
            your use of our website and other websites to provide measurement services and target ads.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-primary mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Your Rights
            </h2>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-gray-600">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
            <li>Access your personal information</li>
            <li>Request correction of your personal information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent where applicable</li>
          </ul>
          <p className="text-base md:text-lg leading-relaxed text-gray-600 mt-4">
            To exercise any of these rights, please contact us using the information provided below.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-primary mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Changes to This Policy
            </h2>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-gray-600">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
            new Privacy Policy on this page and updating the "Last Updated" date below. You are advised to review
            this Privacy Policy periodically for any changes.
          </p>
          <p className="text-sm text-gray-500 mt-4 italic">
            Last Updated: October 24, 2025
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-primary mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Contact Us
            </h2>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-gray-600">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="mt-6 space-y-2 text-gray-700">
            <p className="font-semibold text-lg">RSpace Interiors</p>
            <p>Email: <a href="mailto:info@royalfur.in" className="text-primary hover:underline">info@royalfur.in</a></p>
            <p>Phone: <a href="tel:+919876543211" className="text-primary hover:underline">+91 9876543211</a></p>
            <p>Address: 3-3, Kanjikovil Main Road, Thiththampalayam Pirivu, Perundurai, Erode - 638 052</p>
          </div>
        </div>
      </div>
    </>
  );
}
