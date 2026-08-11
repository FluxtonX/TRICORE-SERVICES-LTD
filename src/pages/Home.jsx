import React from 'react'

import HeroCarousel from '../componets/carousel/Herocarousel.jsx';
import ModernServicesSection from '../componets/commen/Expertise.jsx';
import NewsSection from '../componets/commen/NewsSection.jsx';
import TestimonialsSection from '../componets/commen/TestimonialsSection.jsx';
import CTASection from '../componets/commen/GetInTouch.jsx';
import ContactForm from '../componets/commen/ContactUs.jsx';


function Home() {
  return (<>
   <HeroCarousel />
   <ModernServicesSection/>
   <NewsSection/>
   <TestimonialsSection/>
    <CTASection/>
    <ContactForm/>
   </>
  )
}

export default Home
