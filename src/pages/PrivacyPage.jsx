import React from 'react'
import { motion } from 'framer-motion'

const PrivacyPage = () => {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Your security is our priority
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              This Privacy Policy governs the manner in which Vector Vision collects, uses, maintains and discloses information collected from users (each, a "User") of our website. This privacy policy applies to our website and all products and services offered by Vector Vision.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Personal identification information</h2>
            <p className="text-gray-700 mb-6">
              We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, subscribe to the newsletter, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Non-personal identification information</h2>
            <p className="text-gray-700 mb-6">
              We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Web browser cookies</h2>
            <p className="text-gray-700 mb-6">
              Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How we use collected information</h2>
            <p className="text-gray-700 mb-4">
              Vector Vision may collect and use Users personal information for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>To improve customer service:</strong> Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
              <li><strong>To personalize user experience:</strong> We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</li>
              <li><strong>To improve our Site:</strong> We may use feedback you provide to improve our products and services.</li>
              <li><strong>To send periodic emails:</strong> We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How we protect your information</h2>
            <p className="text-gray-700 mb-6">
              We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sharing your personal information</h2>
            <p className="text-gray-700 mb-6">
              We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third party websites</h2>
            <p className="text-gray-700 mb-6">
              Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to this privacy policy</h2>
            <p className="text-gray-700 mb-6">
              Vector Vision has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your acceptance of these terms</h2>
            <p className="text-gray-700 mb-6">
              By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contacting us</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <p className="text-gray-700 font-semibold">Vector Vision</p>
              <p className="text-gray-600">Contact us through our website contact form</p>
            </div>

            <div className="text-center text-sm text-gray-500 mt-8 pt-6 border-t border-gray-200">
              <p>This document was last updated on {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPage
