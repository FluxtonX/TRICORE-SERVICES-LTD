// SecuritySection.jsx
import React from "react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";

const SecuritySection = ({ title, sicCode, tagline, highlights, sections }) => {
  React.useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-14 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <motion.h2
          className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-teal-700 text-3xl md:text-5xl font-black tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>

        {sicCode && (
          <span className="px-4 py-1.5 rounded-full bg-stone-100 text-stone-800 font-bold text-sm border border-stone-300">
            {sicCode}
          </span>
        )}
      </div>

      {tagline && (
        <p className="text-gray-500 font-medium text-base mb-8">
          {tagline}
        </p>
      )}

      {/* Highlights List if present */}
      {highlights && highlights.length > 0 && (
        <div className="mb-12 p-6 rounded-2xl bg-[#F6F4EE] border border-[#DEDACD]">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#A9791F] mb-4">
            Service Highlights & Capabilities
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm font-medium text-[#14191F]">
                <span className="w-2 h-2 rounded-full bg-[#A9791F] flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-10">
        {sections && sections.map((section, index) => (
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
            <p className="text-gray-700 text-base leading-relaxed">{section.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SecuritySection;
