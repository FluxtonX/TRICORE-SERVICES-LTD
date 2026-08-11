import React, { useState } from "react";
import { ChevronDown, Phone, Mail, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import navData from "../../utils/navdata.jsx"; // Adjust the import path as necessary
import { FaLessThan } from "react-icons/fa";
import logo2 from "../../assets/logo2.png";

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
      <div className="bg-primary text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-end items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <Phone size={16} />

            <a href={`tel:${navData.topBar.phone}`}>{navData.topBar.phone}</a>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={16} />
            <span>{navData.topBar.email}</span>
          </div>
        </div>
      </div>
      <div className="w-full sticky top-0 z-50">
        {/* Top Bar */}

        {/* Main Navigation */}
        <nav className=" bg-white/90 backdrop-blur-sm shadow-lg  relative ">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center">
                  <div className="text-2xl font-bold text-gray-900 tracking-tight">
                    {navData.logo.text}
                    <span className="text-primary-text ml-1">{navData.logo.highlightText || "SERVICES"}</span>
                  </div>
                  <div className="ml-2 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    {navData.logo.subtitle}
                  </div>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navData.mainNav.map((item, index) => (
                    <div
                      key={index}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.isButton ? (
                        <Link
                          to={item.href}
                          className="bg-primary-hover text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      ) : item.hasDropdown ? (
                        <button
                          type="button"
                          className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200 text-gray-700 hover:text-primary-text focus:outline-none ${
                            activeDropdown === index
                              ? "bg-primary-light text-primary-text font-bold"
                              : ""
                          }`}
                          onClick={() => handleDropdownToggle(index)}
                        >
                          {item.name}
                          <ChevronDown
                            size={16}
                            className={`ml-1 transition-transform duration-200 ${
                              activeDropdown === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      ) : (
                        <Link
                          to={item.href}
                          className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200 text-gray-700 hover:text-primary-text ${
                            location.pathname === item.href
                              ? "bg-primary-light text-primary-text font-bold"
                              : ""
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}

                      {/* Dropdown Menu */}
                      {item.hasDropdown && activeDropdown === index && (
                        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                          <div className="py-1">
                            {item.dropdownItems.map(
                              (dropdownItem, dropdownIndex) => (
                                <Link
                                  key={dropdownIndex}
                                  to={`${item.href}/${dropdownItem.slug}`}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-light hover:text-primary-text transition-colors duration-200"
                                >
                                  {dropdownItem.name}
                                </Link>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-text hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-text"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
                  {navData.mainNav.map((item, index) => (
                    <div key={index}>
                      {item.hasDropdown ? (
                        <button
                          type="button"
                          className={`w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center justify-between transition-colors duration-200 ${
                            activeDropdown === index
                              ? "bg-primary-light text-primary-text font-bold"
                              : "text-gray-700 hover:text-primary-text hover:bg-primary-light"
                          }`}
                          onClick={() => handleDropdownToggle(index)}
                        >
                          {item.name}
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${
                              activeDropdown === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      ) : (
                        <button
                          type="button"
                          className={`w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center justify-between transition-colors duration-200 ${
                            item.isButton
                              ? "bg-primary-hover text-white hover:bg-primary"
                              : `${
                                  location.pathname === item.href
                                    ? "bg-primary-light text-primary-text font-bold"
                                    : "text-gray-700 hover:text-primary-text hover:bg-primary-light"
                                }`
                          }`}
                          onClick={() => {
                            if (!item.isButton) {
                              window.location.href = item.href;
                            }
                          }}
                        >
                          {item.name}
                        </button>
                      )}

                      {/* Mobile Dropdown */}
                      {item.hasDropdown && activeDropdown === index && (
                        <div className="pl-4 space-y-1">
                          {item.dropdownItems.map(
                            (dropdownItem, dropdownIndex) => (
                              <Link
                                key={dropdownIndex}
                                to={`${item.href}/${dropdownItem.slug}`}
                                className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-text hover:bg-primary-light rounded-md transition-colors duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default ModernNavbarSystem;
