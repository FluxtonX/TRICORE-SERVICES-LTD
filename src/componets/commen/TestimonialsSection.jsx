import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Users,
  Building,
} from "lucide-react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const testimonials = [
    {
      id: 1,
      name: "GREYSTAR",
      company: "Property Management",
      role: "Operations Director",
      message:
        "TRICORE SERVICES were really pro-active with us, having been pulled in at such short notice they were still able to organise staff to arrange site visits and start to build those relationships with the site team and management. Many cleaners came and were all pro-active and willing to work to a great standard, receiving good guidance and training from their management. A special shout out to Donna and Bilal who kept regular communication each day - this made things so much easier when making new arrangements or simply understanding where we are at with the days works. Our turnover clean was successful and we hope to use TRICORE SERVICES again in the future.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      companyLogo: Building,
    },
    {
      id: 2,
      name: "Nazim Jaffer",
      company: "Corporate Services Ltd",
      role: "Managing Director",
      message:
        "For the past few years, we have worked hand in hand with TRICORE SERVICES LTD who have assisted us with several services. At no point have they failed in their service delivery. Officers are smart and punctual, the management team are always available to assist with any issues 24 hours a day which makes them a very reliable partner to us.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      companyLogo: Users,
    },
    {
      id: 3,
      name: "Sarah Mitchell",
      company: "London Financial District",
      role: "Security Manager",
      message:
        "TRICORE SERVICES LTD has exceeded our expectations in every aspect. Their professional approach, attention to detail, and 24/7 availability have made them an invaluable partner. The quality of their security personnel and the efficiency of their management team is outstanding.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b75f4a94?w=100&h=100&fit=crop&crop=face",
      companyLogo: Building,
    },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };
  const CompanyLogo = testimonials[currentTestimonial].companyLogo;

  const slideVariants = {
    enter: {
      x: 300,
      opacity: 0,
      scale: 0.9,
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: {
      zIndex: 0,
      x: -300,
      opacity: 0,
      scale: 0.9,
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-emerald-50/20 to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-emerald-300 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-emerald-600 font-bold tracking-widest text-xs uppercase mb-3 px-4 py-1.5 rounded-full bg-emerald-50 inline-block border border-emerald-200"
          >
            What Our Clients Say
          </motion.p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto mb-6 rounded-full"></div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight"
          >
            TRICORE SERVICES <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Testimonials</span>
          </motion.h2>
        </motion.div>

        {/* Testimonials Container */}
        <div className="relative max-w-6xl mx-auto" ref={sectionRef}>
          {/* Navigation Arrows */}
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(16, 185, 129, 0.15)",
            }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 lg:-translate-x-12 z-10 bg-white shadow-xl hover:shadow-2xl border border-emerald-100 p-3.5 rounded-full transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-emerald-700" />
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(16, 185, 129, 0.15)",
            }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 lg:translate-x-12 z-10 bg-white shadow-xl hover:shadow-2xl border border-emerald-100 p-3.5 rounded-full transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-emerald-700" />
          </motion.button>

          {/* Testimonial Cards */}
          <div className="relative min-h-[420px] md:min-h-[360px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                }}
                className="absolute inset-0"
              >
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 h-full relative overflow-hidden border border-emerald-100 flex flex-col justify-between">
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="absolute top-6 left-6"
                  >
                    <Quote className="w-16 h-16 text-emerald-500 opacity-15" />
                  </motion.div>

                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      {/* Stars */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex gap-1 mb-6"
                      >
                        {[...Array(testimonials[currentTestimonial].rating)].map(
                          (_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                            >
                              <Star className="w-5 h-5 text-amber-400 fill-current" />
                            </motion.div>
                          )
                        )}
                      </motion.div>

                      {/* Message */}
                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 font-normal italic"
                      >
                        "{testimonials[currentTestimonial].message}"
                      </motion.p>
                    </div>

                    {/* Author Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                      className="flex items-center gap-4 pt-4 border-t border-emerald-50"
                    >
                      <div className="relative">
                        <img
                          src={testimonials[currentTestimonial].avatar}
                          alt={testimonials[currentTestimonial].name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-emerald-400 shadow-md"
                        />
                        <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-emerald-600 rounded-full flex items-center justify-center shadow">
                          <CompanyLogo className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-emerald-700 font-bold text-sm">
                          {testimonials[currentTestimonial].role}
                        </p>
                        <p className="text-gray-500 text-xs font-medium">
                          {testimonials[currentTestimonial].company}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-tl-full opacity-30 pointer-events-none"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => goToTestimonial(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-gradient-to-r from-emerald-600 to-teal-500 w-8 shadow-md"
                    : "bg-gray-300 hover:bg-emerald-200 w-3"
                }`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`absolute -top-12 right-0 p-2.5 rounded-full transition-all duration-300 border border-emerald-200 ${
              isAutoPlaying
                ? "bg-emerald-600 text-white shadow-md"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            <motion.div
              animate={{ rotate: isAutoPlaying ? 360 : 0 }}
              transition={{
                duration: 3,
                repeat: isAutoPlaying ? Infinity : 0,
                ease: "linear",
              }}
            >
              ⟲
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
