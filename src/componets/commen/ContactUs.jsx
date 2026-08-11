import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  User,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

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
      y: 50,
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

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      info: "39 Ernest Road RM11 3JG",
      color: "text-primary-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+44 7498506669",
      color: "text-blue-500",
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@tricoreservices.uk",
      color: "text-purple-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-32 w-48 h-48 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-400 rounded-full blur-3xl"></div>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 relative"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Info */}
          <motion.div variants={itemVariants} className="space-y-12">
            {/* Header */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold"
              >
                <Mail className="w-4 h-4" />
                CONTACT US
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight"
              >
                Looking for a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-blue-600">
                  Collaboration
                </span>
              </motion.h2>
            </div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      item.color === "text-primary-500"
                        ? "bg-primary-100 group-hover:bg-primary-200"
                        : item.color === "text-blue-500"
                        ? "bg-blue-100 group-hover:bg-blue-200"
                        : "bg-purple-100 group-hover:bg-purple-200"
                    }`}
                  >
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">
                      {item.title}
                    </p>
                    <p className="text-gray-800 font-semibold text-lg group-hover:text-gray-900 transition-colors">
                      {item.title === "Call Us" ? (
                        <a
                          href={`tel:${item.info}`}
                          className="hover:underline"
                        >
                          {item.info}
                        </a>
                      ) : (
                        item.info
                      )}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="relative"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-blue-100 rounded-full opacity-60"></div>
              <div className="absolute top-4 left-4 w-24 h-24 bg-gradient-to-br from-purple-100 to-primary-100 rounded-full opacity-40"></div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden border border-gray-100">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-transparent rounded-bl-full opacity-30"></div>

              {isSubmitted ? (
                // Success Message
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-primary-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been sent successfully. We'll get back to
                    you soon.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSubmitted(false)}
                    className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-8 relative z-10"
                >
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="relative group"
                  >
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-primary-500 transition-colors">
                      <User className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name *"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-primary-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-400"
                    />
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="relative group"
                  >
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-primary-500 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-primary-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-400"
                    />
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="relative group"
                  >
                    <div className="absolute left-4 top-6 text-gray-400 group-focus-within:text-primary-500 transition-colors">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-primary-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-400 resize-none"
                    ></textarea>
                  </motion.div>

                  {/* reCAPTCHA Placeholder */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="bg-gray-100 border-2 border-gray-200 rounded-2xl p-4 flex items-center justify-center"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 border-2 border-primary-500 rounded bg-white flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1, duration: 0.3 }}
                          className="w-3 h-3 bg-primary-500 rounded-sm"
                        />
                      </div>
                      <span className="text-gray-600 font-medium">
                        I'm not a robot
                      </span>
                      <div className="ml-auto">
                        <div className="text-xs text-gray-400">reCAPTCHA</div>
                        <div className="text-xs text-gray-400">
                          Privacy - Terms
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-3 group"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                        />
                      ) : (
                        <>
                          Send Now
                          <motion.div className="group-hover:translate-x-1 transition-transform duration-200">
                            <Send className="w-5 h-5" />
                          </motion.div>
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
