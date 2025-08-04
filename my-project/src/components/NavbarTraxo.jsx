import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoPeopleOutline,
  IoBusinessOutline,
  IoConstructOutline,
} from "react-icons/io5";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import {
  FaHandshake,
  FaHeadset,
  FaDownload,
  FaMicrochip,
  FaNetworkWired,
  FaFileAlt,
  FaSignInAlt,
  FaBoxOpen,
  FaGlobeAsia,
  FaIndustry,
  FaChartLine,
  FaMoneyBillWave,
  FaClipboardList,
  FaRocket,
  FaMapMarkerAlt,
  FaIdCard,
  FaSimCard,
  FaCogs,
  FaBullseye,
  FaEye,
  FaProjectDiagram,
  FaCheckCircle,
  FaPuzzlePiece,
  FaLightbulb,
  FaBatteryFull,
  FaCamera,
  FaBell,
  FaPlug,
  FaCarSide,
  FaTools,
  FaParking,
  FaRobot,
  FaSatelliteDish,
  FaShieldAlt,
  FaServer,
  FaCloud,
  FaMobile,
  FaLock,
  FaCertificate,
  FaBrain,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const NavbarTraxo = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      if (!desktop) {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "About Us", key: "about", hasDropdown: true, icon: <IoPeopleOutline className="text-lg" /> },
    { name: "Manufacture", key: "manufacture", hasDropdown: true, icon: <IoBusinessOutline className="text-lg" /> },
    { name: "Services", key: "services", hasDropdown: true, icon: <MdOutlineMiscellaneousServices className="text-lg" /> },
    { name: "Products", key: "products", hasDropdown: true, icon: <FaBoxOpen className="text-lg" /> },
    { name: "Dealer Center", key: "dealer", hasDropdown: true, icon: <FaHandshake className="text-lg" /> },
    { name: "Customer Centre", key: "customer", hasDropdown: false, icon: <FaHeadset className="text-lg" /> },
  ];

  const topNavItems = [
    { name: "Investor's Documents", path: "/investors-docs", icon: <FaFileAlt className="text-sm" /> },
    { name: "Sim Networks", path: "/sim-networks", icon: <FaNetworkWired className="text-sm" /> },
    { name: "VLTD Backends", path: "/vltd-backends", icon: <FaMicrochip className="text-sm" /> },
    { name: "Downloads", path: "/downloads", icon: <FaDownload className="text-sm" /> },
    { name: "Logins", path: "/login", icon: <FaSignInAlt className="text-sm" /> },
  ];

  const dropdownContent = {
    about: [
      { icon: <FaRocket />, label: "Our Story" },
      { icon: <FaIndustry />, label: "Our Strengths" },
      { icon: <FaCogs />, label: "Our Infrastructure" },
      { icon: <FaGlobeAsia />, label: "Market Presence" },
      { icon: <FaBullseye />, label: "Our Mission" },
      { icon: <FaEye />, label: "Our Vision" }
    ],
    manufacture: [
      { icon: <FaMicrochip />, label: "Circuit Design" },
      { icon: <FaProjectDiagram />, label: "PCB Layout" },
      { icon: <FaCogs />, label: "Prototyping" },
      { icon: <FaIndustry />, label: "Small Batch Manufacturing" },
      { icon: <FaCogs />, label: "Concept to Production" },
      { icon: <FaCheckCircle />, label: "Testing & Validation" },
      { icon: <FaPuzzlePiece />, label: "Custom Solution" },
      { icon: <FaLightbulb />, label: "Innovation Projects" }
    ],
    services: [
      {
        icon: <FaMicrochip />,
        label: "IoT Device Manufacturing",
        hasSubmenu: true,
        submenuKey: "iot_manufacturing",
        submenu: [
          { icon: <FaCarSide />, label: "Vehicle Tracking Devices" },
          { icon: <FaTools />, label: "OBD-II Telematics" },
          { icon: <FaCamera />, label: "Dash Cameras" },
          { icon: <FaParking />, label: "Smart Parking Systems" },
          { icon: <FaIndustry />, label: "Industrial IoT Devices" },
          { icon: <FaRobot />, label: "Robotics & AGVs" },
        ]
      },
      {
        icon: <FaRobot />,
        label: "Vehicle Robotics Device Manufacturer",
        hasSubmenu: true,
        submenuKey: "vehicle_robotics",
        submenu: [
          { icon: <FaRobot />, label: "Autonomous Vehicle Systems" },
          { icon: <FaCarSide />, label: "Robotic Delivery Vehicles" },
          { icon: <FaTools />, label: "In-Vehicle Robotics" },
          { icon: <FaIndustry />, label: "AGVs and AMRs" },
          { icon: <FaSatelliteDish />, label: "Teleoperation Devices" },
          { icon: <FaShieldAlt />, label: "Surveillance & Defense Robotics" },
        ]
      },
      {
        icon: <FaCogs />,
        label: "IoT Product Design & Engineering",
        hasSubmenu: true,
        submenuKey: "iot_design",
        submenu: [
          { icon: <FaLightbulb />, label: "Concept & Requirement Definition" },
          { icon: <FaMicrochip />, label: "Hardware Design" },
          { icon: <FaServer />, label: "Firmware Development" },
          { icon: <FaNetworkWired />, label: "Connectivity & Networking" },
          { icon: <FaCloud />, label: "Cloud Backend & API" },
          { icon: <FaMobile />, label: "Frontend & Mobile App" },
          { icon: <FaTools />, label: "Testing & Validation" },
          { icon: <FaLock />, label: "Security Engineering" },
          { icon: <FaCertificate />, label: "Certification & Compliance" },
        ]
      },
      {
        icon: <FaCarSide />,
        label: "Advanced Driver Assistance System",
        hasSubmenu: true,
        submenuKey: "adas",
        submenu: [
          { icon: <FaCamera />, label: "Cameras" },
          { icon: <FaSatelliteDish />, label: "Radar & LIDAR" },
          { icon: <FaParking />, label: "Ultrasonic Sensors" },
          { icon: <FaMapMarkerAlt />, label: "GPS + IMU" },
          { icon: <FaMicrochip />, label: "Embedded Systems" },
          { icon: <FaBrain />, label: "AI & Computer Vision" },
        ]
      },
      { icon: <FaNetworkWired />, label: "V2X Communication in Vehicles", hasSubmenu: false },
      { icon: <FaSimCard />, label: "M2M eSIM Manufacturing", hasSubmenu: false },
    ],
    products: [
      { icon: <FaCogs />, label: "Hardware", hasSubmenu: true, submenuKey: "hardware" },
    ],
    hardware: [
      { icon: <FaMicrochip />, label: "AIS-140 (VLTD)" },
      { icon: <FaCamera />, label: "Vehicle Camera System" },
      { icon: <FaBell />, label: "Emergency Panic SOS Buttons" },
      { icon: <FaBatteryFull />, label: "Li-ion Battery" },
      { icon: <FaSimCard />, label: "E-SIM" },
      { icon: <FaIdCard />, label: "Traxo RFID" },
      { icon: <FaPlug />, label: "Cable Connection" },
      { icon: <FaPlug />, label: "Harness Connection" }
    ],
    dealer: [
      { icon: <FaHandshake />, label: "Dealer Enquiry" },
      { icon: <IoConstructOutline />, label: "RFC/Service Centers" },
      { icon: <FaClipboardList />, label: "TRANO PRO VLTD SMS Commands" },
      { icon: <FaMoneyBillWave />, label: "VLT Device Recharge Data Validity" },
      { icon: <FaSimCard />, label: "E-SIM Validity" },
    ],
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2, ease: "easeIn" } },
  };

  const getGridColumns = (key) => {
    if (key === "manufacture") return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    if (key === "services") return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    if (key === "hardware") return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  };

  const getSubmenuGridColumns = (submenuKey) => {
    if (submenuKey === "iot_design") return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  };

  return (
    <div className="relative">
      {/* Top Nav */}
      <div className="bg-[#0e1225] py-2 px-4 hidden lg:block fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-end space-x-6">
          {topNavItems.map((item, index) => (
            <Link key={index} to={item.path} className="text-white text-sm flex items-center gap-1 hover:text-yellow-400 transition-colors">
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-gradient-to-r from-white to-[#ffcf21] py-4 px-4 fixed lg:top-8 left-0 right-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Traxo Logo" className="h-12" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => isDesktop && item.hasDropdown && setActiveDropdown(item.key)}
                onMouseLeave={() => isDesktop && setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-[#0e1225] hover:text-white font-medium transition-colors duration-200">
                  {item.icon}
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col gap-1"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setActiveDropdown(null);
              setActiveSubDropdown(null);
            }}
          >
            <span className="w-6 h-0.5 bg-[#0e1225]" />
            <span className="w-6 h-0.5 bg-[#0e1225]" />
            <span className="w-6 h-0.5 bg-[#0e1225]" />
          </button>
        </div>
      </nav>

      {/* Desktop Dropdown */}
      {isDesktop && (
        <AnimatePresence>
          {activeDropdown && dropdownContent[activeDropdown] && (
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-[96px] left-0 right-0 z-30 overflow-visible"
              onMouseEnter={() => setActiveDropdown(activeDropdown)}
              onMouseLeave={() => {
                setActiveDropdown(null);
                setActiveSubDropdown(null);
              }}
            >
              <div className="bg-black shadow-2xl mx-8 rounded-b-xl overflow-visible">
                <div
                  className={`max-w-6xl mx-auto py-8 px-8 grid ${getGridColumns(activeDropdown)} gap-6`}
                  style={{
                    maxHeight: "80vh",
                    overflowY: "auto",
                  }}
                >
                  {dropdownContent[activeDropdown].map((link, i) => (
                    <div
                      key={i}
                      onMouseEnter={() => link.hasSubmenu && setActiveSubDropdown(link.submenuKey)}
                      onMouseLeave={() => link.hasSubmenu && setActiveSubDropdown(null)}
                      className="flex flex-col items-center justify-center text-center p-6 hover:bg-gray-900 rounded-lg cursor-pointer transition-all duration-200 group border-r border-gray-700 last:border-r-0 relative"
                    >
                      <div className="text-[#ffcf21] text-4xl mb-4 group-hover:text-white group-hover:scale-110 transition-all duration-200 w-20 h-20 flex items-center justify-center rounded-full border-2 border-white group-hover:border-[#ffcf21]">
                        {link.icon}
                      </div>
                      <span className="text-white font-medium group-hover:text-[#ffcf21] transition-colors text-lg">
                        {link.label}
                      </span>

                      {/* Submenu */}
                      {link.hasSubmenu && activeSubDropdown === link.submenuKey && (
                        <div
                          className={`absolute top-0 left-full bg-black p-6 shadow-xl grid ${getSubmenuGridColumns(link.submenuKey)} gap-6 w-[700px] overflow-y-auto`}
                          style={{
                            maxHeight: "80vh",
                          }}
                        >
                          {link.submenu.map((sub, idx) => (
                            <div
                              key={idx}
                              className="flex flex-col items-center text-center hover:bg-gray-900 p-4 rounded-lg cursor-pointer group"
                            >
                              <div className="text-[#ffcf21] text-3xl mb-3 group-hover:text-white">
                                {sub.icon}
                              </div>
                              <span className="text-white text-sm group-hover:text-[#ffcf21]">
                                {sub.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="fixed top-0 right-0 w-72 h-full bg-[#0e1225] text-white z-50 p-6 overflow-y-auto"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-2xl hover:text-yellow-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ✕
            </button>

            {/* Top Nav Items */}
            <div className="mt-10 border-b border-gray-700 pb-4 space-y-4">
              {topNavItems.map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-lg hover:text-yellow-400 transition-colors"
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Main Nav Items */}
            <div className="mt-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.key}>
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === item.key ? null : item.key)
                    }
                    className="flex justify-between w-full items-center gap-2 text-lg hover:text-yellow-400 transition-colors"
                  >
                    <span className="flex items-center gap-2">{item.icon}{item.name}</span>
                    {item.hasDropdown && <ChevronDown className={`transition-transform duration-200 ${activeDropdown === item.key ? "rotate-180" : ""}`} />}
                  </button>

                  {/* Mobile Dropdown Content */}
                  {item.hasDropdown && activeDropdown === item.key && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 ml-6 space-y-2"
                    >
                      {dropdownContent[item.key].map((link, i) => (
                        <div key={i}>
                          <button
                            onClick={() =>
                              link.hasSubmenu
                                ? setActiveSubDropdown(activeSubDropdown === link.submenuKey ? null : link.submenuKey)
                                : null
                            }
                            className="flex items-center gap-2 text-sm hover:text-yellow-400 cursor-pointer transition-colors py-1 w-full justify-between"
                          >
                            <span className="flex items-center gap-2 text-yellow-400">{link.icon}</span>
                            {link.label}
                            {link.hasSubmenu && <ChevronDown className={`transition-transform duration-200 ${activeSubDropdown === link.submenuKey ? "rotate-180" : ""}`} />}
                          </button>

                          {/* Mobile Submenu */}
                          {link.hasSubmenu && activeSubDropdown === link.submenuKey && (
                            <div className="ml-6 mt-2 grid grid-cols-1 gap-3">
                              {link.submenu.map((sub, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-xs hover:text-yellow-400 cursor-pointer py-1">
                                  <span className="text-yellow-400">{sub.icon}</span>
                                  {sub.label}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarTraxo;