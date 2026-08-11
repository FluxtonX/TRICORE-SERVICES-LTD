import {   Routes, Route } from 'react-router-dom';
import ModernNavbarSystem from './componets/Navbar/Navbar.jsx';
import Home from './pages/Home.jsx';
import ModernFooter from './componets/Footer/Footer.jsx';
import WhoWeArePage from './pages/WhoWeArePage.jsx';
import Services from './pages/Services.jsx';
import Careers from './pages/Careers.jsx';
import Traning from './pages/Traning.jsx';
import News from './pages/News.jsx';
import Contact from './pages/Contact.jsx';
import  ScrollToTop from './componets/commen/ScrollTotop.jsx';
function App() {
  return (
<>
      <ModernNavbarSystem />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are/:slug" element={<WhoWeArePage/>} />
        <Route path="/services/:slug" element={<Services />} />
        <Route path="/careers/:slug" element={<Careers />} />
        <Route path="/Training" element={<Traning />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ModernFooter />
  </>
  );
}

export default App;