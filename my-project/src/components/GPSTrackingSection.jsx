import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaSatelliteDish, FaRoute } from "react-icons/fa";

const gpsSolutions = [
  {
    icon: <FaMapMarkedAlt size={35} />,
    title: "Real-Time GPS Tracking",
    description: "Track your fleet, assets, and vehicles in real-time with pinpoint accuracy.",
    image: "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <FaSatelliteDish size={35} />,
    title: "Satellite Connectivity",
    description: "Seamless GPS tracking with global satellite coverage, even in remote areas.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <FaRoute size={35} />,
    title: "Route Optimization",
    description: "Optimize travel routes for efficiency, fuel savings, and timely deliveries.",
    image:"https://zenduwork.com/wp-content/uploads/2022/06/routing-pointa-ppointb.png"

  }
];

export default function GPSTrackingSection() {
  return (
    <section className="py-20 bg-[#f0f5ff] text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent pointer-events-none"></div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-4xl font-bold mb-16 tracking-wide"
      >
         <span className="text-gray-900"> GPS Tracking Solutions</span>
      </motion.h2>

      {/* GPS Solutions Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {gpsSolutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-yellow-500/30 hover:scale-[1.02] transition-all duration-300"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute top-4 left-4 bg-yellow-500 text-black p-3 rounded-full shadow-lg">
                {solution.icon}
              </div>
            </div>

            {/* Text Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-300 text-sm">{solution.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
