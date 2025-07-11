"use client";
import { CommonSection, ExperienceSection } from "./styled";

const experience = [
  {
    role: "Senior Software Engineer",
    company: "Yubi (formerly CredAvenue)",
    location: "Chennai, India",
    period: "Oct 2022 – Dec 2023",
  },
  {
    role: "Software Engineer",
    company: "Yubi (formerly CredAvenue)",
    location: "Chennai, India",
    period: "Oct 2020 – Sep 2022",
  },
  {
    role: "Product Development Engineer Intern",
    company: "CodingMart Technologies",
    location: "Remote",
    period: "Sep 2019 – Aug 2020",
  },
];

export default function Experience() {
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
            </div>
          </div>
        ))}
      </ExperienceSection>
    </CommonSection>
  );
}
