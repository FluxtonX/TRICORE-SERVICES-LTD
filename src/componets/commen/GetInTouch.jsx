import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles, Target, DollarSign } from 'lucide-react';

const CTASection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 1.2,
      rotate: -5
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-primary-300 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-32 left-40 w-2 h-2 bg-primary-500 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-20 right-20 w-4 h-4 bg-primary-200 rounded-full animate-pulse delay-500"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-900/5 to-transparent transform -skew-y-12"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div 
            variants={itemVariants}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-primary-500/10 backdrop-blur-sm border border-primary-500/20 rounded-full px-6 py-3"
            >
              <div className="relative">
                <Sparkles className="w-5 h-5 text-primary-400" />
                <div className="absolute inset-0 animate-ping">
                  <Sparkles className="w-5 h-5 text-primary-400 opacity-30" />
                </div>
              </div>
              <span className="text-primary-400 font-semibold text-sm">
                Personalized Solutions
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Solution to meet your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                  individual budget
                </span>{' '}
                and needs
              </h2>
            </motion.div>

            {/* Features List */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              {[
                { icon: Target, text: "Customized security solutions for every business size" },
                { icon: DollarSign, text: "Flexible pricing plans that fit your budget" },
                { icon: Sparkles, text: "24/7 professional support and monitoring" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="flex items-center gap-4 text-gray-300"
                >
                  <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center border border-primary-500/30">
                    <item.icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <span className="text-lg">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              className="pt-6"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl flex items-center gap-3"
              >
                Get in Touch
                <motion.div
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300"
                  whileHover={{ rotate: 45 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div 
            variants={imageVariants}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-3xl shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop"
                  alt="Professional consultation"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-black/30"></div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -top-6 -left-6 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Custom Solutions</p>
                    <p className="text-primary-400 text-sm">Tailored for you</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Budget Friendly</p>
                    <p className="text-primary-400 text-sm">Affordable pricing</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Dots */}
              <div className="absolute top-1/2 -right-4 flex flex-col gap-2">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 0.6, x: 0 } : {}}
                    transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
                    className="w-2 h-2 bg-primary-400 rounded-full"
                  />
                ))}
              </div>

              <div className="absolute top-1/4 -left-4 flex flex-col gap-2">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 0.4, x: 0 } : {}}
                    transition={{ delay: 1.4 + i * 0.1, duration: 0.4 }}
                    className="w-2 h-2 bg-primary-300 rounded-full"
                  />
                ))}
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent rounded-3xl blur-3xl -z-10 transform translate-x-4 translate-y-4"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #22c55e 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
    </section>
  );
};

export default CTASection;