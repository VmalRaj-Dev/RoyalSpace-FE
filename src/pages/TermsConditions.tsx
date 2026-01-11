import { useEffect } from 'react';
import SEO from '../components/common/SEO';

export default function TermsConditions() {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <SEO
        title="Terms & Conditions | RSpace Interiors"
        description="Read our Terms and Conditions to understand the rules and regulations for using RSpace Interiors services."
        keywords="terms and conditions, terms of service, user agreement, RSpace Interiors"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 md:pt-40 md:pb-16 min-h-screen">
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-primary mr-4"></div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Terms & Conditions
            </h1>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-gray-600">
            Welcome to RSpace Interiors. By accessing and using our website and services, you agree to comply with and be bound by the following terms and conditions.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-primary mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              1. Acceptance of Terms
            </h2>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-gray-600">
            By using this website, you confirm that you accept these terms and conditions and that you agree to comply with them.
            If you do not agree to these terms, you must not use our website or services.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-primary mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              2. Services Provided
            </h2>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-gray-600">
            RSpace Interiors provides premium furniture and interior design solutions including:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
            <li>INTERIO - Home Interior Solutions</li>
            <li>EDUFURN - Educational Institution Furniture</li>
            <li>MEDIFURN - Healthcare & Hospital Furniture</li>
            <li>MODULAR - Office Workstations & Modular Furniture</li>
            <li>SHOPFIT - Retail & Commercial Solutions</li>
          </ul>
        </div>

        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-primary mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              3. Orders and Payments
            </h2>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-4">
            All orders are subject to acceptance and availability. We reserve the right to refuse any order at our discretion.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Prices are subject to change without notice</li>
            <li>Payment terms will be specified in the quotation</li>
            <li>Full or partial payment may be required before order processing</li>
            <li>All payments are processed securely through authorized payment gateways</li>
          </ul>
        </div>

        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-primary mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              4. Delivery and Installation
            </h2>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-4">
            We strive to deliver products within the estimated timeframe. However, delivery dates are approximate and not guaranteed.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Free installation is provided for applicable products</li>
            <li>Delivery charges may apply based on location</li>
            <li>Customer must ensure access to delivery location</li>
            <li>Any delays due to customer unavailability may incur additional charges</li>
          </ul>
        </div>

        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-primary mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              5. Warranty and Returns
            </h2>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-4">
            We provide warranty coverage on our products as specified in the product documentation.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Warranty terms vary by product category</li>
            <li>Warranty does not cover damage due to misuse or normal wear and tear</li>
            <li>Custom-made products are non-returnable unless defective</li>
            <li>Returns must be requested within the specified period</li>
            <li>Products must be in original condition for returns</li>
          </ul>
        </div>

        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-primary mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              6. Intellectual Property
            </h2>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-gray-600">
            All content on this website, including but not limited to text, graphics, logos, images, and software,
            is the property of RSpace Interiors and is protected by copyright and intellectual property laws.
            You may not reproduce, distribute, or use any content without our express written permission.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-primary mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              7. Limitation of Liability
            </h2>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-gray-600">
            RSpace Interiors shall not be liable for any indirect, incidental, special, or consequential damages
            arising out of or in connection with the use of our products or services. Our total liability shall
            not exceed the amount paid for the specific product or service in question.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-primary mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              8. Privacy and Data Protection
            </h2>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-gray-600">
            We are committed to protecting your privacy. Please refer to our{' '}
            <a href="/privacy-policy" className="text-primary hover:underline font-semibold">Privacy Policy</a>{' '}
            for information on how we collect, use, and protect your personal data.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-primary mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              9. Modifications to Terms
            </h2>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-gray-600">
            We reserve the right to modify these terms and conditions at any time. Changes will be effective
            immediately upon posting on this website. Your continued use of our services after changes are posted
            constitutes your acceptance of the modified terms.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-primary mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              10. Governing Law
            </h2>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-gray-600">
            These terms and conditions are governed by and construed in accordance with the laws of India.
            Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Erode, Tamil Nadu.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-primary mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              11. Contact Information
            </h2>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-gray-600">
            If you have any questions about these Terms & Conditions, please contact us:
          </p>
          <div className="mt-6 space-y-2 text-gray-700">
            <p className="font-semibold text-lg">RSpace Interiors</p>
            <p>Email: <a href="mailto:info@royalfur.in" className="text-primary hover:underline">info@royalfur.in</a></p>
            <p>Phone: <a href="tel:+919876543211" className="text-primary hover:underline">+91 9876543211</a></p>
            <p>Address: 3-3, Kanjikovil Main Road, Thiththampalayam Pirivu, Perundurai, Erode - 638 052</p>
          </div>
          <p className="text-sm text-gray-500 mt-6 italic">
            Last Updated: October 24, 2025
          </p>
        </div>
      </div>
    </>
  );
}
