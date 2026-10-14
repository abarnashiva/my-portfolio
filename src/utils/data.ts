import heroimg from "../assets/hero-portrait.webp";
import introimg from "../assets/portrait.webp";
import skillorea from "../assets/skillorea.png";
import exceed from "../assets/exceed.png";
import praxio from "../assets/praxio.png";

export const profile = {
  name: "Abarna K",
  role: "Software Developer",
  location: "Coimbatore, India",
  tagline:
    "I build fast, accessible React and Next.js products that people enjoy using.",
  summary:
    "3+ years building scalable, SEO-optimized web applications with React.js, Next.js, TypeScript and Tailwind CSS. I work with cross-functional teams to ship secure, accessible and user-centric products, from reusable component libraries to API integration.",
  email: "abarnaabi57@gmail.com",
  phone: "+91 9597772831",
  linkedin: "https://linkedin.com/in/abarna-k-62ba63228",
};

export const stats = [
  { value: "3+", label: "years shipping production web apps" },
  { value: "5+", label: "applications built in parallel" },
  { value: "10+", label: "high-conversion landing pages" },
  { value: "4+", label: "live domains on one component library" },
];

export const experience = [
  {
    period: "Jul 2025 – Present",
    role: "Frontend Developer",
    company: "BNR Cogniitec Private Limited",
    points: [
      "Independently built and launched frontends for live sites including Exceed NetSec (exceedme.com) and Skillorea (skillorea.com).",
      "Created modular UI libraries in React, Next.js and Tailwind that keep 4+ platforms consistent and maintainable.",
      "Integrated REST APIs for real-time data and tuned asset loading to improve cross-browser performance and Core Web Vitals.",
    ],
  },
  {
    period: "Apr 2023 – Jan 2025",
    role: "Software Developer",
    company: "Praxio IT Consulting Private Limited",
    points: [
      "Architected and deployed the official Praxio web app with React, Next.js, TypeScript and Tailwind, delivered continuously on Vercel.",
      "Built micro-services and data pipelines with Node.js, Express, Prisma and PostgreSQL.",
      "Developed TVDS, a real-time vehicle tracking system using Python, Django/Flask and OpenCV for licence plate recognition.",
      "Wrote end-to-end Playwright test suites to protect reliability and performance.",
    ],
  },
  {
    period: "May 2022 – Oct 2022",
    role: "Full Stack Developer Intern",
    company: "Appin Technology Lab",
    points: [
      "Designed responsive UI templates with HTML, CSS, Bootstrap, JavaScript and AngularJS.",
      "Built and maintained full-stack features in Python with Django.",
    ],
  },
];

export const skills = [
  {
    group: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Framer Motion",
      "Swiper.js",
      "AOS",
    ],
  },
  {
    group: "Backend & data",
    items: [
      "Node.js",
      "Express.js",
      "Python",
      "Django",
      "Flask",
      "PostgreSQL",
      "Prisma ORM",
    ],
  },
  {
    group: "Tools & practice",
    items: [
      "Git",
      "GitHub",
      "Playwright",
      "Vercel",
      "Netlify",
      "REST APIs",
      "Accessibility (a11y)",
    ],
  },
];

export const education = {
  degree: "B.Sc. Computer Science",
  school: "Sri Ramakrishna College of Arts and Science, Coimbatore",
  detail: "73% · 2012 – 2015",
  extra:
    "Python Full Stack Development Course, Appin Technology Lab (Feb – Apr 2022)",
};

export const media = {
  heroVideo: "",
  heroImage: heroimg,
  portrait: introimg,
};

export const projects = [
  {
    title: "Skillorea",
    type: "Live production website",
    url: "https://skillorea.com",
    host: "skillorea.com",
    image: skillorea,
    text: "End-to-end frontend for a live platform, tuned for cross-browser performance and Core Web Vitals.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Performance"],
  },
  {
    title: "Exceed NetSec",
    type: "Live production website",
    url: "https://exceedme.com",
    host: "exceedme.com",
    image: exceed,
    text: "Independently engineered and launched the full frontend architecture, built on reusable components with clean API-driven data flow.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "REST APIs"],
  },
  {
    title: "Praxio web application",
    type: "Company web app",
    url: "https://praxio.in/",
    host: "praxio.in",
    image: praxio,
    text: "Architected and deployed the official Praxio web app with continuous delivery on Vercel, backed by Node.js micro-services and PostgreSQL data pipelines.",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Playwright",
    ],
  },
  {
    title: "TVDS",
    type: "Real-time computer vision system",
    url: "",
    host: "",
    image: "",
    text: "Vehicle Tracking & Identification System that reads licence plates and monitors violations in real time.",
    tech: ["Python", "Django / Flask", "OpenCV"],
  },
];
