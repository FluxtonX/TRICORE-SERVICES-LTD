import { useParams } from "react-router-dom";
import SectionHeader from "../componets/commen/SectionHeader.jsx";
import SecuritySection from "../componets/commen/SecuritySection.jsx";
import ModernServicesSection from "../componets/commen/Expertise.jsx";
import NewsSection from "../componets/commen/NewsSection.jsx";
import TestimonialsSection from "../componets/commen/TestimonialsSection.jsx";
import CTASection from "../componets/commen/GetInTouch.jsx";
import ContactForm from "../componets/commen/ContactUs.jsx";
import CareersData from "../utils/CareersData.jsx"; // Import the careers data
const Careers = () => {
  const { slug } = useParams();
  const sectionData = CareersData[slug?.toLowerCase()];

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
          titleSize={sectionData.titleSize}
          breadcrumbItems={sectionData.breadcrumbItems}
          overlayGradient={sectionData.overlayGradient}
          parallax={sectionData.parallax}
        />
      </div>

      <SecuritySection
        title={sectionData.title}
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

export default Careers;
