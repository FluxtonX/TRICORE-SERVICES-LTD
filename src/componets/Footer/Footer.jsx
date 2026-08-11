import React from "react";
import footerData from "../../utils/footerData.jsx";
import { Phone, Mail, MapPin, Shield } from "lucide-react";
import { motion } from "framer-motion";

const ModernFooter = () => {
  const renderSocialIcon = (iconName) => {
    switch (iconName) {
      case "X":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case "MapPin":
        return <MapPin className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#03281e] via-[#022219] to-[#01140f] text-gray-300 relative border-t border-emerald-500/20">
      {/* Top Ambient Glow Line */}
      <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 shadow-sm"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-8 border-b border-emerald-900/50">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center group">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center border border-emerald-400/30 mr-3 group-hover:bg-emerald-600 transition-all duration-300">
                <Shield className="w-6 h-6 text-emerald-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-2xl font-black text-white tracking-tight flex items-center">
                  {footerData.logo.text}
                  <span className="text-emerald-400 ml-1">{footerData.logo.highlightText || "SERVICES"}</span>
                </div>
                <div className="text-[10px] font-bold text-emerald-300 tracking-widest uppercase">
                  {footerData.logo.subtitle}
                </div>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex space-x-3">
            {footerData.socialLinks.map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={social.url}
                className="bg-emerald-900/60 hover:bg-emerald-600 border border-emerald-500/30 p-3 rounded-full text-emerald-300 hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg"
                aria-label={social.name}
              >
                {renderSocialIcon(social.icon)}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {footerData.sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-bold text-emerald-400 tracking-wide uppercase text-sm border-l-2 border-emerald-500 pl-3">
                {section.title}
              </h3>

              {/* Text Content */}
              {section.content.type === "text" && (
                <div className="space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    {section.content.text}
                  </p>
                  {section.badge && (
                    <div className="inline-block">
                      <span className="bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                        {section.badge.text}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Links Content */}
              {section.content.type === "links" && (
                <ul className="space-y-2.5">
                  {section.content.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.url}
                        className="text-gray-300 hover:text-emerald-400 text-sm transition-colors duration-200 flex items-center group"
                      >
                        <span className="text-emerald-500 mr-2 group-hover:translate-x-1 transition-transform">›</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              {/* Contact Content */}
              {section.content.type === "contact" && (
                <ul className="space-y-3">
                  {section.content.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.url}
                        className="text-gray-300 hover:text-emerald-400 text-sm transition-colors duration-200 flex items-center group"
                      >
                        {link.name.includes("Call") && (
                          <Phone className="w-4 h-4 mr-2 text-emerald-400 flex-shrink-0" />
                        )}
                        {link.name.includes("@") && (
                          <Mail className="w-4 h-4 mr-2 text-emerald-400 flex-shrink-0" />
                        )}
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-emerald-950 bg-[#010e0b]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>{footerData.bottomText}</p>
            <div className="flex items-center mt-3 md:mt-0 space-x-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-emerald-400 font-medium">TRICORE SERVICES LTD • Modern Security Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;
