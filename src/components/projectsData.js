import agropathImg1 from "../assets/1.png";
import agropathImg2 from "../assets/2.png";




const projects = [
  {
    name: "GradeBookX",
    description: "A comprehensive student grade management system designed to simplify academic administration for schools, colleges, and universities.",
    overview: "GradeBookX is a comprehensive student grade management system designed to simplify academic administration for schools, colleges, and universities. It enables administrators and teachers to manage courses, subjects, divisions, and teacher assignments efficiently, while laying the foundation for student management and grading. The project aims to digitize and streamline academic record management, replacing manual systems with a modern web-based application. It provides secure access, role-based dashboards, and automation for course and teacher management, with planned support for student records, grading, and attendance.",
    techStack: ["React", "Vite", "Tailwind CSS", "React Router DOM", "Node.js", "Express.js", "PostgreSQL", "JWT", "bcryptjs"],
    githubLink: "https://github.com/ideabliss/gradebookx",
    images: ["/api/placeholder/400/300", "/api/placeholder/400/300"]
  },
  {
    name: "AgroPath",
    description: "A digital marketplace that empowers farmers to sell their crops directly to consumers, fostering a transparent and efficient agricultural supply chain.",
    overview: "The AgroPath Android Application is a digital marketplace that empowers farmers to sell their crops directly to consumers, fostering a transparent and efficient agricultural supply chain. By eliminating middlemen, the app ensures farmers receive fair prices while consumers gain access to fresh, locally sourced produce. It provides features such as crop listing, secure payments, real-time communication between farmers and buyers, and location-based services to connect nearby producers with consumers.",
    techStack: ["Flutter", "Firebase"],
    githubLink: "https://github.com/ideabliss/agropath",
     images: [agropathImg1, agropathImg2],
  },
  {
    name: "Gen Scheduler",
    description: "A smart production scheduling system that leverages AI-driven demand forecasting to optimize manufacturing plans using real-time sales data.",
    overview: "Gen Scheduler is a smart production scheduling system that leverages AI-driven demand forecasting to optimize manufacturing plans using real-time sales data. Built with React.js, Node.js, and Firebase, and powered by Gemini AI, it enables predictive analytics and automated scheduling. The system features dynamic Gantt charts for intuitive production planning, helping manufacturers improve operational efficiency with real-time insights, accurate demand predictions, and automated schedule generation.",
    techStack: ["React.js", "Bootstrap", "Node.js", "Express.js"],
    githubLink: "https://github.com/ideabliss/gen-scheduler",
    images: ["/api/placeholder/400/300", "/api/placeholder/400/300"]
  },
  {
    name: "PostureXpert",
    description: "A hardware + mobile app system that continuously monitors and analyzes a user's posture using advanced sensors.",
    overview: "PostureXpert is a hardware + mobile app system developed with Flutter that continuously monitors and analyzes a user's posture. Using advanced sensors, it measures back angles and streams real-time data to the app, where AI algorithms evaluate posture quality and classify it as good, moderate, or poor. If poor posture is detected, the system sends instant alerts to encourage corrective action, helping users improve spinal health, prevent strain-related issues, and maintain long-term wellness.",
    techStack: ["Flutter", "Firebase", "ESP32"],
    githubLink: "https://github.com/ideabliss/posturexpert",
    images: ["/api/placeholder/400/300", "/api/placeholder/400/300"]
  },
  {
    name: "EaseHire",
    description: "A next-gen AI-powered recruitment platform designed to transform the hiring experience for both employers and candidates.",
    overview: "EaseHire is a next-gen AI-powered recruitment platform designed to transform the hiring experience for both employers and candidates. It enables end-to-end hiring with job listings, resume uploads, applicant tracking, and real-time updates, while ensuring fair and efficient selection. The platform integrates Ollama's LLaMA 3.2 model for AI-driven assessments, dynamically generating skill-based questions and supporting multi-round evaluations such as MCQs, coding tests, and more. With its modern UI/UX and scalable architecture, EaseHire streamlines the hiring workflow and empowers organizations to recruit smarter.",
    techStack: ["React.js", "Bootstrap", "Python", "Quartz", "SQL"],
    githubLink: "https://github.com/ideabliss/easehire",
    images: ["/api/placeholder/400/300", "/api/placeholder/400/300"]
  },
  {
    name: "Excusely",
    description: "A fun AI-powered excuse generator that helps users skip meetings, delay tasks, or dodge plans with witty, context-aware excuses.",
    overview: "Excusely is a fun AI-powered excuse generator that helps users skip meetings, delay tasks, or dodge plans with witty, context-aware excuses in seconds. Users can choose the situation, set urgency, and even adjust the believability level — from highly realistic to hilariously absurd (e.g., 'I couldn't join because I was stuck in a time loop.'). The platform is being extended with proof generation features like fake chats, screenshots, and more, making excuses even more convincing (or entertaining). While primarily built for fun, Excusely cleverly blends humor with AI creativity.",
    techStack: ["Flutter", "Firebase"],
    githubLink: "https://github.com/ideabliss/excusely",
    images: ["/api/placeholder/400/300", "/api/placeholder/400/300"]
  },
  {
    name: "Help Hour",
    description: "A service booking platform that connects users with professionals for everyday needs such as plumbing, electrical work, and house cleaning.",
    overview: "Help Hour is a service booking platform that connects users with professionals for everyday needs such as plumbing, electrical work, and house cleaning. The website allows customers to browse services, book appointments, and track service status seamlessly. An admin dashboard is also included for managing bookings, monitoring service requests, and overseeing service providers. With a simple and user-friendly design, Help Hour makes household service booking fast, reliable, and hassle-free.",
    techStack: ["HTML", "CSS", "JavaScript", "Firebase"],
    githubLink: "https://github.com/ideabliss/help-hour",
    images: ["/api/placeholder/400/300", "/api/placeholder/400/300"]
  },
  {
    name: "BMI Tracker",
    description: "A mobile health utility application that allows users to calculate their Body Mass Index (BMI) based on height and weight inputs.",
    overview: "The BMI App is a mobile health utility application built with Flutter that allows users to calculate their Body Mass Index (BMI) based on height and weight inputs. The app instantly classifies results into categories such as Underweight, Normal, Overweight, and Obese, helping users quickly assess their health status. With its simple and intuitive interface, the BMI App ensures an easy user experience and can be extended with features like health tips, BMI history tracking, and integration with wearable devices in the future.",
    techStack: ["Flutter", "Dart"],
    githubLink: "https://github.com/ideabliss/bmi-tracker",
    images: ["/api/placeholder/400/300", "/api/placeholder/400/300"]
  }
];

export default projects;