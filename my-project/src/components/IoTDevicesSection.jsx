import React from "react";
import { motion } from "framer-motion";
import traxo from '../images/traxo4.jpeg'
import {

  FaMicrochip,
  FaSatelliteDish,
  FaRobot,
  FaNetworkWired
} from "react-icons/fa";

const features = [
  {
    icon: <FaMicrochip size={30} />,
    title: "Advanced IoT Hardware",
    description: "State-of-the-art GPS, OBD, dashcams, and smart sensors."
  },
  {
    icon: <FaSatelliteDish size={30} />,
    title: "Real-time Connectivity",
    description: "Seamless M2M communication with LTE, GSM, and IoT protocols."
  },
  {
    icon: <FaRobot size={30} />,
    title: "Vehicle Robotics",
    description: "Autonomous driving, delivery robots, and industrial AGVs."
  },
  {
    icon: <FaNetworkWired size={30} />,
    title: "Fleet Integration",
    description: "Connected solutions for fleet tracking and management."
  }
];

export default function IoTDevicesSection() {
  return (
    <section className="py-20 bg-[#f0f5ff] text-black">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-yellow-500 font-semibold tracking-wide mb-2"
          >
            INNOVATIVE. CONNECTED. RELIABLE.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 leading-snug"
          >
            Smart IoT & Vehicle <span className="text-yellow-500">Manufacturing Solutions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-gray-700 mb-8"
          >
            We design and manufacture cutting-edge IoT devices for automotive, industrial, and smart city applications. From GPS tracking to autonomous robotics, our solutions are built to power the connected future.
          </motion.p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-start space-y-2"
              >
                <div className="bg-yellow-500 text-black p-3 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={traxo}
            alt="IoT Manufacturing"
            className="w-full max-w-md rounded-xl shadow-lg border-4 border-yellow-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
