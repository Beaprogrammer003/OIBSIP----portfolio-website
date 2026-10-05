// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: "Ashutosh Jha",
  role: "Software Developer",
  location: "Kolkata, West Bengal, India",
  email: "ashutoshjha466@gmail.com",
  phone: "+91 9330317469",
  github: "https://github.com/Beaprogrammer003",
  linkedin: "https://www.linkedin.com/in/ashutosh-jha-7b4900225/",
  resume: "/Ashutosh-Jha-Resume.pdf",
  photo: "/me.jpg",
  tagline:
    "I build production web platforms and mobile apps — from compliance dashboards to employee apps used every day.",
  about: [
    "I'm a software developer from Kolkata with a B.Tech in Information Technology from Future Institute of Engineering and Management (8.95 GPA).",
    "I've worked on real products end to end: the Capsisure compliance web platform and the Capsitech mobile app. I care about clean UI, fast pages and code that's easy for the next developer to pick up.",
    "Outside of code you'll find me playing cricket or organising events.",
  ],
};

export const stats = [
  { value: "2", label: "Production products shipped" },
  { value: "8+", label: "Projects built" },
  { value: "8.95", label: "B.Tech GPA" },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  highlights?: string[];
  tech: string[];
  live?: string;
  code?: string;
  featured?: boolean;
  accent: string; // tailwind gradient classes for the card artwork
  icon: string; // short glyph shown on the card artwork
};

export const projects: Project[] = [
  {
    title: "Capsisure",
    category: "Web Platform · Capsitech",
    description:
      "A full compliance web application for running AML (anti-money laundering) and KYC (know-your-customer) checks, ID verification and client onboarding from one dashboard.",
    highlights: [
      "Built the full web application, from login and authentication through to the dashboards",
      "Client onboarding, AML/KYC screening and verification workflows",
      "Responsive, reusable component-based UI connected to REST APIs",
    ],
    tech: ["React", "TypeScript", "REST APIs", "Responsive UI"],
    live: "https://capsisure.capsitech.it/login",
    featured: true,
    accent: "from-sky-500 via-blue-600 to-indigo-700",
    icon: "CS",
  },
  {
    title: "Capsitech Mobile App",
    category: "Mobile App · Capsitech",
    description:
      "An all-in-one employee app for managing everyday work: attendance, leave requests, payroll and team activity, all on your phone.",
    highlights: [
      "Attendance tracking, leave management and payslips",
      "Clean, mobile-first screens designed for daily use",
      "Published on the App Store and Google Play",
    ],
    tech: ["Mobile", "React Native", "REST APIs"],
    featured: true,
    accent: "from-fuchsia-500 via-purple-600 to-violet-700",
    icon: "CT",
  },
  {
    title: "Virtual Health Care",
    category: "Web · Team project",
    description:
      "A healthcare portal that connects people with clinical services quickly and reliably. Built by a team of four.",
    tech: ["HTML", "CSS"],
    live: "https://beaprogrammer003.github.io/Virtual-Health-Care/",
    code: "https://github.com/Beaprogrammer003/Virtual-Health-Care",
    accent: "from-emerald-500 to-teal-700",
    icon: "VH",
  },
  {
    title: "Cricket Landing Page",
    category: "Web",
    description:
      "A landing page for a cricket website with bold visuals and simple navigation.",
    tech: ["HTML", "CSS"],
    live: "https://beaprogrammer003.github.io/OIBSIP---Landing--Page/",
    code: "https://github.com/Beaprogrammer003/OIBSIP---Landing--Page",
    accent: "from-orange-500 to-rose-600",
    icon: "LP",
  },
  {
    title: "Temperature Converter",
    category: "Web App",
    description:
      "A responsive web app that converts temperatures between Celsius and Fahrenheit.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://beaprogrammer003.github.io/OISBSIP---Temperature-Converter-Web-App/",
    code: "https://github.com/Beaprogrammer003/OISBSIP---Temperature-Converter-Web-App",
    accent: "from-cyan-500 to-blue-700",
    icon: "°C",
  },
  {
    title: "Number Guessing Game",
    category: "Java",
    description:
      "A Java console game where you guess a random number. It has attempt limits, multiple rounds and scoring, with more points for fewer tries.",
    tech: ["Java"],
    code: "https://github.com/Beaprogrammer003/CBTCIP--NUMBER-GUESSING-NAME",
    accent: "from-amber-500 to-orange-700",
    icon: "#?",
  },
];

export const experience = [
  {
    company: "Capsitech",
    role: "Software Developer",
    period: "Present",
    points: [
      "Built the Capsisure compliance web platform end to end",
      "Developed the Capsitech employee mobile app (attendance, leave, payroll)",
      "Worked with product and backend teams to ship features to production",
    ],
  },
  {
    company: "CipherByte Technologies",
    role: "Web Development Intern",
    period: "Jul 2023",
    points: ["Built web and Java projects, including the Number Guessing Game"],
  },
  {
    company: "Oasis Infobyte",
    role: "Web Development Intern",
    period: "2023",
    points: ["Built this portfolio, a landing page and a temperature converter app"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
  { group: "Mobile", items: ["React Native", "Mobile UI"] },
  { group: "Backend & Data", items: ["Java", "SQL", "REST APIs"] },
  { group: "Tools", items: ["Git", "GitHub", "VS Code", "Figma"] },
];

export const education = [
  {
    title: "B.Tech, Information Technology",
    place: "Future Institute of Engineering and Management, Kolkata",
    period: "2020 – 2024",
    note: "8.95 GPA",
  },
  { title: "Class 12", place: "Sudhir Memorial Institute", period: "2018 – 2019", note: "63.4%" },
  { title: "Class 10", place: "Sanskar Bharti Global School", period: "2016 – 2017", note: "95%" },
];

export const certificates = ["HackerRank: Java (Basic)", "HackerRank: Problem Solving (Basic)"];
