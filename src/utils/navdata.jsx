const navData = {
  topBar: {
    phone: "+44 7424 223058",
    email: "info@tricoreservices.co.uk",
  },
  logo: {
    text: "TRICORE",
    highlightText: "SERVICES",
    subtitle: "LTD",
  },
  mainNav: [
    { name: "Home", href: "/", hasDropdown: false },
    {
      name: "Who We Are",
      href: "/who-we-are",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Estate Management",
          slug: "estate-management",
          content: "Estate Management page.",
        },
        {
          name: "Concierge Office Management",
          slug: "concierge-office-management",
          content: "Concierge Office Management page.",
        },
        {
          name: "Marketing",
          slug: "marketing",
          content: "Marketing page.",
        },
        {
          name: "Hotel Management",
          slug: "hotel-management",
          content: "Hotel Management page.",
        },
      ],
    },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Temporary Staffing",
          slug: "temporary-staffing",
          content: "Vetted temporary staff for cleaning teams, concierge desks, and site labour.",
        },
        {
          name: "Commercial Cleaning",
          slug: "commercial-cleaning",
          content: "General cleaning for offices, communal areas, retail units, and residential blocks.",
        },
        {
          name: "Site & Facilities Support",
          slug: "site-facilities-support",
          content: "Grounds upkeep, ad hoc labour, event set-up, and general building support.",
        },
      ],
    },
    {
      name: "Careers",
      href: "/careers",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Current Openings",
          slug: "current-openings",
          content: "Current job openings.",
        },
        { name: "Apply Online", slug: "apply", content: "Apply Online." },
        {
          name: "Training Programs",
          slug: "training-programs",
          content: "Training programs info.",
        },
        { name: "Benefits", slug: "benefits", content: "Job benefits." },
      ],
    },
    { name: "Training", href: "/training", hasDropdown: false },
    { name: "News", href: "/news", hasDropdown: false },
    { name: "Contact", href: "/contact", hasDropdown: false, isButton: true },
  ],
};
export default navData;
