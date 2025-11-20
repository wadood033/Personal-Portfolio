import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Wadood",
  initials: "AW",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  description:
    "Full-Stack Developer building scalable apps and empowering others along the way.",
  summary:
"In 2022, I began my journey in tech by pursuing a Bachelor's degree in Information Technology (BSIT) at the University of Gujrat (2022–2026). Since then, I’ve been passionate about building and scaling real-world projects. Along the way, I’ve worked on full-stack applications, explored the startup world,  and participated in online tech communities to sharpen my skills. I’m always seeking opportunities to learn, build, and connect with like-minded developers.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Postgres",
    "MySQL",
    "ShadcnUI",
    "MagicUI",
    "TailwindCSS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "wadooddev2004@gmail.com",
    tel: "+923080941366",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/wadood033",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abdul-wadood-6b957336b/",
        icon: Icons.linkedin,

        navbar: true,
      },
     
    },
  },

  work: [
    {
      company: "NexGen Squad",
      badges: [],
      location: "On-Site",
      title: "Full Stack Developer Intern",
      logoUrl: "/ngs.jpeg",
      start: "July 2025",
      end: "August 2025",
     description: "Worked as a Full Stack Developer Intern, building scalable web applications using Next.js, React, and Tailwind CSS with shadcn/ui for modern UI components. Developed RESTful APIs with Node.js and Express.js, and implemented secure authentication and backend logic. Integrated both MongoDB and PostgreSQL for handling structured and unstructured data efficiently. Collaborated on real-time features, optimized database queries, and ensured responsive design across devices.",

    },
      {
      company: "NexGen Squad",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer ",
      logoUrl: "/ngs.jpeg",
      start: "September 2025",
      description: null,
      end: null,

    },

  ],
  education: [
    {
      school: "Superior Group Of Colleges",
      degree: "ICS",
      logoUrl: "/superior.png",
      start: "2020",
      end: "2022",
    },
       {
      school: "University Of Gujrat",
      degree: "Bachelor In Information Technology",
      logoUrl: "/uog.png",
      start: "2022",
      end: "2026",
    },
   
  ],
  projects: [
    {
      title: "Bazaar-EcommerceStore",
      href: "https://bazaarstore.netlify.app",
      dates: "March 2025 - Feb 2025",
      active: true,
      description:
"Bazaar is a fully functional, modern eCommerce frontend application built using React.js, designed for speed, responsiveness, and rich user experience. It integrates the best frontend technologies to deliver a seamless online shopping interface."

,
      technologies: [
        "React",
        "Framer-Motion",
        "TailwindCSS",
        "Context-API"
        
      ],
      links: [
        {
          type: "Website",
          href: "https://bazaarstore.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/bazaar.png",
      video:
        "",
    },
    {
      title: "Shahzad's Portfolio",
      href: "https://shahzadgamedev.netlify.app/",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "Built a modern game developer portfolio using React.js, TailwindCSS, and Gsap to showcase interactive 2D/3D projects. Integrated Node.js and Nodemailer.js for a working contact form. Designed responsive, animated UI to highlight development skills and tools.",
      technologies: [
        "React",
        "TailwindCSS",
        "Nodemailer.js",
        "Node.js",
        "Gsap",
      
      ],
      links: [
        {
          type: "Website",
          href: "https://shahzadgamedev.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
       
      ],
      image: "/shahzad.png",
      video: "",
    },
        {
      title: "Jet Play Sports",
      href: "https://jetplaysports.netlify.app/",
      dates: "Dec 2024 - Jan 2025",
      active: true,
      description:
        "Designed and built Jet Play Sports, a dynamic business showcase website using Next.js, Swiper.js, and TailwindCSS.",

      technologies: [
        "Next.js",
        "Swiper.js",
        "TailwindCSS",
      
      ],
      links: [
        {
          type: "Website",
          href: "https://jetplaysports.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
     
      ],
      image: "/jetplay.png",
      video: "",
    },
   
{
  title: "Wise Guy Buys Land",
  href: "https://www.wiseguybuysland.com/",
  dates: "October 2025 - November 2025",
  active: true,
  description:
    "Built a modern real estate landing site using Next.js and TailwindCSS with an n8n automation workflow. When the contact form is submitted, an email is automatically sent and the data is saved directly into an Excel sheet.",

  technologies: [
    "Next.js",
    "TailwindCSS",
    "n8n Workflow Automation",
    "API Integration",
    "Excel Automation"
  ],
  links: [
     {
          type: "Website",
          href: "https://www.wiseguybuysland.com/",
          icon: <Icons.globe className="size-3" />,
        },

  ],
  image: "/wiseguybuysland.png",
  video: "",
},

  ],
   
  

} as const;
