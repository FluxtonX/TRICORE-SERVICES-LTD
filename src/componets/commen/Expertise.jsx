import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Sparkles, Building2, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import clean1 from "../../assets/expertise/clean.webp";
import corporate1 from "../../assets/expertise/corporate.webp";

const ModernServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services = [
    {
      id: "temporary-staffing",
      sic: "SIC 78200",
      title: "Temporary staffing",
      icon: Users,
      ringSvg: (
        <svg className="w-12 h-12 text-brass" viewBox="0 0 46 46">
          <circle cx="23" cy="23" r="20" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="23" cy="23" r="9" fill="currentColor" />
        </svg>
      ),
      description:
        "Vetted temporary staff for cleaning teams, concierge desks, event cover and general site labour — for a shift, a season, or an ongoing rota.",
      features: [
        "Short-notice and same-day cover",
        "Referenced and identity-checked staff",
        "Cleaning, concierge and general labour roles",
        "Payroll and compliance handled for you",
      ],
      ctaText: "Ask about staffing →",
      emailSubject: "Enquiry: Temporary staffing",
      image: corporate1,
    },
    {
      id: "commercial-cleaning",
      sic: "SIC 81210",
      title: "Commercial cleaning",
      icon: Sparkles,
      ringSvg: (
        <svg className="w-12 h-12 text-brass" viewBox="0 0 46 46">
          <circle cx="15" cy="23" r="12" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="31" cy="23" r="12" fill="none" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      ),
      description:
        "General cleaning for offices, communal areas, retail units and residential blocks, scheduled around the people who use the building.",
      features: [
        "Daily, weekly or one-off cleans",
        "Offices, lobbies, stairwells, communal areas",
        "Consumables and waste management",
        "Site-specific checklists and sign-off",
      ],
      ctaText: "Ask about cleaning →",
      emailSubject: "Enquiry: Commercial cleaning",
      image: clean1,
    },
    {
      id: "site-facilities-support",
      sic: "SIC 96090",
      title: "Site & facilities support",
      icon: Building2,
      ringSvg: (
        <svg className="w-12 h-12 text-brass" viewBox="0 0 46 46">
          <path d="M23 4 L40 14 L40 32 L23 42 L6 32 L6 14 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      ),
      description:
        "The jobs that sit outside a standard contract — grounds upkeep, ad hoc labour, event set-up and general building support.",
      features: [
        "Ad hoc labour and site support",
        "Grounds and communal area upkeep",
        "Event set-up and turnaround",
        "Flexible, one-off jobs",
      ],
      ctaText: "Ask about site support →",
      emailSubject: "Enquiry: Site & facilities support",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop&auto=format&q=80",
    },
  ];

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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="py-24 bg-[#F6F4EE] border-b border-[#DEDACD]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header matching Client Spec */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-[#A9791F] font-bold text-sm tracking-widest uppercase mb-3 inline-block">
            What we do
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#14191F] tracking-tight leading-tight">
            One supplier, three jobs done properly
          </h2>
          <p className="text-[#545B66] text-lg mt-4 max-w-2xl mx-auto">
            Temporary staffing, commercial cleaning, and site support — supplied by Tricore Services across London.
          </p>
        </motion.div>

        {/* 3 Core Services Grid */}
        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white border border-[#DEDACD] rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Top Badge & Geometric Icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-[#F6F4EE] rounded-xl border border-[#DEDACD]/60">
                    {service.ringSvg}
                  </div>
                  <span className="text-xs font-bold text-[#545B66] bg-stone-100 px-3 py-1.5 rounded-full border border-stone-200">
                    {service.sic}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-[#14191F] mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-[#545B66] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-8 border-t border-[#DEDACD]/60 pt-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#14191F]">
                      <span className="w-2 h-2 rounded-full bg-[#A9791F] mt-1.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-[#DEDACD]/40 flex flex-col gap-2">
                <a
                  href={`mailto:info@tricoreservices.co.uk?subject=${encodeURIComponent(service.emailSubject)}`}
                  className="inline-flex items-center text-sm font-bold text-[#A9791F] hover:text-[#7A5716] transition-colors gap-1.5 group"
                >
                  {service.ctaText}
                </a>
                <Link
                  to={`/services/${service.id}`}
                  className="text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors inline-flex items-center gap-1"
                >
                  View full service overview <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModernServicesSection;
