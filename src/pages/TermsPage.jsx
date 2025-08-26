import React from 'react'
import { motion } from 'framer-motion'

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms of Use
            </h1>
            <p className="text-xl text-gray-600">
              We prioritize your security as much as our own
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">(1) Introduction</h2>
            <p className="text-gray-700 mb-6">
              These terms and conditions govern your use of our website; by using our website, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">(2) License to use website</h2>
            <p className="text-gray-700 mb-4">
              Unless otherwise stated, we or our licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved.
            </p>
            <p className="text-gray-700 mb-4">
              You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.
            </p>
            <p className="text-gray-700 mb-4">You must not:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>republish material from this website (including republication on another website);</li>
              <li>sell, rent or sub-license material from the website;</li>
              <li>show any material from the website in public;</li>
              <li>reproduce, duplicate, copy or otherwise exploit material on our website for a commercial purpose;</li>
              <li>edit or otherwise modify any material on the website; or</li>
              <li>redistribute material from this website except for content specifically and expressly made available for redistribution (such as our newsletter).</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">(3) Acceptable use</h2>
            <p className="text-gray-700 mb-4">
              You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity.
            </p>
            <p className="text-gray-700 mb-4">
              You must not use our website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software.
            </p>
            <p className="text-gray-700 mb-4">
              You must not conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) on or in relation to our website without our express written consent.
            </p>
            <p className="text-gray-700 mb-4">
              You must not use our website to transmit or send unsolicited commercial communications.
            </p>
            <p className="text-gray-700 mb-6">
              You must not use our website for any purposes related to marketing without our express written consent.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">(4) Restricted access</h2>
            <p className="text-gray-700 mb-4">
              Access to certain areas of our website is restricted. We reserve the right to restrict access to areas of our website, or indeed our whole website, at our discretion.
            </p>
            <p className="text-gray-700 mb-6">
              If we provide you with a user ID and password to enable you to access restricted areas of our website or other content or services, you must ensure that that user ID and password is kept confidential. We may disable your user ID and password in our sole discretion without notice or explanation.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">(5) User generated content</h2>
            <p className="text-gray-700 mb-4">
              In these terms and conditions, "your user content" means material (including without limitation text, images, audio material, video material and audio-visual material) that you submit to our website, for whatever purpose.
            </p>
            <p className="text-gray-700 mb-4">
              You grant to us a worldwide, irrevocable, non-exclusive, royalty-free licence to use, reproduce, adapt, publish, translate and distribute your user content in any existing or future media. You also grant to us the right to sub-license these rights, and the right to bring an action for infringement of these rights.
            </p>
            <p className="text-gray-700 mb-4">
              Your user content must not be illegal or unlawful, must not infringe any third party's legal rights, and must not be capable of giving rise to legal action whether against you or us or a third party (in each case under any applicable law).
            </p>
            <p className="text-gray-700 mb-6">
              You must not submit any user content to the website that is or has ever been the subject of any threatened or actual legal proceedings or other similar complaint.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">(6) Limited warranties</h2>
            <p className="text-gray-700 mb-6">
              Whilst we endeavor to ensure that the information on this website (excluding user content) is correct, we do not warrant its completeness or accuracy; nor do we commit to ensuring that the website remains available or that the material on the website is kept up-to-date. To the maximum extent permitted by applicable law we exclude all representations, warranties and conditions relating to this website and the use of this website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">(7) Limitations of liability</h2>
            <p className="text-gray-700 mb-6">
              Vector Vision will not be liable to you (whether under the law of contact, the law of torts or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website for any indirect, special or consequential loss; or for any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">(8) Exceptions</h2>
            <p className="text-gray-700 mb-6">
              Nothing in this website disclaimer will exclude or limit any warranty implied by law that it would be unlawful to exclude or limit; and nothing in this website disclaimer will exclude or limit Vector Vision's liability in respect of any death or personal injury caused by Vector Vision's negligence; fraud or fraudulent misrepresentation on the part of Vector Vision; or matter which it would be illegal or unlawful for Vector Vision to exclude or limit, or to attempt or purport to exclude or limit, its liability.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">(9) Reasonableness</h2>
            <p className="text-gray-700 mb-6">
              By using this website, you agree that the exclusions and limitations of liability set out in this website disclaimer are reasonable. If you do not think they are reasonable, you must not use this website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">(10) Other parties</h2>
            <p className="text-gray-700 mb-6">
              You accept that, as a limited liability entity, Vector Vision has an interest in limiting the personal liability of its officers and employees. You agree that you will not bring any claim personally against Vector Vision's officers or employees in respect of any losses you suffer in connection with the website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">(11) Unenforceable provisions</h2>
            <p className="text-gray-700 mb-6">
              If any provision of this website disclaimer is, or is found to be, unenforceable under applicable law, that will not affect the enforceability of the other provisions of this website disclaimer.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">(12) Severability</h2>
            <p className="text-gray-700 mb-6">
              If a provision of these terms and conditions is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect. If any unlawful and/or unenforceable provision would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">(13) Exclusion of third party rights</h2>
            <p className="text-gray-700 mb-6">
              These terms and conditions are for the benefit of you and us, and are not intended to benefit any third party or be enforceable by any third party. The exercise of our and your rights in relation to these terms and conditions is not subject to the consent of any third party.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">(14) Entire agreement</h2>
            <p className="text-gray-700 mb-6">
              These terms and conditions, together with our privacy policy, constitute the entire agreement between you and us in relation to your use of our website, and supersede all previous agreements in respect of your use of this website.
            </p>

            <div className="text-center text-sm text-gray-500 mt-8 pt-6 border-t border-gray-200">
              <p>This document was last updated on {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TermsPage
