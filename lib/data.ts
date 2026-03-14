// import { PageNotFoundError } from "next/dist/shared/lib/utils";

// export type Project = {
//   id: string;
//   title: string;
//   description: string;
//   tech_stack: string[];
//   github_url: string | null;
//   live_url: string | null;
//   image_url: string | null;
//   order_index: number;
//   created_at: string;
// };

// export type Experience = {
//   id: string;
//   role: string;
//   company: string;
//   duration: string;
//   start_date: string;
//   end_date: string | null;
//   responsibilities: string[];
//   order_index: number;
//   created_at: void;
// };

// export const projects: Project[] = [
//   {
//     id: "1",
//     title: "Hospital Management System",
//     description:
//       "A comprehensive hospital management platform designed to manage patient records, doctor schedules, appointments, billing, and medical reports. The system streamlines hospital operations and improves communication between patients, doctors, and administrative staff.",
//     tech_stack: ["React js", "TypeScript", "Tailwind CSS", "Tanstack"],
//     github_url:  <PageNotFoundError/>,
//     live_url:  <PageNotFoundError/>,
//     image_url:
//       "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80",
//     order_index: 1,
//     created_at: new Date().toISOString(),
//   },
//   {
//     id: "2",
//     title: "Restaurant Management System",
//     description:
//       "A modern restaurant management application that helps manage orders, table reservations, menu items, billing, and staff operations. It provides an intuitive interface for restaurant staff to handle daily operations efficiently.",
//     tech_stack: ["React js", "TypeScript", "Tailwind CSS", "Tanstack"],
//     github_url: "https://github.com",
//     live_url: "https://example.com",
//     image_url:
//       "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
//     order_index: 2,
//     created_at: new Date().toISOString(),
//   },
//   {
//     id: "3",
//     title: "School Management System",
//     description:
//       "A complete school management platform that manages students, teachers, classes, attendance, exams, and academic records. It simplifies administrative tasks and enhances communication between teachers, students, and school management.",
//     tech_stack: ["React js", "Tailwind CSS", "Material UI", "Redux Action"],
//     github_url: "https://github.com",
//     live_url: "https://example.com",
//     image_url:
//       "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80",
//     order_index: 3,
//     created_at: new Date().toISOString(),
//   },
//   {
//     id: "4",
//     title: "Inventory Management System",
//     description:
//       "A smart inventory management system for tracking products, stock levels, sales, and supplier information. It helps businesses monitor inventory in real time and reduces manual stock management errors.",
//     tech_stack: ["React js", "TypeScript", "Tailwind CSS", "Tanstack"],
//     github_url: "https://github.com",
//     live_url: "https://example.com",
//     image_url:
//       "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
//     order_index: 4,
//     created_at: new Date().toISOString(),
//   },
//   {
//     id: "5",
//     title: "Corporate / Business Website",
//     description:
//       "A professional corporate website built with Next.js to showcase company services, projects, and business information. The platform includes responsive design, SEO optimization, service sections, contact forms, and modern UI components to enhance brand presence and user engagement.",
//     tech_stack: ["Next.js", "React js", "TypeScript", "Tailwind CSS"],
//     github_url: "https://github.com",
//     live_url: "https://example.com",
//     image_url:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
//     order_index: 5,
//     created_at: new Date().toISOString(),
//   },
// ];

// export const experiences: Experience[] = [
//   {
//     id: "1",
//     role: "Frontend Developer",
//     company: "webstudio Nepal",
//     duration: "2025 - Present",
//     start_date: "2025-03-01",
//     end_date: null,
//     responsibilities: [
//       "Led the migration of a legacy Monolith application to Micro-frontend architecture",
//       "Mentored junior developers and established code quality standards",
//       "Improved site performance by 40% through code splitting and lazy loading",
//     ],
//     order_index: 1,
//     created_at: new Date().toISOString(),
//   },
// ];

import { PageNotFoundError } from "next/dist/shared/lib/utils";

export type Project = {
  id: string;
  title: string;
  description: string;
  tech_stack: string[];
  github_url: string | null;
  live_url: string | null;
  image_url: string | null;
  order_index: number;
  created_at: string;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  duration: string;
  start_date: string;
  end_date: string | null;
  responsibilities: string[];
  order_index: number;
  created_at: string;
};

// -------------------- Projects --------------------
export const projects: Project[] = [
  {
    id: "1",
    title: "Hospital Management System",
    description:
      "A comprehensive hospital management platform designed to manage patient records, doctor schedules, appointments, billing, and medical reports. The system streamlines hospital operations and improves communication between patients, doctors, and administrative staff.",
    tech_stack: ["React js", "TypeScript", "Tailwind CSS", "Tanstack"],
    github_url: "https://github.com",
    live_url: "https://example.com",
    image_url:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80",
    order_index: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Restaurant Management System",
    description:
      "A modern restaurant management application that helps manage orders, table reservations, menu items, billing, and staff operations. It provides an intuitive interface for restaurant staff to handle daily operations efficiently.",
    tech_stack: ["React js", "TypeScript", "Tailwind CSS", "Tanstack"],
    github_url: "https://github.com",
    live_url: "https://example.com",
    image_url:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    order_index: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "School Management System",
    description:
      "A complete school management platform that manages students, teachers, classes, attendance, exams, and academic records. It simplifies administrative tasks and enhances communication between teachers, students, and school management.",
    tech_stack: ["React js", "Tailwind CSS", "Material UI", "Redux Action"],
    github_url: "https://github.com",
    live_url: "https://example.com",
    image_url:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80",
    order_index: 3,
    created_at: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Inventory Management System",
    description:
      "A smart inventory management system for tracking products, stock levels, sales, and supplier information. It helps businesses monitor inventory in real time and reduces manual stock management errors.",
    tech_stack: ["React js", "TypeScript", "Tailwind CSS", "Tanstack"],
    github_url: "https://github.com",
    live_url: "https://example.com",
    image_url:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    order_index: 4,
    created_at: new Date().toISOString(),
  },
  {
    id: "5",
    title: "Corporate / Business Website",
    description:
      "A professional corporate website built with Next.js to showcase company services, projects, and business information. The platform includes responsive design, SEO optimization, service sections, contact forms, and modern UI components to enhance brand presence and user engagement.",
    tech_stack: ["Next.js", "React js", "TypeScript", "Tailwind CSS"],
    github_url: "https://github.com",
    live_url: "https://example.com",
    image_url:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    order_index: 5,
    created_at: new Date().toISOString(),
  },
];

// -------------------- Experiences --------------------
export const experiences: Experience[] = [
  {
    id: "1",
    role: "Frontend Developer",
    company: "Webstudio Nepal",
    duration: "2025 - Present",
    start_date: "2025-03-01",
    end_date: null,
    responsibilities: [
      "Led the migration of a legacy Monolith application to Micro-frontend architecture",
      "Mentored junior developers and established code quality standards",
      "Improved site performance by 40% through code splitting and lazy loading",
    ],
    order_index: 1,
    created_at: new Date().toISOString(),
  },
];
