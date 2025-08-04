import React from "react";
import { motion } from "framer-motion";
import { FaCar, FaIndustry, FaRobot } from "react-icons/fa";

const manufacturingItems = [
  {
    icon: <FaCar size={40} />,
    title: "Vehicle IoT Devices",
    description:
      "GPS trackers, OBD-II devices, dashcams, driver monitoring systems, EV IoT, telematics, and fleet management hardware.",
    image:
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=900&q=80"
  },
  {
    icon: <FaRobot size={40} />,
    title: "Vehicle GPS Tracking",
    description:
      "Autonomous vehicle systems, delivery robots, robotic arms, AGVs, teleoperation devices, and defense surveillance vehicles.",
    image:traxo1
  },
  {
    icon: <FaIndustry size={40} />,
    title: "Industrial IoT Devices",
    description:
      "Smart meters, asset tracking devices, predictive maintenance systems, environmental sensors, and industrial automation hardware.",
    image:
      "https://www.cisco.com/content/dam/cisco-cdc/site/images/legacy/assets/swa/img/anchor-info/what-is-iiot-628x353.jpg"
  }
];

export default function ManufacturingCapabilities() {
  return (
    <section className="py-20 bg-[#f0f5ff] text-white">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-4xl font-bold mb-16 tracking-wide"
      >
        <span className="text-gray-900"> Our Manufacturing Capabilities</span>
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: "160px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="block mx-auto h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mt-3"
        />
      </motion.h2>

      {/* Items */}
      <div className="max-w-7xl mx-auto flex flex-col gap-20 px-6">
        {manufacturingItems.map((item, index) => {
          const isEven = index % 2 === 0; // for alternating layout
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              {/* Image */}
              <div
                className={`overflow-hidden rounded-2xl shadow-lg backdrop-blur-md bg-white/10 border border-gray-700 hover:border-yellow-400 hover:shadow-yellow-400/40 transition-all duration-300 ${
                  isEven ? "order-1" : "order-2"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text */}
              <div
                className={`backdrop-blur-md bg-white/10 rounded-2xl text-black p-6 border border-gray-700 hover:border-yellow-400 hover:shadow-yellow-400/40 transition-all duration-300 ${
                  isEven ? "order-2" : "order-1"
                }`}
              >
                <div className="bg-yellow-500 w-fit p-3 rounded-full mb-4 text-black shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-900">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
