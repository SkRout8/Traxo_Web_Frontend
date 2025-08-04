import React, { useRef } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCar,
  FaPlug,
  FaVideo,
  FaParking,
  FaIndustry,
  FaRobot
} from "react-icons/fa";

const categories = [
  {
    title: "Vehicle Tracking Devices",
    description:
      "Real-time GPS tracking, geo-fencing alerts, driver behavior monitoring, and fleet management solutions.",
    icon: <FaCar className="text-blue-600 text-3xl" />,
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "OBD-II Telematics",
    description:
      "Plug-in OBD devices for vehicle diagnostics, mileage tracking, fuel usage, and predictive maintenance.",
    icon: <FaPlug className="text-purple-600 text-3xl" />,
    image:
      "https://images.unsplash.com/photo-1607863680331-60f3b6fe183e?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Dash Cameras",
    description:
      "IoT-connected dashcams with cloud upload, live streaming, AI driver monitoring, and collision detection.",
    icon: <FaVideo className="text-red-500 text-3xl" />,
    image:
      "https://images.unsplash.com/photo-1577953183163-8f7e270d2bb0?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Smart Parking Systems",
    description:
      "Ultrasonic and camera-based parking sensors for real-time space detection and smart city parking solutions.",
    icon: <FaParking className="text-green-600 text-3xl" />,
    image:
      "https://images.unsplash.com/photo-1549921296-3a7a7d6a5d8b?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Industrial IoT Devices",
    description:
      "Smart meters, asset tracking, predictive maintenance, and automation hardware for industries.",
    icon: <FaIndustry className="text-yellow-500 text-3xl" />,
    image:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb3?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Robotics & AGVs",
    description:
      "Autonomous ground vehicles, delivery robots, teleoperation devices, and warehouse automation robots.",
    icon: <FaRobot className="text-pink-500 text-3xl" />,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89ec92?auto=format&fit=crop&w=900&q=80"
  }
];

export default function IoTDeviceManufacturing() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount =
        direction === "left"
          ? -scrollRef.current.offsetWidth / 1.2
          : scrollRef.current.offsetWidth / 1.2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#f0f5ff] py-12 px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-8">
          <div className="lg:w-2/3">
            <h3 className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
              IOT Device Manufacturing
            </h3>
            <h2 className="mt-2 text-4xl font-extrabold text-gray-900 leading-tight">
              Advanced IoT & GPS Solutions
            </h2>
            <p className="mt-3 text-gray-700 text-lg">
              We design and manufacture IoT devices for vehicles, industries, robotics, and smart
              cities with cutting-edge connectivity and AI-powered automation.
            </p>
          </div>
          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-gray-100 transition-all"
            >
              <FaArrowLeft className="text-gray-800 text-lg" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-gray-100 transition-all"
            >
              <FaArrowRight className="text-gray-800 text-lg" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide scroll-smooth"
        >
          {categories.map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
