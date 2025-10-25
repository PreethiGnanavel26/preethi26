import { Icons } from "@/components/icons";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const personalData = {
  name: "Rushikesh Sanjay Patil",
  title: "Full-Stack Developer",
  intro: "An innovative and detail-oriented Full-Stack Developer with a strong foundation in MERN stack development, crafting seamless and robust web applications.",
  about: "An enthusiastic Full-Stack Developer with a strong foundation in MERN stack development. Passionate about building modern, responsive, and user-friendly web applications. I have experience working with technologies like React.js, Node.js, Express.js, and MongoDB to create full-featured applications from scratch. I am a quick learner, a collaborative team player, and am always eager to take on new challenges and expand my skillset in the ever-evolving world of technology.",
  email: "rushikeshpatil5589@gmail.com",
  phone: "+91 9307077366",
  resumeUrl: "https://docs.google.com/uc?export=download&id=1bfPea_SBbc1ppVN44BsHy49AmuYp86B0",
  socials: [
    { name: "GitHub", url: "https://github.com/rushikesh-patil-5589", icon: Icons.Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/rushikesh-patil-3532a822b", icon: Icons.Linkedin },
  ],
};

export const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const skills = [
  { name: "HTML", icon: Icons.Code },
  { name: "CSS", icon: Icons.Palette },
  { name: "JavaScript", icon: Icons.Code },
  { name: "React.js", icon: Icons.React },
  { name: "Node.js", icon: Icons.NodeJs },
  { name: "Express.js", icon: Icons.Express },
  { name: "MongoDB", icon: Icons.MongoDB },
  { name: "Tailwind CSS", icon: Icons.Tailwind },
  { name: "Git", icon: Icons.GitBranch },
  { name: "GitHub", icon: Icons.Github },
  { name: "RESTful APIs", icon: Icons.Route },
  { name: "Redux", icon: Icons.Redux },
];

const findImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export const projects = [
  {
    title: "Book Store Application",
    description: "A full-stack web application built with the MERN stack. It allows users to browse, add, update, and delete books from a database. Features include user authentication and a responsive user interface.",
    image: findImage("bookstore"),
    tags: ["MERN", "React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/rushikesh-patil-5589/book-store-mern",
  },
  {
    title: "Real-time Chat Application",
    description: "Developed a real-time chat application using the MERN stack and Socket.io. Implemented user authentication and enabled real-time messaging between users. Focused on creating a seamless and interactive user experience.",
    image: findImage("chatapp"),
    tags: ["MERN", "Socket.io", "React", "Node.js", "Real-time"],
    githubUrl: "https://github.com/rushikesh-patil-5589/chat-app-mern",
  },
  {
    title: "Nike Landing Page",
    description: "Created a visually appealing and responsive landing page for Nike using React.js and Tailwind CSS. This project showcases modern UI design principles and a mobile-first approach to web development.",
    image: findImage("nike"),
    tags: ["React", "Tailwind CSS", "UI/UX"],
    githubUrl: "https://github.com/rushikesh-patil-5589/nike-landing-page",
  },
];

export const contactInfo = [
    { name: "Email", value: personalData.email, icon: Icons.Mail },
    { name: "Phone", value: personalData.phone, icon: Icons.Phone },
];
