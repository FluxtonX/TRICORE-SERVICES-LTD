import React from "react";
import SectionHeader from "../componets/commen/SectionHeader.jsx";
import { Home } from "lucide-react";
import ModernServicesSection from "../componets/commen/Expertise.jsx";
import NewsSection from "../componets/commen/NewsSection.jsx";
import TestimonialsSection from "../componets/commen/TestimonialsSection.jsx";
import CTASection from "../componets/commen/GetInTouch.jsx";
import ContactForm from "../componets/commen/ContactUs.jsx";

const TrainingData = {
  title: "Training Programs",
  imageSrc:
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop&auto=format&q=80",
  bgColor: "bg-primary",
};
function Traning() {
  const customBreadcrumb = [
    { label: "Home", href: "/", icon: Home },
    { label: "training", href: "/training", active: true },
  ];

  return (
    <div className="space-y-8">
      {/* Default Usage */}

      {/* Custom Usage */}
      <SectionHeader
        title="Training Programs"
        imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop"
        imageAlt="Modern workspace"
        bgColor="bg-blue-600"
        titleSize="text-4xl md:text-5xl lg:text-6xl"
        breadcrumbItems={customBreadcrumb}
        overlayGradient={true}
        parallax={false}
      />
      <ModernServicesSection />
      <NewsSection />
      <TestimonialsSection />
      <CTASection />
      <ContactForm />
    </div>
  );
}

export default Traning;
