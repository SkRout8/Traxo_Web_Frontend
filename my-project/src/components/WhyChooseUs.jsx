import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaShieldAlt, FaTools, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: <FaAward size={40} />,
    title: "Certified Quality",
    description:
      "Our products meet the highest industry standards for safety and performance."
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "Reliable & Secure",
    description:
      "Cutting-edge technology ensures durability and data protection."
  },
  {
    icon: <FaTools size={40} />,
    title: "Custom Solutions",
    description:
      "Tailored hardware and solutions for your specific business needs."
  },
  {
    icon: <FaUsers size={40} />,
    title: "Expert Support",
    description:
      "Our team provides 24/7 support to keep your operations running smoothly."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100 text-black relative overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-500/20 blur-3xl rounded-full -z-10"></div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-4xl font-bold mb-16 tracking-wide"
      >
        Why <span className="text-yellow-500">Choose Us?</span>
      </motion.h2>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start p-6 rounded-2xl shadow-lg border border-yellow-500/20 bg-white/30 backdrop-blur-md transition-all duration-500 hover:bg-white/50 hover:shadow-yellow-500/40 hover:-translate-y-2"
          >
            {/* Icon */}
            <div className="flex-shrink-0 text-black bg-yellow-500 p-4 rounded-full shadow-lg mr-6 transition-transform duration-500 group-hover:scale-110">
              {feature.icon}
            </div>

            {/* Text */}
            <div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-sm">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
