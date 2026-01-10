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

export const projects: Project[] = [
    {
        id: "1",
        title: "E-Commerce Platform",
        description: "A full-featured online store built with Next.js, Stripe, and Tailwind CSS. Includes shopping cart, user authentication, and order management.",
        tech_stack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
        github_url: "https://github.com",
        live_url: "https://example.com",
        image_url: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
        order_index: 1,
        created_at: new Date().toISOString(),
    },
    {
        id: "2",
        title: "Task Management App",
        description: "Collaborative task manager with real-time updates, drag-and-drop interface, and team workspaces.",
        tech_stack: ["React", "Node.js", "Socket.io", "MongoDB"],
        github_url: "https://github.com",
        live_url: "https://example.com",
        image_url: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
        order_index: 2,
        created_at: new Date().toISOString(),
    },
    {
        id: "3",
        title: "Weather Dashboard",
        description: "Real-time weather application using OpenWeatherMap API with location detection and 5-day forecast.",
        tech_stack: ["React", "Chart.js", "OpenWeatherMap API"],
        github_url: "https://github.com",
        live_url: "https://example.com",
        image_url: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
        order_index: 3,
        created_at: new Date().toISOString(),
    },
    {
        id: "4",
        title: "Portfolio Website",
        description: "Personal portfolio website with dark mode, animations, and contact form integration.",
        tech_stack: ["Next.js", "Framer Motion", "Shadcn UI"],
        github_url: "https://github.com",
        live_url: "https://example.com",
        image_url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
        order_index: 4,
        created_at: new Date().toISOString(),
    }
];

export const experiences: Experience[] = [
    {
        id: "1",
        role: "Senior Frontend Developer",
        company: "Tech Solutions Inc.",
        duration: "2021 - Present",
        start_date: "2021-01-01",
        end_date: null,
        responsibilities: [
            "Led the migration of a legacy Monolith application to Micro-frontend architecture",
            "Mentored junior developers and established code quality standards",
            "Improved site performance by 40% through code splitting and lazy loading"
        ],
        order_index: 1,
        created_at: new Date().toISOString(),
    },
    {
        id: "2",
        role: "Full Stack Developer",
        company: "Digital Agency",
        duration: "2019 - 2021",
        start_date: "2019-03-01",
        end_date: "2021-01-01",
        responsibilities: [
            "Developed and maintained client websites using React and Node.js",
            "Collaborated with designers to implement responsive UI/UX designs",
            "Integrated third-party APIs for payment processing and shipping"
        ],
        order_index: 2,
        created_at: new Date().toISOString(),
    }
];
