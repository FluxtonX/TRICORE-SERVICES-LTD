import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clean1 from "../../assets/expertise/clean.webp";
import corporate1 from "../../assets/expertise/corporate.webp";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Sparkles,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      badge: "SIC REGISTERED & FULLY INSURED",
      title: "Three services.",
      subtitle: "One point of contact.",
      description:
        "Temporary staffing, commercial cleaning, and site support — supplied by Tricore Services across London.",
      image: corporate1,
      icon: ShieldCheck,
      serviceSlug: "/services/temporary-staffing",
    },
    {
      id: 2,
      badge: "SIC 78200 · RECRUITMENT & LABOUR",
      title: "Temporary",
      subtitle: "Staffing Solutions",
      description:
        "Vetted temporary staff for cleaning teams, concierge desks, event cover, and general site labour — for a shift, a season, or an ongoing rota.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&h=900&fit=crop&auto=format&q=80",
      icon: Users,
      serviceSlug: "/services/temporary-staffing",
    },
    {
      id: 3,
      badge: "SIC 81210 · COMMERCIAL SPECIALISTS",
      title: "Commercial",
      subtitle: "Cleaning Services",
      description:
        "General cleaning for offices, communal areas, retail units, and residential blocks, scheduled seamlessly around the people who use the building.",
      image: clean1,
      icon: Sparkles,
      serviceSlug: "/services/commercial-cleaning",
    },
    {
      id: 4,
      badge: "SIC 96090 · AD HOC & GROUNDS",
      title: "Site & Facilities",
      subtitle: "Support Services",
      description:
        "The jobs that sit outside a standard contract — grounds upkeep, ad hoc labour, event set-up, and flexible building support.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&h=900&fit=crop&auto=format&q=80",
      icon: Building2,
      serviceSlug: "/services/site-facilities-support",
    },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
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

  const Icon = slides[currentSlide].icon;

  return (
    <div className="relative w-full bg-[#12181F] text-[#F3EFE4] overflow-hidden">
      {/* Hero Viewport */}
      <div className="relative min-h-[560px] lg:min-h-[640px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            {/* Background Image with Tint & Vignette */}
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#12181F] via-[#12181F]/90 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(169,121,31,0.15),transparent_60%)]" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Content Area */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            {/* Tag / Badge */}
            <motion.div
              key={`badge-${currentSlide}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold tracking-widest uppercase text-[#F3EFE4]/90"
            >
              <Icon className="w-3.5 h-3.5 text-[#A9791F]" />
              <span>{slides[currentSlide].badge}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#F3EFE4] leading-[1.1] tracking-tight mb-6"
            >
              {slides[currentSlide].title}{" "}
              <span className="text-[#A9791F] font-serif font-semibold italic">
                {slides[currentSlide].subtitle}
              </span>
            </motion.h1>

            {/* Subtitle / Lede */}
            <motion.p
              key={`desc-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#F3EFE4]/80 leading-relaxed mb-10 max-w-2xl font-normal"
            >
              {slides[currentSlide].description}
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="mailto:info@tricoreservices.co.uk"
                className="bg-[#A9791F] hover:bg-[#7A5716] text-white px-7 py-3.5 rounded font-semibold text-base transition-colors duration-200 flex items-center gap-2 shadow-lg"
              >
                Request a quote <ArrowRight size={16} />
              </a>
              <a
                href="tel:+442030000000"
                className="bg-transparent hover:bg-white/10 text-[#F3EFE4] border border-[#F3EFE4]/30 px-7 py-3.5 rounded font-semibold text-base transition-colors duration-200 flex items-center gap-2"
              >
                <Phone size={16} className="text-[#A9791F]" />
                Call 020 3000 0000
              </a>
              <Link
                to={slides[currentSlide].serviceSlug}
                className="text-sm text-[#F3EFE4]/70 hover:text-white underline underline-offset-4 ml-2 transition-colors"
              >
                Explore service details →
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-6 right-6 lg:right-12 z-20 flex items-center gap-3">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="text-xs font-mono tracking-wider text-[#F3EFE4]/70">
            {currentSlide + 1} / {slides.length}
          </div>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Trustbar directly below Hero matching Client Spec */}
      <div className="bg-white border-y border-[#DEDACD] text-[#14191F]">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <li className="flex items-center justify-center gap-2 text-sm font-semibold text-[#545B66]">
              <CheckCircle2 size={16} className="text-[#A9791F] flex-shrink-0" />
              <span>London-wide coverage</span>
            </li>
            <li className="flex items-center justify-center gap-2 text-sm font-semibold text-[#545B66]">
              <CheckCircle2 size={16} className="text-[#A9791F] flex-shrink-0" />
              <span>Fully insured</span>
            </li>
            <li className="flex items-center justify-center gap-2 text-sm font-semibold text-[#545B66]">
              <CheckCircle2 size={16} className="text-[#A9791F] flex-shrink-0" />
              <span>Vetted, referenced staff</span>
            </li>
            <li className="flex items-center justify-center gap-2 text-sm font-semibold text-[#545B66]">
              <CheckCircle2 size={16} className="text-[#A9791F] flex-shrink-0" />
              <span>Contracts or one-off jobs</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
