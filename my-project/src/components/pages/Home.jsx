// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaSatelliteDish,
//   FaMapMarkedAlt,
//   FaMicrochip,
//   FaNetworkWired,
//   FaIndustry,
//   FaClock
// } from "react-icons/fa";

// export default function Home() {
//   return (
//     <div className="bg-gray-50 text-gray-900 mt-14">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-yellow-400 to-yellow-300 py-20">
//         <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="lg:w-1/2"
//           >
//             <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
//               Traxo — Automation, GPS & Live Tracking Solutions
//             </h1>
//             <p className="text-lg mb-8">
//               We provide next-generation automation and GPS tracking solutions
//               for businesses, industries, and individuals to monitor, manage, and
//               optimize operations in real-time.
//             </p>
//             <button className="bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-all">
//               Get Started
//             </button>
//           </motion.div>

//           {/* Right Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="lg:w-1/2 mt-10 lg:mt-0"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1581091012184-5c2af36f0e9e"
//               alt="GPS Tracking"
//               className="rounded-lg shadow-lg"
//             />
//           </motion.div>
//         </div>
//       </section>
// </div>
//   )
// }

import React from "react";
import { motion } from "framer-motion";
import {
  FaSatelliteDish,
  FaMapMarkedAlt,
  FaMicrochip,
  FaNetworkWired,
  FaIndustry,
  FaClock
} from "react-icons/fa";
import ProductSection from "../ProductSection";
import WhyChooseUs from "../WhyChooseUs";
import GPSTrackingSection from "../GPSTrackingSection";
import ManufacturingCapabilities from "../manufacturingItems";
import IoTDevicesSection from "../IoTDevicesSection";
import { Section } from "lucide-react";
import IndustriesSection from "../IndustriesSection";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900 lg:mt-16 xl:mt-16 mt-0">
      {/* Hero Section with Video Background */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/deeibxw7z/video/upload/v1754130451/WhatsApp_Video_2025-08-02_at_15.56.24_2626c6fb_mf2yff.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Traxo — Automation, GPS & Live Tracking Solutions
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Cutting-edge automation and GPS tracking systems for smarter,
            faster, and more reliable operations — anywhere, anytime.
          </p>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-yellow-500 transition-all">
            Get Started
          </button>
        </motion.div>
      </section>

      <section>
        <ProductSection/>
      </section>
      <section>
        <WhyChooseUs/>
      </section>
      <section>
        <GPSTrackingSection/>
      </section>
<section>
        <ManufacturingCapabilities/>
      </section>

      <section>
        <IoTDevicesSection/>
      </section>
      <section>
<IndustriesSection/>
      </section>



    </div>
  )
}
