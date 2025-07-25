import { CommonSection, ProjectSection } from "./styled";
import Image from "next/image";
const projects = [
  {
    key: "pingpong",
    title: "PingPong App",
    image: "/pingpongapp.png",
    githubLink: "https://github.com/Sujithkumar1006/ping-android",
    description:
      "Built a mobile application using Java and Kotlin to validate IP addresses, with features like history and bookmarking to help users manage and revisit lookups.",
    techStack: "Java, Kotlin, Android",
  },
  {
    key: "rtca",
    title: "Real-Time Chat Application",
    image: "/rtca.png",
    githubLink: "https://github.com/Sujithkumar1006/chat-app-fe",
    description:
      "Developed a real-time chat web app using React.js, Node.js, and Socket.IO, featuring SSO authentication via Auth0 for secure Google and GitHub logins.",
    techStack: "React.js, Node.js, Socket.IO, MUI, Auth0",
  },
  {
    key: "parserjs",
    title: "C-like Parser & Lexer in JS",
    image: "/parser.png",
    githubLink: "https://github.com/Sujithkumar1006/parser",
    description:
      "Built a parser and lexer in JS that mimics C-style syntax, supporting tokenization and grammar parsing for expressions, loops, and conditionals as part of an academic compiler project.",
    techStack: "JavaScript, Regular Expressions, Compiler Theory",
  },
];

const Projects = () => {
  return (
    <CommonSection id="projects">
      <h2>Projects</h2>
      <ProjectSection>
        {projects.map((p) => (
          <li key={p.key}>
            <ProjectCard
              title={p.title}
              description={p.description}
              image={p.image}
              githubLink={p.githubLink}
              techStack={p.techStack}
            />
          </li>
        ))}
      </ProjectSection>
    </CommonSection>
  );
};

interface IProjectCard {
  image: string;
  title: string;
  description: string;
  githubLink: string;
  techStack: string;
}

function ProjectCard({
  image,
  title,
  description,
  githubLink,
  techStack,
}: IProjectCard) {
  return (
    <article className="project-card">
      <Image
        src={image}
        alt="Project Screenshot"
        className="project-thumbnail"
        width={300}
        height={200}
        priority // to preload it and avoid flash
      />

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <p className="project-tech">{techStack}</p>

        <div className="project-links">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            <i className="fab fa-github"></i>
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default Projects;
