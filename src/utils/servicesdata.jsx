import clean1 from "../assets/expertise/clean.webp";
import corporate1 from "../assets/expertise/corporate.webp";

const ServicesData = {
  "temporary-staffing": {
    title: "Temporary Staffing",
    sicCode: "SIC 78200",
    tagline: "Temporary employment agency activities",
    imageSrc: corporate1,
    bgColor: "bg-gradient-to-r from-stone-900 via-slate-800 to-stone-900",
    description:
      "Vetted temporary staff for cleaning teams, concierge desks, event cover and general site labour — for a shift, a season, or an ongoing rota.",
    highlights: [
      "Short-notice and same-day cover",
      "Referenced and identity-checked staff",
      "Cleaning, concierge and general labour roles",
      "Payroll and compliance handled for you",
    ],
    sections: [
      {
        heading: "Short-Notice and Same-Day Cover",
        content:
          "When unexpected sickness, peak seasons, or emergency requirements arise, TRICORE SERVICES supplies dependable temporary personnel across London at short notice.",
      },
      {
        heading: "Rigorous Vetting & Compliance",
        content:
          "All staff undergo thorough identity verification, right-to-work screening, and reference checks. We handle all payroll, contracts, and regulatory compliance so you can focus on running your business.",
      },
      {
        heading: "Multi-Role Site Capabilities",
        content:
          "Whether you need front-of-house concierge professionals, reliable cleaning operatives, event stewards, or general site labourers, our workforce arrives briefed and ready to integrate into your team.",
      },
    ],
  },
  "commercial-cleaning": {
    title: "Commercial Cleaning",
    sicCode: "SIC 81210",
    tagline: "General cleaning of buildings",
    imageSrc: clean1,
    bgColor: "bg-gradient-to-r from-stone-900 via-slate-800 to-stone-900",
    description:
      "General cleaning for offices, communal areas, retail units and residential blocks, scheduled around the people who use the building.",
    highlights: [
      "Daily, weekly or one-off cleans",
      "Offices, lobbies, stairwells, communal areas",
      "Consumables and waste management",
      "Site-specific checklists and sign-off",
    ],
    sections: [
      {
        heading: "Flexible Daily, Weekly or One-Off Cleans",
        content:
          "We structure our cleaning schedules around the flow of your building — offering early-morning, evening, or weekend services to minimize disruption to tenants and employees.",
      },
      {
        heading: "Offices, Lobbies & Communal Areas",
        content:
          "From high-traffic residential hallways and stairwells to corporate boardrooms and retail storefronts, our teams deliver pristine cleanliness with hospital-grade attention to detail.",
      },
      {
        heading: "Consumables & Waste Management",
        content:
          "We manage routine restocking of washroom consumables, hygiene replenishment, and site-compliant waste disposal, ensuring clear checklists and formal supervisor sign-offs.",
      },
    ],
  },
  "site-facilities-support": {
    title: "Site & Facilities Support",
    sicCode: "SIC 96090",
    tagline: "Other service activities not elsewhere classified",
    imageSrc:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=800&fit=crop&auto=format&q=80",
    bgColor: "bg-gradient-to-r from-stone-900 via-slate-800 to-stone-900",
    description:
      "The jobs that sit outside a standard contract — grounds upkeep, ad hoc labour, event set-up and general building support.",
    highlights: [
      "Ad hoc labour and site support",
      "Grounds and communal area upkeep",
      "Event set-up and turnaround",
      "Flexible, one-off jobs",
    ],
    sections: [
      {
        heading: "Ad Hoc Labour & Site Assistance",
        content:
          "For projects that fall outside traditional maintenance scopes, we supply capable hands for heavy lifting, internal relocations, space clearances, and reactive task management.",
      },
      {
        heading: "Grounds & Communal Upkeep",
        content:
          "Maintain pristine kerb appeal and safe communal environments with regular litter sweeps, pressure washing, exterior tidying, and seasonal grounds maintenance.",
      },
      {
        heading: "Event Set-up & Fast Turnarounds",
        content:
          "Hosting an internal company gathering, commercial exhibition, or tenant event? We handle room reconfiguration, furniture staging, and post-event turnaround swiftly.",
      },
    ],
  },
};

// Backwards compatibility aliases
ServicesData["security-guards"] = ServicesData["temporary-staffing"];
ServicesData["mobile-patrols"] = ServicesData["site-facilities-support"];
ServicesData["cctv"] = ServicesData["site-facilities-support"];
ServicesData["access-control"] = ServicesData["site-facilities-support"];
ServicesData["event-security"] = ServicesData["temporary-staffing"];

export default ServicesData;
