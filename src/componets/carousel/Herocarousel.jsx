import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import security from "../../assets/home banner/security.jpg"
import security1 from "../../assets/home banner/security1.jpg"
import security2 from "../../assets/home banner/security2.webp"
import security3 from "../../assets/home banner/security3.webp"
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Users,
  Building,
  Eye,
} from "lucide-react";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Security Provider",
      subtitle: "SECURITY",
      highlight: "Nationwide",
      description:
        "TRICORE SERVICES LTD is a leading security company based in London providing immense security solutions Nationwide (Manned Guarding, Loss Prevention Officers, Vacant Properties and Concierge) that fit your needs.",
      image:
        security1,
      icon: Shield,
    },
    {
      id: 2,
      title: "Professional Team",
      subtitle: "EXCELLENCE",
      highlight: "Expert Staff",
      description:
        "Our highly trained security professionals deliver exceptional service with years of experience in corporate security, event management, and property protection across the United Kingdom.",
      image:
        security,
      icon: Users,
    },
    {
      id: 3,
      title: "Corporate Solutions",
      subtitle: "BUSINESS",
      highlight: "Enterprise Ready",
      description:
        "Comprehensive security solutions tailored for businesses of all sizes. From small offices to large corporate complexes, we provide customized security strategies that protect your assets.",
      image:
        security2,
      icon: Building,
    },
    {
      id: 4,
      title: "24/7 Monitoring",
      subtitle: "SURVEILLANCE",
      highlight: "Round the Clock",
      description:
        "Advanced monitoring systems with real-time alerts and professional response teams. Our state-of-the-art technology ensures your property is protected around the clock.",
      image:
        security3,
      icon: Eye,
    },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const slideVariants = {
    enter: {
      x: 1000,
      opacity: 0,
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      x: -1000,
      opacity: 0,
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const Icon = slides[currentSlide].icon;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
          }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Content */}
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="relative z-10 flex items-center h-full"
            >
              <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="max-w-3xl">
                  {/* Highlight Badge */}
                  <motion.div
                    variants={itemVariants}
                    className="inline-flex items-center gap-2 mb-6"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-primary font-semibold tracking-wide text-sm uppercase">
                      {slides[currentSlide].highlight}
                    </span>
                  </motion.div>

                  {/* Main Title */}
                  <motion.h1
                    variants={itemVariants}
                    className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight"
                  >
                    {slides[currentSlide].title}{" "}
                    <span className="text-primary">
                      {slides[currentSlide].subtitle
                        .split("")
                        .map((char, index) => (
                          <motion.span
                            key={index}
                            variants={itemVariants}
                            className="inline-block"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            {char}
                          </motion.span>
                        ))}
                    </span>
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    variants={itemVariants}
                    className="text-gray-300 text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl"
                  >
                    {slides[currentSlide].description}
                  </motion.p>

                  {/* Action Buttons */}
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "bg-primary",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Get in Touch
                    </motion.button>
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                    >
                      Discover More
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary-500 w-8"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/50 z-20">
        <motion.div
          key={currentSlide}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          className="h-full bg-gradient-to-r from-primary-500 to-primary-400"
        />
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 z-20 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
        <span className="text-white font-semibold">
          {String(currentSlide + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Auto-play Toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className={`absolute top-6 left-6 z-20 p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 ${
          isAutoPlaying
            ? "bg-primary-500/20 text-primary"
            : "bg-white/10 text-white"
        }`}
      >
        <motion.div
          animate={{ rotate: isAutoPlaying ? 360 : 0 }}
          transition={{
            duration: 2,
            repeat: isAutoPlaying ? Infinity : 0,
            ease: "linear",
          }}
        >
          ⟲
        </motion.div>
      </motion.button>
    </div>
  );
};

export default HeroCarousel;
