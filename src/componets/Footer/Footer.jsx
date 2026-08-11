import React from "react";
import footerData from "../../utils/footerData.jsx"; // Adjust the import
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import logo2 from "../../assets/logo2.png";

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
    <footer className="bg-white text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <div className="text-3xl font-bold text-black tracking-tight">
                {footerData.logo.text}
                <span className="text-primary ml-1">{footerData.logo.highlightText || "SERVICES"}</span>
              </div>
              <div className="ml-2 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                {footerData.logo.subtitle}
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex space-x-3">
            {footerData.socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className={`${social.bgColor} p-3 rounded-full hover:opacity-80 transition-opacity duration-200 flex items-center justify-center`}
                aria-label={social.name}
              >
                <span
                  className={
                    social.bgColor.includes("white")
                      ? "text-gray-800"
                      : "text-white"
                  }
                >
                  {renderSocialIcon(social.icon)}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-primary mb-8"></div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerData.sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-primary mb-4">
                {section.title}
              </h3>

              {/* Text Content */}
              {section.content.type === "text" && (
                <div className="space-y-4">
                  <p className="text-black text-sm leading-relaxed">
                    {section.content.text}
                  </p>
                  {section.badge && (
                    <div className="inline-block">
                      <span
                        className={`${section.badge.bgColor} text-white px-3 py-1 rounded text-xs font-bold`}
                      >
                        {section.badge.text}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Links Content */}
              {section.content.type === "links" && (
                <ul className="space-y-3">
                  {section.content.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.url}
                        className="text-black hover:text-primary text-sm transition-colors duration-200 flex items-center group"
                      >
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
                        className="text-black hover:text-primary text-sm transition-colors duration-200 flex items-center group"
                      >
                        {link.name.includes("Call") && (
                          <Phone className="w-4 h-4 mr-2 text-primary" />
                        )}
                        {link.name.includes("@") && (
                          <Mail className="w-4 h-4 mr-2 text-primary" />
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
      <div className="border-t border-primary bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-black text-sm">{footerData.bottomText}</p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-gray-500 text-xs">
                Built with modern web technologies
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;
