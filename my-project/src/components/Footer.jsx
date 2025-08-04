import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHandshake,
  FaHeadset,
  FaBoxOpen
} from "react-icons/fa";
import { IoPeopleOutline, IoBusinessOutline } from "react-icons/io5";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
  const navItems = [
    { name: "About Us", link: "/about", icon: <IoPeopleOutline className="text-lg" /> },
    { name: "Manufacture", link: "/manufacture", icon: <IoBusinessOutline className="text-lg" /> },
    { name: "Services", link: "/services", icon: <MdOutlineMiscellaneousServices className="text-lg" /> },
    { name: "Products", link: "/products", icon: <FaBoxOpen className="text-lg" /> },
    { name: "Dealer Center", link: "/dealer", icon: <FaHandshake className="text-lg" /> },
    { name: "Customer Centre", link: "/customer", icon: <FaHeadset className="text-lg" /> },
  ];

  return (
    <footer className="bg-[#f0f5ff] text-gray-800 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">

        {/* Company Info */}
        <div className="md:col-span-2 lg:col-span-1">
          <h2 className="text-2xl font-bold mb-4">TRAXO (INDIA) AUTOMATION PVT. LTD.</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Delivering cutting-edge automation, GPS, and IoT tracking solutions for businesses,
            industries, and individuals across India.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link to={item.link} className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-yellow-500 mt-0.5" />
              <span>info@traxoindia.in</span>
            </li>
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="text-yellow-500 mt-0.5" />
              <span>1800 891 1545 (Toll-Free)</span>
            </li>
          </ul>
        </div>

        {/* Addresses */}
        <div className="md:col-span-2 lg:col-span-1">
          <h3 className="text-lg font-semibold mb-4">Our Offices</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-yellow-500 mt-1" />
              <span>
                <strong>Manufacturing:</strong><br />
                Plot No: 443/4516, ITI Chowk, Near RTO Office, Angargadia, Balasore, Odisha, 756001
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-yellow-500 mt-1" />
              <span>
                <strong>Corporate Office - Delhi:</strong><br />
                First Floor, Plot No. 43, Chaukhandi Meera Enclave, West Delhi, 110018
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-yellow-500 mt-1" />
              <span>
                <strong>Corporate Office - Karnataka:</strong><br />
                First Floor Building, PID No. 57640, Sira Road, Beside Sri Venkateshwara Rice Industries, Lingapura, Tumakuru, Karnataka, 572106
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-6"></div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-600 text-center md:text-left">
          © {new Date().getFullYear()} TRAXO (India) Automation Pvt. Ltd. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 text-gray-600">
          <a href="#" aria-label="Facebook" className="hover:text-yellow-500"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter" className="hover:text-yellow-500"><FaTwitter /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-yellow-500"><FaLinkedinIn /></a>
          <a href="#" aria-label="Instagram" className="hover:text-yellow-500"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
}
