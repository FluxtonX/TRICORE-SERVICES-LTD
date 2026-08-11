import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const NewsArticle = ({
  category = "News",
  categoryColor = "text-emerald-600",
  title = "ISO 45001 & 14001 Accredited",
  date = "06 Nov 2024",
  content = [],
  image,
  imageAlt = "News Image",
  imagePosition = "right", // "left", "right", "top", "bottom"
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const defaultContent = [
    "We are delighted to announce that TRICORE SERVICES LTD has achieved ISO 14001 and ISO 45001 accreditation!",
    "These certifications affirm our commitment to continuous improvement and maintaining the highest standards in sustainability, safety, and service delivery.",
    "A big thank you to the entire TRICORE SERVICES LTD team for their hard work in making this achievement a reality. Together, we are leading the way towards a safer and more responsible industry.",
  ];

  const articleContent = content.length > 0 ? content : defaultContent;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      x: imagePosition === "left" ? -30 : imagePosition === "right" ? 30 : 0,
      y: imagePosition === "top" ? -30 : imagePosition === "bottom" ? 30 : 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const renderContent = () => (
    <motion.div className="flex-1" variants={itemVariants}>
      {/* Category */}
      <motion.h2
        className={`text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 ${categoryColor}`}
        variants={itemVariants}
      >
        {category}
      </motion.h2>

      {/* Article */}
      <article className="space-y-3 sm:space-y-4">
        {/* Title */}
        <motion.h1
          className="max-w-7xl mx-auto px-4 text-xl sm:text-2xl font-semibold text-gray-800 leading-tight"
          variants={itemVariants}
        >
          {title}
        </motion.h1>

        {/* Date */}
        <motion.p className="text-gray-600 text-sm" variants={itemVariants}>
          {date}
        </motion.p>

        {/* Content */}
        <motion.div
          className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base"
          variants={itemVariants}
        >
          {articleContent.map((paragraph, index) => (
            <motion.p key={index} variants={itemVariants} custom={index}>
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </article>
    </motion.div>
  );

  const renderImage = () =>
    image && (
      <motion.div
        className={`
        ${
          imagePosition === "left" || imagePosition === "right"
            ? "flex-shrink-0 w-full sm:w-64"
            : "w-full"
        }
      `}
        variants={imageVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={image}
          alt={imageAlt}
          className={`
          object-contain bg-gray-50 border border-gray-200 rounded-lg w-full
          ${
            imagePosition === "left" || imagePosition === "right"
              ? "h-48 sm:h-48"
              : "h-48 sm:h-64"
          }
        `}
        />
      </motion.div>
    );

  // Determine layout based on screen size and position
  const getFlexDirection = () => {
    // On mobile, always stack vertically (image on top)
    // On desktop, use the specified position
    if (imagePosition === "left") {
      return "flex-col sm:flex-row";
    } else if (imagePosition === "right") {
      return "flex-col sm:flex-row-reverse";
    } else {
      return "flex-col";
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`max-w-6xl mx-auto p-4 sm:p-6 bg-white ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Top positioned image */}
      {imagePosition === "top" && (
        <motion.div className="mb-4 sm:mb-6" variants={itemVariants}>
          {renderImage()}
        </motion.div>
      )}

      {/* Main content area */}
      <div
        className={`
        flex gap-4 sm:gap-8 items-start
        ${getFlexDirection()}
      `}
      >
        {renderContent()}

        {/* Left/Right positioned images */}
        {(imagePosition === "left" || imagePosition === "right") && (
          <div className="order-first sm:order-none">{renderImage()}</div>
        )}
      </div>

      {/* Bottom positioned image */}
      {imagePosition === "bottom" && (
        <motion.div className="mt-4 sm:mt-6" variants={itemVariants}>
          {renderImage()}
        </motion.div>
      )}
    </motion.div>
  );
};
export default NewsArticle;
