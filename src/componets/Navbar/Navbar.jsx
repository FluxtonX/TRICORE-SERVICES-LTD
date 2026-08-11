import React, { useState } from "react";
import { ChevronDown, Phone, Mail, Menu, X, Shield } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import navData from "../../utils/navdata.jsx";

const ModernNavbarSystem = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    if (navData.mainNav[index].hasDropdown) {
      setActiveDropdown(index);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-emerald-800 via-primary-700 to-emerald-900 text-white py-2 px-4 shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-xs md:text-sm">
          <div className="flex items-center space-x-2 text-emerald-200">
            <Shield size={14} className="animate-pulse" />
            <span className="font-medium tracking-wide">TRICORE SERVICES LTD — Professional Security & Property Solutions</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href={`tel:${navData.topBar.phone}`} className="flex items-center space-x-2 hover:text-emerald-200 transition-colors">
              <Phone size={14} />
              <span>{navData.topBar.phone}</span>
            </a>
            <a href={`mailto:${navData.topBar.email}`} className="flex items-center space-x-2 hover:text-emerald-200 transition-colors">
              <Mail size={14} />
              <span>{navData.topBar.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <div className="w-full sticky top-0 z-50">
        <nav className="bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-md relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center group">
                  <div className="w-10 h-10 bg-emerald-600/10 rounded-xl flex items-center justify-center border border-emerald-500/20 mr-3 group-hover:bg-emerald-600 transition-all duration-300">
                    <Shield className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-black text-gray-900 tracking-tight flex items-center">
                      {navData.logo.text}
                      <span className="text-emerald-600 ml-1">{navData.logo.highlightText || "SERVICES"}</span>
                    </div>
                    <div className="text-[10px] font-bold text-emerald-700 tracking-widest uppercase">
                      {navData.logo.subtitle}
                    </div>
                  </div>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-2 lg:space-x-4">
                  {navData.mainNav.map((item, index) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <div
                        key={index}
                        className="relative"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.isButton ? (
                          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                            <Link
                              to={item.href}
                              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        ) : item.hasDropdown ? (
                          <button
                            type="button"
                            className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center transition-all duration-200 ${
                              activeDropdown === index || isActive
                                ? "bg-emerald-50 text-emerald-700 font-bold"
                                : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/60"
                            }`}
                            onClick={() => handleDropdownToggle(index)}
                          >
                            {item.name}
                            <ChevronDown
                              size={16}
                              className={`ml-1 transition-transform duration-300 ${
                                activeDropdown === index ? "rotate-180 text-emerald-600" : ""
                              }`}
                            />
                          </button>
                        ) : (
                          <Link
                            to={item.href}
                            className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center relative transition-all duration-200 ${
                              isActive
                                ? "bg-emerald-50 text-emerald-700 font-bold"
                                : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/60"
                            }`}
                          >
                            {item.name}
                            {isActive && (
                              <motion.div
                                layoutId="activeNavIndicator"
                                className="absolute bottom-0 left-2 right-2 h-0.5 bg-emerald-600 rounded-full"
                              />
                            )}
                          </Link>
                        )}

                        {/* Animated Dropdown Menu */}
                        <AnimatePresence>
                          {item.hasDropdown && activeDropdown === index && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.96 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.96 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl ring-1 ring-emerald-500/10 border border-emerald-100 z-50 overflow-hidden"
                            >
                              <div className="p-2 space-y-1">
                                {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                  <Link
                                    key={dropdownIndex}
                                    to={`${item.href}/${dropdownItem.slug}`}
                                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-xl transition-all duration-200"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2.5 rounded-xl text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 focus:outline-none transition-colors"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden overflow-hidden border-t border-emerald-100 bg-white"
                >
                  <div className="py-4 space-y-2">
                    {navData.mainNav.map((item, index) => (
                      <div key={index}>
                        {item.hasDropdown ? (
                          <div>
                            <button
                              type="button"
                              className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between transition-colors ${
                                activeDropdown === index
                                  ? "bg-emerald-50 text-emerald-700 font-bold"
                                  : "text-gray-700 hover:bg-emerald-50/60"
                              }`}
                              onClick={() => handleDropdownToggle(index)}
                            >
                              {item.name}
                              <ChevronDown
                                size={18}
                                className={`transition-transform duration-300 ${
                                  activeDropdown === index ? "rotate-180 text-emerald-600" : ""
                                }`}
                              />
                            </button>
                            {activeDropdown === index && (
                              <div className="pl-4 pr-2 py-2 space-y-1 bg-emerald-50/30 rounded-xl my-1">
                                {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                  <Link
                                    key={dropdownIndex}
                                    to={`${item.href}/${dropdownItem.slug}`}
                                    className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-emerald-700 hover:bg-emerald-100/50 rounded-lg"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            to={item.href}
                            className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                              item.isButton
                                ? "bg-emerald-600 text-white text-center font-bold"
                                : location.pathname === item.href
                                ? "bg-emerald-50 text-emerald-700 font-bold"
                                : "text-gray-700 hover:bg-emerald-50/60"
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </div>
    </>
  );
};

export default ModernNavbarSystem;
