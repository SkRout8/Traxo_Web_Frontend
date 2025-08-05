import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img from "../../images/traxo.png";
import img1 from "../../images/traxo3.png";
import img2 from "../../images/traxo2.png";

import ProductSection from "../ProductSection";
import WhyChooseUs from "../WhyChooseUs";
import GPSTrackingSection from "../GPSTrackingSection";
import IoTDevicesSection from "../IoTDevicesSection";
import IndustriesSection from "../IndustriesSection";
import Footer from "../Footer";
import ManufacturingCapabilities from "./ManufacturingCapabilities";

export default function Home() {
  const images = [img,img2,img1];
  const [currentImage, setCurrentImage] = useState(0);

  // Change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900 mt-0 pt-16 xl:pt-0 2xl:pt-0 md:pt-0 lg:pt-0 xl:mt-16 lg:mt-16 2xl:mt-16 md:mt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-400 to-yellow-300 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 xl:h-[650px] lg:h-[600px] md:h-[600px] 2xl:h-[800px]  ">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Traxo — Automation, GPS & Live Tracking Solutions
            </h1>
            <p className="text-lg mb-8">
              We provide next-generation automation and GPS tracking solutions
              for businesses, industries, and individuals to monitor, manage, and
              optimize operations in real-time.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-all">
              Get Started
            </button>
          </motion.div>

          {/* Right Image with Fade Animation */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage} // important for animation to trigger
                src={images[currentImage]}
                alt="GPS Tracking"
                className=" w-[520px] h-[400px] object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section>
        <ProductSection />
      </section>
      <section>
        <WhyChooseUs />
      </section>
      <section>
        <GPSTrackingSection />
      </section>
      <section>
        <ManufacturingCapabilities />
      </section>
      <section>
        <IoTDevicesSection />
      </section>
      <section>
       <IndustriesSection/>
      </section>
      <section>
       <Footer/>
      </section>
    </div>
  );
}


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
// import ProductSection from "../ProductSection";
// import WhyChooseUs from "../WhyChooseUs";
// import GPSTrackingSection from "../GPSTrackingSection";
// import ManufacturingCapabilities from "../manufacturingItems";
// import IoTDevicesSection from "../IoTDevicesSection";
// import { Section } from "lucide-react";
// import IndustriesSection from "../IndustriesSection";

// export default function Home() {
//   return (
//     <div className="bg-gray-50 text-gray-900 lg:mt-16 xl:mt-16 mt-0">
//       {/* Hero Section with Video Background */}
//       <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
//         {/* Background Video */}
        

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//         {/* Hero Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-center px-6 max-w-3xl"
//         >
//           <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
//             Traxo — Automation, GPS & Live Tracking Solutions
//           </h1>
//           <p className="text-lg text-gray-200 mb-8">
//             Cutting-edge automation and GPS tracking systems for smarter,
//             faster, and more reliable operations — anywhere, anytime.
//           </p>
//           <button className="bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-yellow-500 transition-all">
//             Get Started
//           </button>
//         </motion.div>
//       </section>

     

