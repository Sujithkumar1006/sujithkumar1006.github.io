"use client";
import { CommonSection, ExperienceSection } from "./styled";
import { useEffect } from "react";

const experience = [
  {
    role: "Software Engineer",
    company: "Wein Law Firm",
    location: "New York, United States",
    period: "Nov 2025 - Present",
    position: [
     "First software engineering hire, working directly with the CTO to own and enhance an internal collections and recovery platform used by 10+ attorneys and paralegals across active cases",
     "Improving a Rails and React application by refactoring data models, APIs and access controls, supporting dozens of concurrent cases within the firm",
     "Consolidated 4 spreadsheet-based workflows into a centralized Rails platform, speeding up case handling and simplifying internal operations",
     "Integrated third-party services, Google Document Processing (GDP) and LLM-based workflows into a Rails application, automating document generation and standardizing legal records"
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Yubi (formerly CredAvenue)",
    location: "Chennai, India",
    period: "Oct 2022 – Dec 2023",
    position: [
      "Enhanced dashboard performance by 30% by rebuilding the React UI with GraphQL and Chart.js, enabling faster access to 100K+ records with accessible, WCAG-compliant interfaces",
      "Built a full-stack loan monitoring platform for internal users and customers, processing 100K+ records via a Rails service and AWS SQS, visualized through a GraphQL-based React UI",
      "Reduced file processing time by 40% by architecting a Node.js service with Express and AWS S3, deployed on AWS ECS for reliable, scalable loan data uploads",
      "Increased API throughput by 60% by designing a Rails microservice with optimized PostgreSQL schemas and deploying on AWS ECS for smooth third-party integrations",
      "Enabled faster UI delivery across 4 teams by building reusable React Native Web components from Figma and publishing them to an internal NPM registry",
      "Modernized the frontend codebase by upgrading React from v16 to v17, adopting TypeScript, refactoring core modules and mentoring 3 engineers to reduce tech debt and improve maintainability",
    ],
  },
  {
    role: "Software Engineer",
    company: "Yubi (formerly CredAvenue)",
    location: "Chennai, India",
    period: "Oct 2020 – Sep 2022",
    position: [
      "Developed an Excel-like React UI with AG Grid for uploading, column mapping and validating 50K+ loan records, reducing onboarding errors and improving data accuracy",
      "Boosted load performance by 25% by profiling React with Lighthouse and Sentry, implementing lazy loading, bundle splitting and rendering optimizations",
      "Refactored Active Record queries and indexed PostgreSQL columns after query plan analysis, reducing response times by up to 60% on critical Rails API endpoints",
      "Integrated GraphQL subscriptions for real-time validation and syncing, reducing data sync latency from minutes to seconds",
      "Expanded test coverage to 70% with React Testing Library and Mocha and reduced production bugs by 35% through Sentry-based error monitoring",
      "Collaborated closely with product, design and QA teams in agile sprints to ship accessible, high-performance customer-facing features focused on retention and funnel optimization",
    ],
  },
  {
    role: "Product Development Engineer Intern",
    company: "CodingMart Technologies",
    location: "Remote",
    period: "Sep 2019 – Aug 2020",
    position: [
      "Built full-stack recruitment and university hiring platforms using React.js and Node.js to streamline student applications and reduce manual screening effort by 35%",
      "Shipped a hospital management system with React.js, Node.js, Prisma and PostgreSQL to support real-time patient, staff and appointment workflows with reliable data handling",
      "Developed a Slack-style PWA using React.js and WebSocket for real-time messaging, boosting collaboration across users",
      "Engineered backend validations and processing logic for complex JSON data to improve performance and reliability in student data handling",
      "Implemented CI/CD pipelines using Docker and Git to automate deployments, accelerate development cycles and improve team productivity",
    ],
  },
];

export default function Experience() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const items = document.querySelectorAll(".timeline-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);
  return (
    <CommonSection className="timeline-section">
      <h2 className="timeline-title">Experience</h2>
      <ExperienceSection>
        {experience.map((item, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-dot" />
            <div className="timeline-card">
              <p className="timeline-date">{item.period}</p>
              <h3 className="timeline-role">{item.role}</h3>
              <p className="timeline-location">
                {item.company} · {item.location}
              </p>
              <ul className="timeline-responsibilties">
                {item.position.map((points, index) => (
                  <li key={index}>{points}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </ExperienceSection>
    </CommonSection>
  );
}
