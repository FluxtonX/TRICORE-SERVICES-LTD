const navData = {
  topBar: {
    phone: "+44 7424223058",
    email: "info@tricoreservices.uk",
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
          name: "About TRICORE SERVICES",
          slug: "about-tricore-services",
          content: "About TRICORE SERVICES page.",
        },
        {
          name: "Corporate Social Responsibility",
          slug: "csr",
          content: "CSR page.",
        },
        {
          name: "Management",
          slug: "management",
          content: "Management page.",
        },
        {
          name: "Accreditation",
          slug: "accreditation",
          content: "Accreditation page.",
        },
        { name: "Location", slug: "location", content: "Location page." },
      ],
    },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Security Guards",
          slug: "security-guards",
          content: "Security Guards service.",
        },
        {
          name: "Mobile Patrols",
          slug: "mobile-patrols",
          content: "Mobile Patrols service.",
        },
        {
          name: "CCTV Monitoring",
          slug: "cctv",
          content: "CCTV Monitoring service.",
        },
        {
          name: "Access Control",
          slug: "access-control",
          content: "Access Control service.",
        },
        {
          name: "Event Security",
          slug: "event-security",
          content: "Event Security service.",
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
