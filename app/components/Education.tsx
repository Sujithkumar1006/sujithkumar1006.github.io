import { CommonSection, EducationSection } from "./styled";
import { useState } from "react";

const Education = () => {
  const [isHovered, setIsHovered] = useState([false, false]);

  const setHover = (index: number, val = true) => {
    let newHoverState = Array(2).fill(false);
    newHoverState[index] = val;
    setIsHovered(newHoverState);
  };

  return (
    <>
      <CommonSection id="contact" className="timeline-section">
        <EducationSection>
          <div className="timeline-column">
            <h2 className="timeline-title">Education</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <p className="timeline-date">2023 – 2025</p>
                  <h3 className="timeline-role">Masters in Computer Science</h3>
                  <p>State University of New York at Binghamton </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <p className="timeline-date">2016 – 2020</p>
                  <h3 className="timeline-role">
                    Bachelors in Information Technology
                  </h3>
                  <p>Bannari Amman Institute of Technology </p>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-column contact-box">
            <h2 className="timeline-title">Contact</h2>
            <div className="timeline-card">
              <p>
                Email:{" "}
                <a href="mailto:sthankaraj@binghamton.edu">
                  sthankaraj@binghamton.edu
                </a>
              </p>
              <p>Phone: +1 (607) 343-8948</p>
              <p className="contact-links">
                <a
                  href="https://www.linkedin.com/in/sujith-kumart/"
                  target="_blank"
                  onMouseEnter={() => setHover(0)}
                  onMouseLeave={() => setHover(0, false)}
                >
                  <i
                    className={`devicon-linkedin-plain-wordmark ${
                      isHovered[0] ? "colored" : ""
                    }`}
                  />
                </a>
                <a
                  href="https://github.com/sujithkumar1006"
                  target="_blank"
                  onMouseEnter={() => setHover(1)}
                  onMouseLeave={() => setHover(1, false)}
                >
                  <i
                    className={`devicon-github-original-wordmark ${
                      isHovered[1] ? "colored" : ""
                    }`}
                  ></i>
                </a>
              </p>
            </div>
          </div>
        </EducationSection>
      </CommonSection>
    </>
  );
};

export default Education;
