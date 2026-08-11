const footerData = {
  logo: {
    text: "TRICORE",
    highlightText: "SERVICES",
    subtitle: "LTD",
  },
  socialLinks: [
    { name: "Twitter", icon: "X", url: "#", bgColor: "bg-black" },
    { name: "Location", icon: "MapPin", url: "#", bgColor: "bg-primary" },
  ],
  sections: [
    {
      title: "Cyber Essentials Accreditation",
      content: {
        type: "text",
        text: "Cyber Essentials is a Government-backed and industry-supported scheme that helps businesses protect against the growing threat of cyber-attacks. Developed and operated by the National Cyber Security Centre (NCSC), Cyber Essentials is considered the best first step to a more secure network, protecting you from 80% of the most basic cyber security breaches.",
      },
      badge: {
        text: "CYBER ESSENTIALS",
        bgColor: "bg-blue-600",
      },
    },
    {
      title: "What We Do",
      content: {
        type: "links",
        links: [
          { name: "Security Personnel", url: "/security-personnel" },
          { name: "Loss Prevention", url: "/loss-prevention" },
          { name: "Concierge & Reception", url: "/concierge-reception" },
          { name: "Vacant Property", url: "/vacant-property" },
          { name: "Cleaning", url: "/cleaning" },
        ],
      },
    },
    {
      title: "Who We Are",
      content: {
        type: "links",
        links: [
          { name: "About TRICORE SERVICES", url: "/about" },
          { name: "CSR", url: "/csr" },
          { name: "Management", url: "/management" },
          { name: "Location", url: "/location" },
        ],
      },
    },
    {
      title: "Useful Links",
      content: {
        type: "contact",
        links: [
          { name: "Quality Policy", url: "/quality-policy" },
          { name: "Contact Us", url: "/contact" },
          { name: "Mail", url: "mailto:info@tricoreservices.uk" },
          { name: "Call Us : +44 7498506669", url: "tel:+44 7498506669" },
          {
            name: "info@tricoreservices.uk",
            url: "mailto:info@tricoreservices.uk",
          },
        ],
      },
    },
  ],
  bottomText:
    "© 2025 TRICORE SERVICES LTD. All rights reserved. | Privacy Policy | Terms of Service",
};
export default footerData;
