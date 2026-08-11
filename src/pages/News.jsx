import NewsArticle from "../componets/commen/NewsArtical.jsx";
import ModernServicesSection from "../componets/commen/Expertise.jsx";
import NewsSection from "../componets/commen/NewsSection.jsx";
import TestimonialsSection from "../componets/commen/TestimonialsSection.jsx";
import CTASection from "../componets/commen/GetInTouch.jsx";
import ContactForm from "../componets/commen/ContactUs.jsx";

function News() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 space-y-12 ">
      <NewsArticle
        category="Technology"
        categoryColor="text-emerald-600"
        title="TRICORE SERVICES Introduces Online Job Portal"
        date="14 Nov 2023"
        content={[
          "TRICORE SERVICES has introduced its new job portal to streamline and enhance its recruitment process.",
          "This is important for making the recruitment process easier and more efficient for both candidates and our HR team.",
          "The new portal features advanced filtering, real-time notifications, and a user-friendly interface designed to improve the overall experience.",
        ]}
        image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop"
        imageAlt="Job Portal"
        imagePosition="left"
      />
      <ModernServicesSection />
      <NewsSection />
      <TestimonialsSection />
      <CTASection />
      <ContactForm />
    </div>
  );
}

export default News;
