// SecuritySection.jsx
import React from "react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";

const SecuritySection = ({ title, sections }) => {
  React.useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className=" py-12 max-w-7xl mx-auto px-4">
      <motion.h2
        className="text-primary text-3xl md:text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>

      <div className="space-y-10">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="space-y-3"
            data-aos="fade-up"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              {section.heading}
            </h3>
            <p className="text-gray-700 leading-relaxed">{section.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SecuritySection;
