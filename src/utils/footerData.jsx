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
      title: "Three Services. One Point of Contact.",
      content: {
        type: "text",
        text: "Temporary staffing, commercial cleaning, and site support — supplied by Tricore Services across London. Fully insured, vetted staff for ongoing contracts or flexible one-off jobs.",
      },
      badge: {
        text: "LONDON-WIDE COVERAGE",
        bgColor: "bg-emerald-700",
      },
    },
    {
      title: "What We Do",
      content: {
        type: "links",
        links: [
          { name: "Temporary Staffing (SIC 78200)", url: "/services/temporary-staffing" },
          { name: "Commercial Cleaning (SIC 81210)", url: "/services/commercial-cleaning" },
          { name: "Site & Facilities Support (SIC 96090)", url: "/services/site-facilities-support" },
        ],
      },
    },
    {
      title: "Who We Are",
      content: {
        type: "links",
        links: [
          { name: "Estate Management", url: "/who-we-are/estate-management" },
          { name: "Concierge Office Management", url: "/who-we-are/concierge-office-management" },
          { name: "Marketing", url: "/who-we-are/marketing" },
          { name: "Hotel Management", url: "/who-we-are/hotel-management" },
        ],
      },
    },
    {
      title: "Useful Links & Contact",
      content: {
        type: "contact",
        links: [
          { name: "Quality & Safety Policy", url: "/quality-policy" },
          { name: "Contact Us", url: "/contact" },
          { name: "Email: info@tricoreservices.co.uk", url: "mailto:info@tricoreservices.co.uk" },
          { name: "Call Us: +44 7424 223058", url: "tel:+447424223058" },
        ],
      },
    },
  ],
  bottomText:
    "Tricore Services Limited · Dagenham, East London · Company no. [add company number]",
};
export default footerData;
