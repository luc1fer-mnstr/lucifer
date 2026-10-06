// Local portfolio content used when no API URL is configured or the API is
// temporarily unavailable. Keep this data in the same shape as the API payload.
import localPortrait from "../assets/profile.png";
import aboutPhoto from "../assets/about-photo.webp";
import contactPhoto from "../assets/contact-photo.webp";
import brandLogo from "../assets/logo.jfif";
import cvFile from "../assets/Wai_Yan_Min_CV.pdf";

export const heroData = {
  name: "Lucifer",
  title: "Frontend Developer & IT Specialist",
  description:
    "I build modern, responsive web applications and support technology in real-world environments. I enjoy turning ideas into simple, useful, and user-friendly digital experiences.",
  cvLink: cvFile,
  logoUrl: brandLogo,
  photoUrl: localPortrait,
  socials: {
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
  },
};

export const aboutData = {
  heading: "A little about me",
  photoUrl: aboutPhoto,
  paragraphs: [
    "I am an IT student and aspiring web developer from Myanmar with a strong interest in technology, education, and community development.",
    "My journey into technology started with a curiosity about how websites and digital systems work, and over time, that curiosity developed into practical experience in web development, IT support, networking, and technology education.",
    "I am currently studying for a Bachelor of Science in Information Technology at Phaung Daw Oo International University while also pursuing a Bachelor of Arts in English at Yadanarbon University and a Diploma in Social Science through the Pre-College Program (PCP). Alongside my academic studies, I am continuing to develop my practical skills through a Full-Stack Web Development course.",
    "My formal education and professional learning have developed gradually through different stages. I completed Myanmar Grade 10 in 2019 and later studied for a Diploma in IT from 2022 to 2023. My foundation in web development began through the Web Development Foundation program at Data Land Technology, where I learned HTML, CSS, and JavaScript and developed my interest in building websites. I later explored different technologies and frameworks, including React and Vue.js, and continued developing my skills through practical projects and online learning. I also attended the AppCube Developers Bootcamp, where I worked with a team to develop a prototype inventory-management application using a low-code approach. This experience helped me understand not only the technical side of development but also the importance of teamwork, problem-solving, and building something useful for real users.",
    "My professional experience has mainly been in IT and web development. At Phaung Daw Oo International University, I have worked in different technology-related roles, including frontend web development and IT teaching. I have also been involved in installing and maintaining the school's Wi-Fi network and providing technical support. My responsibilities have included troubleshooting computer hardware and software problems, maintaining IT equipment and systems, supporting staff and students with technology-related issues, and developing websites. These experiences have given me practical knowledge that goes beyond programming and helped me understand how technology is used in real working environments.",
    "My main technical strengths are frontend web development and practical IT support. I have experience with HTML, CSS, JavaScript, React.js, Vue.js, TypeScript, Tailwind CSS, Git, and GitHub. I am also developing my knowledge of backend development with Node.js, Express.js, MySQL, and REST APIs. I have worked on projects such as an inventory-management application, a personal developer portfolio, and a furniture backend API. In addition to software development, I have practical experience with computer troubleshooting, hardware and software maintenance, Wi-Fi installation, networking, and general technical support. I am currently continuing to strengthen my full-stack development skills so that I can build complete and useful digital applications rather than focusing only on the frontend.",
    "Teaching and volunteering have also played an important role in my development. From 2019 to 2020, I volunteered for approximately one year at Thone Htet School in Yangon, where I taught English and Mathematics. Later, through my work in IT, I became involved in teaching technology and supporting students with digital tools. These experiences helped me develop patience, responsibility, communication skills, and the ability to explain technical ideas in a simple way. They also taught me that technology is most valuable when it can be understood and used by people, not simply when it is technically advanced.",
    "Beyond technical skills, I have developed a range of soft skills through work, volunteering, study, teamwork, and leadership. I value problem-solving, responsibility, adaptability, teamwork, communication, and continuous learning. I have also taken on a leadership role as the president of my PCP diploma class. This experience has helped me become more comfortable working with groups and has challenged me to listen to different opinions, respect individual choices, and create an environment where people feel comfortable participating. Leadership has also helped me recognize that being a good leader is not about forcing people to follow, but about listening, communicating, and giving people the freedom to contribute.",
    "My interests are not limited to technology. I am also strongly interested in environmental issues and community development. I believe that IT and the environment are two important areas for my future. I am interested in how technology can be used to understand problems, communicate ideas, and develop practical solutions for communities. I have participated in activities related to school gardens and Bokashi fertilizer, and I have explored community-based environmental projects such as reducing plastic waste around natural areas and preventing plastic waste from entering streams and rivers. My Social Science studies have also helped me think more deeply about communities, people, participation, and social issues.",
    "I am a continuous learner who believes that skills are developed through practice, experience, and reflection. I am currently working to improve my English communication skills, with the long-term goal of reaching an IELTS Band 7–7.5 level and becoming more confident in international academic and professional environments. My current direction is to continue growing in IT and web development, take on more challenging projects, strengthen my full-stack development abilities, and use technology in practical ways that can benefit people and communities. Rather than limiting myself to one fixed career path, I want to keep learning, gaining experience, and discovering where my technical skills, education, and interests can create the greatest impact.",
  ],
};

export const skillsData = [
  {
    name: "React",
    level: "Intermediate",
  },
  {
    name: "TypeScript",
    level: "Intermediate",
  },
  {
    name: "JavaScript",
    level: "Intermediate",
  },
  {
    name: "HTML & CSS",
    level: "Intermediate",
  },
  {
    name: "Tailwind CSS",
    level: "Intermediate",
  },
  {
    name: "Git & GitHub",
    level: "Intermediate",
  },
  {
    name: "Node.js",
    level: "Beginner",
  },
  {
    name: "Express.js",
    level: "Beginner",
  },
  {
    name: "MySQL",
    level: "Beginner",
  },
  {
    name: "Networking",
    level: "Intermediate",
  },
];

export const educationData = [
  {
    degree: "Bachelor of Science in Information Technology – 3rd Year",
    institution: "Phaung Daw Oo International University",
    year: "2025-current",
    description:
      "Studying information technology with a focus on software development, information systems, computer networking, and practical IT skills.",
  },
  {
    degree: "Bachelor of Arts in English – 2nd Year",
    institution: "Yadanarbon University, Mandalay",
    year: "2025-current",
    description:
      "Developing academic English, communication, critical thinking, and language skills through the study of English literature and language.",
  },
  {
    degree: "Diploma in Social Science",
    institution: "Pre-College Program (PCP)",
    year: "2026-2027",
    description:
      "Studying social science, community development, leadership, peace and conflict, and social research through academic and practical learning.",
  },
  {
    degree: "Full-Stack Web Development",
    institution: "Codecafe Lab",
    year: "2026-current",
    description:
      "Developing practical skills in modern frontend and backend development using React, TypeScript, Node.js, Express, databases, REST APIs, testing, and deployment.",
  },
  {
    degree: "Diploma in Information Technology",
    institution: "Phaung Daw Oo International University",
    year: "2022-2023",
    description:
      "Built a foundation in information technology, including computer systems, software development, databases, networking, and essential IT concepts.",
  },
  {
    degree: "Web Development Foundation",
    institution: "Dataland Technology",
    year: "2021-2023",
    description:
      "Built a foundation in web development through HTML, CSS, and JavaScript, followed by further exploration of modern frontend technologies and web application development.",
  },
  {
    degree: "Myanmar High School Grade 10",
    institution: "Phaung Daw Oo Monastic Education High School",
    year: "2018-2019",
    description:
      "Completed high school education with a broad foundation in academic subjects and general knowledge.",
  },
];

export const projectsData = [
  {
    slug: "inventory-management-app",
    title: "Inventory Management App",
    description:
      "A simple inventory management application designed for small businesses to manage products, purchases, sales, stock levels, and daily or monthly summaries.",
    technologies: ["React", "TypeScript", "SheetDB", "Tailwind CSS"],
    link: "",
    github: "",
  },
  {
    slug: "personal-developer-portfolio",
    title: "Personal Developer Portfolio",
    description:
      "A modern responsive portfolio website showcasing my skills, projects, experience, and background as a frontend developer and IT specialist.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "",
    github: "",
  },
  {
    slug: "furniture-backend-api",
    title: "Furniture Backend API",
    description:
      "A RESTful backend project built to practice server-side development, API design, middleware, testing, and database integration.",
    technologies: ["Node.js", "Express.js", "TypeScript", "Jest", "Supertest"],
    link: "",
    github: "",
  },
];

export const servicesData = [
  {
    title: "Web Development",
    description:
      "Building responsive and user-friendly websites and web applications using modern frontend technologies.",
  },
  {
    title: "Frontend Development",
    description:
      "Creating clean, responsive interfaces with React, TypeScript, JavaScript, and Tailwind CSS.",
  },
  {
    title: "IT Support",
    description:
      "Troubleshooting computer hardware and software issues and providing practical technical support.",
  },
  {
    title: "Network Support",
    description:
      "Installing, maintaining, and troubleshooting WiFi and local network environments.",
  },
];

export const testimonialsData = [
  {
    image: localPortrait,
    name: "Myo Yar Zar",
    role: "Head of ICT Department",
    text: "Wai Yan Min has consistently supported our ICT team with computer troubleshooting, hardware and software maintenance, and technical support for staff and students.",
  },
];

export const contactData = {
  photoUrl: contactPhoto,
  email: "waieainmin@gmail.com",
  phone: "+959 797616720",
  telegram: "@luc1mnstr",
  location: "Mandalay, Myanmar",
};

export const localPortfolioData = {
  heroData,
  aboutData,
  skillsData,
  educationData,
  projectsData,
  servicesData,
  testimonialsData,
  contactData,
};

export const createNavLinks = (data) => [
  { label: "Home", href: "/" },
  ...(data.aboutData.paragraphs.length
    ? [{ label: "About", href: "/about" }]
    : []),
  ...(data.skillsData.length ? [{ label: "Skills", href: "/skills" }] : []),
  ...(data.projectsData.length
    ? [{ label: "Work & Impact", href: "/project" }]
    : []),
  { label: "Memories", href: "/memories" },
  ...(data.educationData.length
    ? [{ label: "Education", href: "/education" }]
    : []),
  ...(data.servicesData.length
    ? [{ label: "Services", href: "/services" }]
    : []),
  ...(data.testimonialsData.length
    ? [{ label: "Testimonials", href: "/testimonials" }]
    : []),
  { label: "Contact", href: "/contact" },
];
