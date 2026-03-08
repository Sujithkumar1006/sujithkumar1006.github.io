"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CommonSection, ProjectSection } from "./styled";

const projects = [
  {
    key: "export-invoice-generator",
    title: "Export Sales Invoice Generator",
    image: "/invoice-generator.png",
    githubLink: "https://github.com/Sujithkumar1006/invoice-generator",
    liveLink: "https://invoice-generator-mksq.onrender.com/",
    description:
      "Built a Rails web app that automates generating export sales invoices as PDFs / DOCX. Includes authentication, consignee and notify party master data, an invoice builder, automatic totals, and one-click PDF / DOCX download from a fixed business template.",
    techStack: "Ruby on Rails, PostgreSQL, Prawn, Docker, Render",
  },
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
  const [cardsPerView, setCardsPerView] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const syncCardsPerView = () => {
      if (window.innerWidth <= 768) {
        setCardsPerView(1);
        return;
      }

      if (window.innerWidth <= 1100) {
        setCardsPerView(2);
        return;
      }

      setCardsPerView(3);
    };

    syncCardsPerView();
    window.addEventListener("resize", syncCardsPerView);

    return () => window.removeEventListener("resize", syncCardsPerView);
  }, []);

  const maxIndex = Math.max(0, projects.length - cardsPerView);

  useEffect(() => {
    setCurrentIndex((index) => Math.min(index, maxIndex));
  }, [maxIndex]);

  return (
    <CommonSection id="projects">
      <h2>Projects</h2>
      <ProjectSection>
        <div className="project-slider-header">
          <button
            type="button"
            className="project-slider-button"
            onClick={() => setCurrentIndex((index) => Math.max(0, index - 1))}
            disabled={currentIndex === 0}
            aria-label="Previous project"
          >
            <i className="fas fa-chevron-left" />
          </button>
          <button
            type="button"
            className="project-slider-button"
            onClick={() =>
              setCurrentIndex((index) => Math.min(maxIndex, index + 1))
            }
            disabled={currentIndex === maxIndex}
            aria-label="Next project"
          >
            <i className="fas fa-chevron-right" />
          </button>
        </div>
        <div className="project-slider-viewport">
          <ul
            className="project-slider-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {projects.map((p) => (
              <li key={p.key} className="slider-slide">
                <ProjectCard
                  title={p.title}
                  description={p.description}
                  image={p.image}
                  githubLink={p.githubLink}
                  liveLink={p.liveLink}
                  techStack={p.techStack}
                  imageAlt={`${p.title} project screenshot`}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="project-slider-dots" aria-label="Project slider pagination">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              type="button"
              className={`project-slider-dot ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to project slide ${index + 1}`}
            />
          ))}
        </div>
      </ProjectSection>
    </CommonSection>
  );
};

interface IProjectCard {
  image: string;
  title: string;
  description: string;
  githubLink: string;
  liveLink?: string;
  techStack: string;
  imageAlt: string;
}

function ProjectCard({
  image,
  title,
  description,
  githubLink,
  liveLink,
  techStack,
  imageAlt,
}: IProjectCard) {
  return (
    <article className="project-card">
      <Image
        src={image}
        alt={imageAlt}
        className="project-thumbnail"
        width={300}
        height={200}
      />

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <p className="project-tech">{techStack}</p>

        <div className="project-links">
          {liveLink ? (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              <i className="fas fa-arrow-up-right-from-square"></i>
              Live
            </a>
          ) : null}
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
