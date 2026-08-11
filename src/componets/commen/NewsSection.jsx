import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, ArrowRight, Award, Users, Building2 } from "lucide-react";

const NewsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const newsItems = [
    {
      id: 1,
      date: "August 01, 2025",
      title: "ISO 45001 & 14001 Accredited",
      description:
        "Achievement of ISO 45001 & 14001: We are delighted to announce that TRICORE SERVICES LTD has achieved ISO 14001 and ISO 45001. These...",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      icon: Award,
      category: "Certification",
    },
    {
      id: 2,
      date: "August 15, 2025",
      title: "TRICORE SERVICES Introduces Online Job Portal",
      description:
        "TRICORE SERVICES has introduced its new job portal to streamline and enhance its recruitment process. This is important for making the recruitment process easier and more...",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      icon: Users,
      category: "Technology",
    },
    {
      id: 3,
      date: "August 11, 2025",
      title: "Building A Socially Responsible Business",
      description:
        "TRICORE SERVICES is holding a meeting today, hosted by CEO Aamir Shams and other members of the lead team, in central London. The purpose of the meeting is to discuss...",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop",
      icon: Building2,
      category: "Corporate",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
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
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
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
            Latest News
          </motion.p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto mb-6 rounded-full"></div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight"
          >
            TRICORE SERVICES <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">News</span>
          </motion.h2>
        </motion.div>

        {/* News Grid */}
        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              onClick={() => window.location.href = '/news'}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-emerald-100/80"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-64">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md">
                    {item.category}
                  </span>
                </div>

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30"
                >
                  <item.icon className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Content Container */}
              <div className="p-6 bg-gradient-to-br from-emerald-950 to-slate-900">
                {/* Date */}
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 text-xs font-bold">
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-emerald-400 transition-colors duration-300 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 font-light">
                  {item.description}
                </p>

                {/* Read More Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold text-sm transition-colors duration-300 group/btn"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(16, 185, 129, 0.35)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/news'}
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-xl group"
          >
            View All News
            <motion.span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
