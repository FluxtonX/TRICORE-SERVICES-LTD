import React, { useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import "aos/dist/aos.css";
import AOS from "aos";

const SectionHeader = ({
  title = "Location",
  imageSrc,
  imageAlt = "Section Image",
  bgColor = "bg-gradient-to-r from-emerald-800 via-primary-700 to-teal-900",
  textColor = "text-white",
  breadcrumbItems = [],
  showBreadcrumb = true,
  titleSize = "text-3xl md:text-4xl lg:text-5xl",
  overlayGradient = true,
  parallax = false,
}) => {
  // Initialize AOS once
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // Enhanced animation variants
  const textVariants = {
    hidden: {
      opacity: 0,
      x: -60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: 60,
      scale: 1.1,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const breadcrumbVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.4,
      },
    },
  };

  // Default breadcrumb items
  const defaultBreadcrumb =
    breadcrumbItems.length > 0
      ? breadcrumbItems
      : [
          { label: "Home", href: "/", icon: Home },
          { label: title, active: true },
        ];

  return (
    <section className="w-full overflow-hidden">
      {/* Top section */}
      <div className="flex flex-col md:flex-row w-full min-h-[300px] relative ">
        {/* Left Side - Text */}
        <motion.div
          className={` flex items-center justify-center w-full md:w-1/2 p-8 md:p-12 lg:p-16 ${bgColor} relative overflow-hidden `}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full transform -translate-y-1/2"></div>
          </div>

          <motion.h1
            className={`${textColor} ${titleSize} font-bold tracking-tight relative z-10 text-center md:text-left`}
            data-aos="fade-right"
            data-aos-delay="200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title}
            <motion.div
              className="w-16 h-1 bg-white/30 mt-4 mx-auto md:mx-0"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </motion.h1>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="w-full md:w-1/2 h-[300px] md:h-auto relative overflow-hidden"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className={`w-full h-full object-cover ${
              parallax ? "transform-gpu" : ""
            }`}
            data-aos="fade-left"
            data-aos-delay="300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            style={
              parallax
                ? {
                    transform: "translateY(var(--scroll-y, 0) * 0.3)",
                  }
                : {}
            }
          />

          {/* Gradient overlay */}
          {overlayGradient && (
            <div className="absolute inset-0 bg-gradient-to-r from-primary-700/20 via-transparent to-transparent"></div>
          )}

          {/* Decorative corner element */}
          <motion.div
            className="absolute bottom-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center"
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="w-6 h-6 border-2 border-white rounded-sm"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Breadcrumb */}
      {showBreadcrumb && (
        <motion.div
          className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 md:p-6 border-t border-gray-200"
          variants={breadcrumbVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <nav className="max-w-7xl mx-auto px-4 ">
            <ol className="flex items-center gap-2 text-sm">
              {defaultBreadcrumb.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  {index > 0 && (
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  )}

                  <motion.span
                    className={`flex items-center gap-2 transition-colors duration-200 ${
                      item.active
                        ? "text-primary-700 font-semibold"
                        : "text-gray-500 hover:text-primary-600 cursor-pointer"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      if (item.href && !item.active) {
                        window.location.href = item.href;
                      }
                    }}
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    {item.label}
                  </motion.span>
                </li>
              ))}
            </ol>
          </nav>
        </motion.div>
      )}
    </section>
  );
};
export default SectionHeader;
