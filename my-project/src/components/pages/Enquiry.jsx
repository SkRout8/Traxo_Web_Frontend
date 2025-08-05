import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your enquiry has been submitted.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-50 mt-16 overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-yellow-500 to-orange-600 py-14 text-center text-white">
        <h1 className="text-4xl font-bold">Enquire with Traxo India Automation</h1>
        <p className="mt-3 text-lg max-w-2xl mx-auto">
          Have a question or need a custom solution? Let’s talk.
        </p>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Contact Form */}
        <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
            Send us your enquiry
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
            >
              <option value="">Select Service</option>
              <option>IoT Device Manufacturing</option>
              <option>Vehicle Robotics</option>
              <option>ADAS Solutions</option>
              <option>Hardware Products</option>
              <option>Custom Solution</option>
            </select>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition font-medium shadow-md"
            >
              Submit Enquiry
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
            Contact Information
          </h2>
          <div className="space-y-5 text-gray-700">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-yellow-500 mt-1 text-lg" />
              <span className="text-sm leading-relaxed">
                Plot No: 443/4516, ITI Chowk, Near RTO Office, Angargadia, Balasore, Odisha, 756001
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-500 text-lg" /> 
              <span>+91-06782260196</span>
               
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-500 text-lg" /> 
              <span>info@traxoindia.in</span>
            </div>
          </div>

          {/* Map */}
          <div className="mt-6">
            <iframe
              title="Traxo India Automation Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.865382623105!2d86.9146481!3d21.4865624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1cf5e58111e957%3A0xac1d422f1e8f6dc3!2sTRAXO%20INDIA%20AUTOMATION%20GPS%20MANUFACTURING%20COMPANY!5e0!3m2!1sen!2sin!4v1722856000000!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
