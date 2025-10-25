import { Icons } from "@/components/icons";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const personalData = {
  name: "Preethi G",
  title: "AI & Data Science Student | Full-Stack Developer",
  intro: "A passionate and driven student pursuing a Bachelor of Technology in Artificial Intelligence and Data Science, with an interest in Computer Vision and Full Stack Development.",
  about: "A passionate and driven student pursuing a Bachelor of Technology in Artificial Intelligence and Data Science. Skilled in various programming languages, machine learning frameworks, and web development technologies. Eager to apply my knowledge to solve real-world problems and contribute to innovative projects in Artificial Intelligence, Computer Vision, and Full Stack Development.",
  email: "preethignanavel26@gmail.com",
  phone: "+918667327395",
  resumeUrl: "https://drive.google.com/file/d/1bfPea_SBbc1ppVN44BsHy49AmuYp86B0/view?usp=drive_link",
  socials: [
    { name: "GitHub", url: "https://github.com/rushikesh-patil-5589", icon: Icons.Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/preethi-gnanavel", icon: Icons.Linkedin },
  ],
};

export const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const categorizedSkills = [
  {
    category: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 80 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    category: "ML/DL Frameworks",
    skills: [
      { name: "TensorFlow", level: 85 },
      { name: "Keras", level: 80 },
      { name: "PyTorch", level: 75 },
      { name: "OpenCV", level: 90 },
      { name: "scikit-learn", level: 85 },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 85 },
      { name: "Flask", level: 80 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    category: "Design & Visualization",
    skills: [
      { name: "Figma", level: 70 },
      { name: "Power BI", level: 80 },
      { name: "Tableau", level: 75 },
    ],
  },
];


const findImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export const projects = [
  {
    title: "Speech-to-Text Web Application",
    description: "A web application that converts speech to text in real-time, built with Flask and the WebSpeech API. Winner of multiple awards.",
    image: findImage("chatapp"),
    tags: ["Flask", "WebSpeech API", "Python", "HTML/CSS"],
    githubUrl: "https://github.com/your-username/speech-to-text-app",
  },
  {
    title: "Drowsy Guard: AI Drowsiness Detection",
    description: "An AI-driven system to detect driver drowsiness in real-time using OpenCV and Python to enhance road safety.",
    image: findImage("drowsy-guard"),
    tags: ["OpenCV", "Python", "AI", "Computer Vision"],
    githubUrl: "https://github.com/your-username/drowsy-guard",
  },
  {
    title: "AI-Based M-Sand Quality Monitoring",
    description: "A system to monitor the quality of M-Sand using a CNN model. Built with a React frontend and a Flask backend.",
    image: findImage("quality-monitoring"),
    tags: ["React", "Flask", "CNN", "AI"],
    githubUrl: "https://github.com/your-username/msand-quality-monitoring",
  },
];

export const contactInfo = [
    { name: "Email", value: personalData.email, icon: Icons.Mail },
    { name: "Phone", value: personalData.phone, icon: Icons.Phone },
];
