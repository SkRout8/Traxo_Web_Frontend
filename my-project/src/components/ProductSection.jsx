import React from "react";
import { motion } from "framer-motion";
import {
    FaMicrochip,
    FaCamera,
    FaBell,
    FaBatteryFull,
    FaSimCard,
    FaIdCard,
    FaPlug
} from "react-icons/fa";

const hardware = [
    { icon: <FaMicrochip size={36} />, label: "AIS-140 (VLTD)" },
    { icon: <FaCamera size={36} />, label: "Vehicle Camera System" },
    { icon: <FaBell size={36} />, label: "Emergency SOS Buttons" },
    { icon: <FaBatteryFull size={36} />, label: "Li-ion Battery" },
    { icon: <FaSimCard size={36} />, label: "E-SIM" },
    { icon: <FaIdCard size={36} />, label: "Traxo RFID" },
    { icon: <FaPlug size={36} />, label: "Cable Connection" },
    { icon: <FaPlug size={36} />, label: "Harness Connection" },
    { icon: <FaMicrochip size={36} />, label: "AIS-140 (VLTD)" },
    { icon: <FaCamera size={36} />, label: "Vehicle Camera System" },
    { icon: <FaBell size={36} />, label: "Emergency SOS Buttons" },
    { icon: <FaBatteryFull size={36} />, label: "Li-ion Battery" },
    { icon: <FaSimCard size={36} />, label: "E-SIM" },
    { icon: <FaIdCard size={36} />, label: "Traxo RFID" },
    { icon: <FaPlug size={36} />, label: "Cable Connection" },
    { icon: <FaPlug size={36} />, label: "Harness Connection" },

    { icon: <FaMicrochip size={36} />, label: "AIS-140 (VLTD)" },
    { icon: <FaCamera size={36} />, label: "Vehicle Camera System" },
    { icon: <FaBell size={36} />, label: "Emergency SOS Buttons" },
    { icon: <FaBatteryFull size={36} />, label: "Li-ion Battery" },
    { icon: <FaSimCard size={36} />, label: "E-SIM" },
    { icon: <FaIdCard size={36} />, label: "Traxo RFID" },
    { icon: <FaPlug size={36} />, label: "Cable Connection" },
    { icon: <FaPlug size={36} />, label: "Harness Connection" },
    { icon: <FaMicrochip size={36} />, label: "AIS-140 (VLTD)" },
    { icon: <FaCamera size={36} />, label: "Vehicle Camera System" },
    { icon: <FaBell size={36} />, label: "Emergency SOS Buttons" },
    { icon: <FaBatteryFull size={36} />, label: "Li-ion Battery" },
    { icon: <FaSimCard size={36} />, label: "E-SIM" },
    { icon: <FaIdCard size={36} />, label: "Traxo RFID" },
    { icon: <FaPlug size={36} />, label: "Cable Connection" },
    { icon: <FaPlug size={36} />, label: "Harness Connection" },
];

export default function ProductSection() {
    const productList = [...hardware, ...hardware];

    return (
        <section className="py-16 bg-[#f0f5ff] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Title */}


                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative text-center mb-12 tracking-wide"
                >
                    <span className="text-4xl font-semibold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
                        Our Hardware Products
                    </span>

                    {/* Animated underline */}
                    <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: "120px" }}
                        transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
                        className="block mx-auto h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mt-3"
                    />
                </motion.h2>


                {/* Scrolling Container */}
                <div className="relative w-full overflow-hidden">
                    <motion.div
                        className="flex"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 25, // slower for smoothness
                        }}
                    >
                        {productList.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center min-w-[220px] bg-gradient-to-b from-gray-900 to-black rounded-2xl border border-gray-700 shadow-lg p-6 m-3 hover:shadow-yellow-400/40 hover:border-yellow-400 transition-all duration-300"
                            >
                                {/* Icon */}
                                <div className="text-yellow-400 mb-4 p-4 rounded-full bg-gray-800 group-hover:bg-yellow-500 transition-colors duration-300">
                                    {item.icon}
                                </div>
                                {/* Label */}
                                <p className="text-center text-white font-semibold text-sm tracking-wide">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
