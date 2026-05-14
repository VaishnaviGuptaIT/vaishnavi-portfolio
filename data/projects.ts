export interface Project {
  key: string;
  tag: string;
  title: string;
  icon: string;
  desc: string;
  features: string[];
  stack: string[];
  impact: string;
  live: string | null;
  thumb: string;
  shortDesc: string;
  badges: string[];
}

export const projects: Project[] = [
  {
    key: "camera",
    tag: "E-Commerce · Next.js",
    title: "Camera Trading Marketplace",
    icon: "📷",
    thumb: "project-thumb-1",
    shortDesc:
      "Scalable e-commerce platform for buying and selling filmmaking equipment with real-time features.",
    badges: ["Next.js", "Material UI", "Redux", "Stripe", "Socket.IO"],
    desc: "A scalable e-commerce marketplace for buying and selling used filmmaking and photography equipment. Built with enterprise-grade architecture to handle high traffic, complex product listings, and secure transactions.",
    features: [
      "Dynamic product pages with rich media galleries and seller profiles",
      "Product review & rating workflows with moderation tools",
      "Admin panel for managing listings, orders, and content updates",
      "Stripe payment integration with webhook handling for order fulfillment",
      "Real-time features via Socket.IO (live notifications, chat)",
      "Advanced search and filtering for equipment categories",
      "Seller onboarding and verification flow",
    ],
    stack: ["Next.js", "JavaScript", "Material UI", "Redux", "Socket.IO", "Stripe", "GitHub"],
    impact:
      "Delivered a production-ready marketplace that streamlined the buying/selling of used filmmaking equipment, significantly improving seller onboarding efficiency and buyer engagement through real-time features.",
    live: null,
  },
  {
    key: "hrms",
    tag: "Enterprise · React.js",
    title: "HRMS Platform",
    icon: "👥",
    thumb: "project-thumb-2",
    shortDesc:
      "Enterprise Human Resource Management System with role-based access and automated workflows.",
    badges: ["React.js", "Redux Toolkit", "Bootstrap", "SCSS"],
    desc: "A comprehensive Human Resource Management System built to handle complex enterprise HR workflows with automated processes, role-based access, and real-time data management for mid-to-large organizations.",
    features: [
      "Role-based access control with granular permissions per department",
      "Automated salary calculation engine with configurable components",
      "Multi-level approval hierarchies for leave, expenses, and requests",
      "Performance evaluation modules with 360° feedback cycles",
      "Real-time validations and error handling across all modules",
      "Reusable responsive UI component library built from scratch",
      "REST API integration for seamless backend data operations",
    ],
    stack: ["React.js", "JavaScript", "Redux Toolkit", "Bootstrap", "SCSS", "React Router", "REST APIs"],
    impact:
      "Reduced manual HR processing time significantly by automating core workflows. The reusable component library improved development velocity for subsequent feature additions.",
    live: null,
  },
  {
    key: "fabzure",
    tag: "E-Commerce · Fashion & Jewelry",
    title: "Fabzure",
    icon: "💍",
    thumb: "project-thumb-5",
    shortDesc:
      "Fashion and jewelry e-commerce with dynamic catalogs, interactive filtering, and PHP backend integration.",
    badges: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "PHP"],
    desc: "A premium fashion and jewelry e-commerce platform at fabzure.com. Developed responsive and visually engaging user interfaces specializing in jewelry and fashion products with a focus on delivering an elegant shopping experience across all devices.",
    features: [
      "Dynamic product catalogs with interactive filtering by category, price, and style",
      "Detailed product views with high-quality imagery and smooth zoom interactions",
      "Cross-device pixel-perfect responsive design for mobile, tablet, and desktop",
      "Frontend integration with PHP backend for product management and order workflows",
      "Performance optimization for fast page loads and smooth browsing",
      "Consistent UI/UX patterns across the entire shopping journey",
      "Engaging microinteractions and hover states to enhance discoverability",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "PHP"],
    impact:
      "Delivered a polished and scalable frontend experience that improved customer engagement and enabled seamless browsing of fashion and jewelry collections, contributing to a professional brand presence.",
    live: "https://fabzure.com",
  },
  {
    key: "pristine",
    tag: "E-Commerce · React.js",
    title: "Pristine Gems",
    icon: "💎",
    thumb: "project-thumb-3",
    shortDesc:
      "Jewelry e-commerce platform with dynamic product pages, improved mobile responsiveness, and secure checkout.",
    badges: ["React.js", "Tailwind CSS", "JavaScript"],
    desc: "A responsive and interactive jewelry e-commerce platform built with React.js and Tailwind CSS. Focused on creating an elegant, high-converting shopping experience for customers browsing fine jewelry collections.",
    features: [
      "Dynamic product pages with smooth image transitions and zoom",
      "Enhanced mobile responsiveness across all breakpoints",
      "Secure purchase flows with integrated checkout UX improvements",
      "Performance optimizations including lazy loading and code splitting",
      "Interactive product filtering and search capabilities",
      "Reusable UI components for consistent design across pages",
    ],
    stack: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    impact:
      "Improved mobile experience significantly, leading to higher engagement on handheld devices. Streamlined checkout flow contributed to reduced cart abandonment.",
    live: "https://www.pristinegem.com/",
  },
  {
    key: "machinewale",
    tag: "B2B · Logistics",
    title: "Machinewale Inventory",
    icon: "🏭",
    thumb: "project-thumb-4",
    shortDesc:
      "Responsive interfaces for Bulk-Buy and Inventory modules with reusable components and REST API integration.",
    badges: ["HTML", "Tailwind CSS", "JavaScript", "REST APIs"],
    desc: "A B2B platform for industrial machinery with dedicated Bulk-Buy and Inventory management modules. Designed for operational clarity with complex data tables, multi-step workflows, and real-time inventory tracking.",
    features: [
      "Bulk-Buy module with quantity controls, tiered pricing, and order summary",
      "Inventory management dashboard with real-time stock visibility",
      "Reusable UI component library for forms, tables, and data displays",
      "REST API integration for live product and inventory data",
      "Comprehensive form validation with user-friendly error messaging",
      "Streamlined frontend workflows to reduce operational friction",
      "Responsive design ensuring usability across business contexts",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "REST APIs"],
    impact:
      "Streamlined procurement processes for B2B buyers, reducing order placement time through improved UX. Reusable components accelerated development of new inventory features.",
    live: "https://machinewale.com/",
  },
];
