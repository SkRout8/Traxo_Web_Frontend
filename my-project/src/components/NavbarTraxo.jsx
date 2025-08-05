import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoPeopleOutline,
  IoBusinessOutline,
} from "react-icons/io5";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import {
  FaHandshake,
  FaHeadset,
  FaServer,
  FaCloud,
  FaPlug,
  FaMobile,
  FaLock,
  FaCertificate,
  FaMapMarkerAlt,
  FaBrain,
  FaSimCard,
  FaDownload,
  FaMicrochip,
  FaNetworkWired,
  FaFileAlt,
  FaSignInAlt,
  FaBoxOpen,
  FaGlobeAsia,
  FaIndustry,
  FaRocket,
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
  FaCarSide,
  FaTools,
  FaParking,
  FaIdCard,
  FaRobot,
  FaSatelliteDish,
  FaShieldAlt,
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
    { name: "Dealer Center", key: "dealer", hasDropdown: false, icon: <FaHandshake className="text-lg" /> },
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
            ],
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
            ],
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
            ],
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
            ],
          },
          { icon: <FaNetworkWired />, label: "V2X Communication in Vehicles" },
          { icon: <FaSimCard />, label: "M2M eSIM Manufacturing" },
        ],
    products: [
      {
        icon: <FaCogs />,
        label: "Hardware",
        hasSubmenu: true,
        submenuKey: "hardware",
        submenu: [
           
               { icon: <FaMicrochip />, label: "AIS-140 (VLTD)" },
               { icon: <FaCamera />, label: "Vehicle Camera System" },
               { icon: <FaBell />, label: "Emergency Panic SOS Buttons" },
               { icon: <FaBatteryFull />, label: "Li-ion Battery" },
               { icon: <FaSimCard />, label: "E-SIM" },
               { icon: <FaIdCard />, label: "Traxo RFID" },
               { icon: <FaPlug />, label: "Cable Connection Harness" },
               { icon: <FaServer />, label: "OBD-II Can Connection" },
              
             
        ]
      }
    ]
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const getGridColumns = () => "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className="relative">
      {/* Top Nav */}
      <div className="bg-[#0e1225] py-2 px-4 hidden lg:block fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-end space-x-6">
          {topNavItems.map((item, index) => (
            <Link key={index} to={item.path} className="text-white text-sm flex items-center gap-1 hover:text-yellow-400">
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-gradient-to-r from-white to-[#ffcf21] py-4 px-4 fixed lg:top-8 left-0 right-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
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
                <button className="flex items-center gap-1 text-[#0e1225] hover:text-white font-medium">
                  {item.icon}
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
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
              className="fixed top-[96px] left-0 right-0 z-30"
              onMouseEnter={() => setActiveDropdown(activeDropdown)}
              onMouseLeave={() => {
                setActiveDropdown(null);
                setActiveSubDropdown(null);
              }}
            >
              <div className="bg-black shadow-2xl mx-8 rounded-b-xl">
                <div className={`max-w-6xl mx-auto py-8 px-8 grid ${getGridColumns()} gap-6`}>
                  {dropdownContent[activeDropdown].map((link, i) => (
                    <div key={i} className="flex flex-col items-center text-center p-4 hover:bg-gray-900 rounded-lg cursor-pointer"
                      onMouseEnter={() => link.hasSubmenu && setActiveSubDropdown(link.submenuKey)}
                      onMouseLeave={() => link.hasSubmenu && setActiveSubDropdown(null)}
                    >
                      <div className="text-[#ffcf21] text-4xl mb-3">{link.icon}</div>
                      <span className="text-white">{link.label}</span>

                      {link.hasSubmenu && activeSubDropdown === link.submenuKey && (
                        <div className="mt-4 w-full bg-gray-800 p-4 rounded-lg grid grid-cols-2 gap-4">
                          {link.submenu.map((sub, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center hover:bg-gray-700 p-3 rounded-lg">
                              <div className="text-[#ffcf21] text-2xl mb-2">{sub.icon}</div>
                              <span className="text-white text-sm">{sub.label}</span>
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
      {!isDesktop && (
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="overflow-hidden bg-white shadow-lg fixed top-[72px] left-0 right-0 z-30 p-4"
            >
              {navItems.map((item) => (
                <div key={item.key} className="border-b border-gray-200">
                  <button
                    className="flex justify-between items-center w-full py-3 text-left font-medium"
                    onClick={() => setActiveDropdown(activeDropdown === item.key ? null : item.key)}
                  >
                    <span className="flex items-center gap-2">{item.icon}{item.name}</span>
                    {item.hasDropdown && <ChevronDown className={`w-4 h-4 transform transition-transform ${activeDropdown === item.key ? "rotate-180" : ""}`} />}
                  </button>

                  {item.hasDropdown && activeDropdown === item.key && dropdownContent[item.key] && (
                    <div className="pl-6 pb-3">
                      {dropdownContent[item.key].map((subItem, i) => (
                        <div key={i} className="py-2">
                          <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => subItem.hasSubmenu && setActiveSubDropdown(activeSubDropdown === subItem.submenuKey ? null : subItem.submenuKey)}
                          >
                            <span className="flex items-center gap-2 text-gray-700">{subItem.icon}{subItem.label}</span>
                            {subItem.hasSubmenu && <ChevronDown className={`w-4 h-4 transform transition-transform ${activeSubDropdown === subItem.submenuKey ? "rotate-180" : ""}`} />}
                          </div>

                          {subItem.hasSubmenu && activeSubDropdown === subItem.submenuKey && (
                            <div className="pl-6 mt-2">
                              {subItem.submenu.map((deep, idx) => (
                                <div key={idx} className="py-1 flex items-center gap-2 text-gray-600">
                                  {deep.icon}{deep.label}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default NavbarTraxo;
