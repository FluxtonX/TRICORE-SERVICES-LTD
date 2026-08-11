import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Eye, Brush, Users, Building, Car,ShieldAlert } from "lucide-react";
import security from "../../assets/home banner/security.jpg"
import servilance from "../../assets/expertise/servilance.webp"
import clean1 from "../../assets/expertise/clean.webp"
import corporate1 from "../../assets/expertise/corporate.webp"
import dog from "../../assets/services/dog.webp"

const ModernServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services = [
    {
      id: 1,
      title: "Loss Prevention",
      description:
        "In the realm of retail and business, losses can significantly impact your bottom line. Our specialized loss prevention officers are trained to identify, deter, and respond to theft and fraudulent activities.",
      image:
        security,
      icon: Shield,
      features: [
        "Retail theft prevention",
        "Fraud detection",
        "Asset protection",
        "Risk assessment",
      ],
    },
    {
      id: 2,
      title: "Surveillance & Monitoring",
      description:
        "Advanced 24/7 monitoring systems with real-time alerts and professional response teams. Our state-of-the-art CCTV and surveillance technology ensures comprehensive security coverage.",
      image:
        servilance,
      icon: Eye,
      features: [
        "24/7 monitoring",
        "Real-time alerts",
        "Advanced CCTV systems",
        "Remote surveillance",
      ],
    },
    {
      id: 3,
      title: "Professional Cleaning",
      description:
        "Our team at TRICORE SERVICES LTD specializes in providing a comprehensive range of professional cleaning services including office cleaning, industrial cleaning, and specialized sanitation.",
      image:
       clean1,
      icon: Brush,
      features: [
        "Office cleaning",
        "Industrial sanitation",
        "Deep cleaning services",
        "Eco-friendly solutions",
      ],
    },
    {
      id: 4,
      title: "Corporate Security",
      description:
        "Comprehensive security solutions for businesses of all sizes. From executive protection to facility security, we provide tailored services that protect your people and assets.",
      image:
        corporate1,
      icon: Building,
      features: [
        "Executive protection",
        "Facility security",
        "Access control",
        "Emergency response",
      ],
    },
    {
  id: 5,
  title: "Security Guarding",
  description:
    "We provide professional, licensed security guards to protect your people, property, and assets. Our team ensures safety through reliable on-site guarding, patrols, and rapid response — giving you peace of mind, 24/7.",
  image: dog, // 👉 replace with your actual image import
  icon: ShieldAlert,     // 👉 pick a suitable icon (e.g., Shield from lucide-react)
  features: [
    "Licensed and trained personnel",
    "On-site guarding",
    "Patrol services",
    "Rapid response 24/7",
  ],
},

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-600 font-semibold tracking-wide text-sm uppercase mb-4"
          >
            WE DO IT BETTER
          </motion.p>
          <div className="w-16 h-1 bg-primary-500 mx-auto mb-6"></div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
          >
            TRICORE SERVICES <span className="text-priamary-600">EXPERTISE</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            We cover sectors as Corporate & Industrial, Education, Finance &
            Insurance, Government, Rail, Retail, Leisure & Tourism, Transport &
            Logistics
          </motion.p>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        ref={sectionRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="space-y-20">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:grid-flow-col-dense"
                  }`}
                >
                  {/* Image Column */}
                  <motion.div
                    className={`relative ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <motion.div
                        variants={imageVariants}
                        className="aspect-[4/3] relative"
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-primary-900/30"></div>

                        {/* Floating Icon */}
                        <motion.div
                          initial={{ scale: 0, rotate: -45 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.8, duration: 0.6 }}
                          className="absolute top-6 right-6 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-green-400/30"
                        >
                          <service.icon className="w-8 h-8 text-white" />
                        </motion.div>

                        {/* Overlay on Hover */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 bg-primary-900/80 flex items-center justify-center transition-opacity duration-300"
                        >
                          <div className="text-center text-white p-6">
                            <h4 className="font-bold text-xl mb-4">
                              Key Features
                            </h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileHover={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="flex items-center justify-center gap-2"
                                >
                                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                                  {feature}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-full opacity-60 -z-10"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-50 rounded-full opacity-40 -z-10"></div>
                  </motion.div>

                  {/* Content Column */}
                  <motion.div
                    variants={textVariants}
                    className={`space-y-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="space-y-4">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "60px" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1 bg-primary-500 rounded-full"
                      ></motion.div>

                      <motion.h3
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                      >
                        {service.title}
                      </motion.h3>
                    </div>

                    <motion.p
                      className="text-lg text-gray-600 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      {service.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="flex flex-wrap gap-3"
                    >
                      {service.features.map((feature, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium border border-primary-200"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="pt-4"
                    >
                      <motion.button
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg group"
                      >
                        Learn More
                        <motion.span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">
                          →
                        </motion.span>
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-24 text-center"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Ready to Secure Your Business?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to discuss your security needs and get a customized
            solution.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-xl"
          >
            Get Started Today
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ModernServicesSection;
