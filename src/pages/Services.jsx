import { useParams } from "react-router-dom";
import SectionHeader from "../componets/commen/SectionHeader.jsx";
import SecuritySection from "../componets/commen/SecuritySection.jsx";
import ModernServicesSection from "../componets/commen/Expertise.jsx";
import NewsSection from "../componets/commen/NewsSection.jsx";
import TestimonialsSection from "../componets/commen/TestimonialsSection.jsx";
import CTASection from "../componets/commen/GetInTouch.jsx";
import ContactForm from "../componets/commen/ContactUs.jsx";
import ServicesData from "../utils/servicesdata.jsx"; // Import the services da


const Services = () => {
  const { slug } = useParams();
  const sectionData = ServicesData[slug?.toLowerCase()];

  if (!sectionData) {
    return <p className="p-4">Page not found.</p>;
  }

  return (
    <>
      <div className="p-0 m-0">
        <SectionHeader
          title={sectionData.title}
          imageSrc={sectionData.imageSrc}
          bgColor={sectionData.bgColor}
        />
      </div>

      {/* Service Details Section */}
      <SecuritySection
        title={sectionData.title}
        sicCode={sectionData.sicCode}
        tagline={sectionData.tagline}
        highlights={sectionData.highlights}
        sections={sectionData.sections}
      />
      <ModernServicesSection />
      <NewsSection />
      <TestimonialsSection />
      <CTASection />
      <ContactForm />
    </>
  );
};

export default Services;
