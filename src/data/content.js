export const portfolioData = {
  personal: {
    name: "VUNNAM KUSHAL",
    role: "Full-Stack Developer",
    subtitle: "Building modern, interactive and intelligent digital experiences.",
    email: "kushalnxtwave@gmail.com",
    github: "https://github.com/kushalvunnam",
    linkedin: "https://linkedin.com/in/kushalvunnam",
    phone: "+91 8008092742",
    location: "Hyderabad, India"
  },
  about: `I am a passionate Full-Stack Developer focused on building immersive, scalable web applications. I thrive at the intersection of modern UI engineering and robust backend architecture.`,
  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap", "Responsive Design"],
    backend: ["Node.js", "Express.js"],
    database: ["SQL", "MongoDB"],
    programming: ["Python"],
    tools: ["Git", "GitHub", "VS Code"]
  },
  projects: [
    {
      id: "erp",
      title: "ERP Management System",
      category: "Full-Stack Application",
      description: "A centralized web application to manage business operations. Includes modules for branches, users, products, and customers with role-based access.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      features: [
        "Admin dashboard",
        "Branch management",
        "CRUD operations",
        "REST APIs"
      ],
      liveUrl: "",
      githubUrl: "https://github.com/kushalvunnam/mvss-erp-backend",
      status: "available"
    },
    {
      id: "mvss",
      title: "MVSS Management System",
      category: "Business Dashboard",
      description: "A practical full-stack management application developed to organize and manage business information through a centralized dashboard.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      features: [
        "Dashboard",
        "Responsive interface",
        "Backend validation"
      ],
      liveUrl: "https://www.mvssautomobiles.com/",
      githubUrl: "https://github.com/kushalvunnam/mvssautomobilesfiles",
      status: "available"
    },
    {
      id: "task",
      title: "Task Management Application",
      category: "Productivity Tool",
      description: "A full-stack task management application demonstrating CRUD operations, API communication, and frontend-backend integration.",
      technologies: ["React.js", "Express.js", "MongoDB"],
      features: [
        "CRUD operations",
        "REST APIs",
        "Task status tracking"
      ],
      liveUrl: "",
      githubUrl: "",
      status: "available"
    }
  ],
  education: [
    {
      id: "btech",
      degree: "B.Tech",
      institution: "Malla Reddy Vishwavidhyapeeth (Deemed-to-be University)",
      location: "Hyderabad, Telangana",
      period: "2025 – 2029",
      cgpa: "9.48",
      cgpaLabel: "1st Year CGPA"
    },
    {
      id: "inter",
      degree: "Intermediate",
      institution: "Sri Chaitanya Junior College",
      location: "Vijayawada, Andhra Pradesh",
      period: "2023 – 2025",
      percentage: "97%",
      percentageLabel: "Intermediate Percentage"
    }
  ],
  certifications: [
    {
      id: "nayoda-internship",
      title: "Full Stack Development Internship",
      organization: "Nayoda",
      description: "Completed an internship in Full Stack Development, demonstrating good skills and professionalism.",
      issued: "2026",
      certificateFile: "/certificates/nayoda-certificate.png",
      verificationUrl: ""
    },
    {
      id: "mvss-internship",
      title: "Software Development Internship",
      organization: "MVSS Automobiles Pvt. Ltd.",
      description: "Contributed to the design, development, testing, and deployment of the Auto4M Workshop ERP Management System.",
      issued: "2026",
      certificateFile: "/certificates/mvss-certificate.jpg",
      verificationUrl: ""
    }
  ],
  languages: [
    { name: "English", level: "Fluent", progress: 90 },
    { name: "Telugu", level: "Native", progress: 100 },
    { name: "Hindi", level: "Beginner", progress: 30 }
  ],
  achievements: []
};
