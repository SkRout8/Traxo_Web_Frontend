import React from "react";
import { FaPhoneAlt, FaEnvelope, FaHeadset, FaClock, FaQuestionCircle } from "react-icons/fa";
import Footer from "../Footer";

export default function CustomerCare() {
  return (
    <div className="bg-black mt-28 overflow-x-hidden text-white ">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 py-14 text-center text-black">
        <FaHeadset className="text-6xl mb-4 mx-auto" />
        <h1 className="text-4xl font-bold">Customer Care</h1>
        <p className="mt-3 text-lg max-w-2xl mx-auto">
          We’re here to help! Whether you have a question, need support, or want to share feedback — our team is ready to assist you.
        </p>
      </div> 

      {/* Contact Info Section */}
      <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Call Us */}
        <div className="bg-black p-8 rounded-2xl shadow-lg border border-yellow-500 text-center">
          <FaPhoneAlt className="text-yellow-500 text-5xl mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold mb-3 text-yellow-500">Call Us</h2>
          <p className="text-gray-300 mb-6">Talk to our customer care representative.</p>
          <a
            href="tel:+9106782260196"
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition font-medium inline-block"
          >
            📞 +91-06782260196
          </a>
        </div>

        {/* Email Us */}
        <div className="bg-black p-8 rounded-2xl shadow-lg border border-yellow-500 text-center">
          <FaEnvelope className="text-yellow-500 text-5xl mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold mb-3 text-yellow-500">Email Us</h2>
          <p className="text-gray-300 mb-6">Send us your queries and we’ll get back to you soon.</p>
          <a
            href="mailto:info@traxoindia.in"
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition font-medium inline-block"
          >
            📧 info@traxoindia.in
          </a>
        </div>
      </div>

      {/* Working Hours */}
      <div className="bg-black max-w-6xl mx-auto p-8 rounded-2xl shadow-lg border border-yellow-500 my-8">
        <div className="flex items-center gap-3 mb-4">
          <FaClock className="text-yellow-500 text-3xl" />
          <h3 className="text-xl font-semibold text-yellow-500">Working Hours</h3>
        </div>
        <p className="text-gray-300">Monday - Saturday: <strong className="text-white">9:00 AM to 6:00 PM</strong></p>
        <p className="text-gray-300">Sunday: <strong className="text-white">Closed</strong></p>
      </div>

      {/* FAQ Section */}
      <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="flex items-center gap-3 mb-6">
          <FaQuestionCircle className="text-yellow-500 text-3xl" />
          <h3 className="text-2xl font-semibold text-yellow-500">Frequently Asked Questions</h3>
        </div>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg text-white">1. How can I track my service request?</h4>
            <p className="text-gray-300">You can call our helpline or email us with your request ID for real-time updates.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-white">2. How quickly will I get a response?</h4>
            <p className="text-gray-300">Our team typically responds to all queries within 24 working hours.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-white">3. Do you offer technical support?</h4>
            <p className="text-gray-300">Yes! Our technical support team is available during working hours to assist you.</p>
          </div>
        </div>
      </div>
      <section>
        <Footer/>
      </section>
    </div>
  );
}
