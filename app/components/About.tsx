import { CommonSection, AboutParagraph } from "./styled";

const About = () => {
  return (
    <CommonSection id="about">
      <h2>About me</h2>
      <AboutParagraph>
        I’m Sujith Kumar Thankaraj, a full-stack software engineer with 5+
        years of experience building production systems across fintech,
        internal business platforms and workflow-heavy applications. I work
        across the stack with <b>React.js</b>, <b>TypeScript</b>,{" "}
        <b>Ruby on Rails</b>, <b>Node.js</b> and cloud infrastructure, with a
        strong focus on designing reliable APIs, improving performance and
        turning manual operations into scalable software.
      </AboutParagraph>
      <AboutParagraph>
        Over the course of my career, I’ve built banking integrations,
        high-volume monitoring dashboards, data-intensive onboarding workflows,
        internal legal operations tools and real-time collaboration products. I
        enjoy owning features end to end, from architecture and backend systems
        to frontend experiences, and I care about writing maintainable software
        that delivers measurable impact for both users and the business.
      </AboutParagraph>
      <AboutParagraph>
        I recently completed my Master’s in Computer Science at Binghamton
        University, where I deepened my understanding of system design,
        distributed systems and scalable application development. What drives me
        most is building thoughtful products with clear outcomes, whether that
        means reducing manual effort, improving reliability or helping teams
        move faster with better tools.
      </AboutParagraph>
    </CommonSection>
  );
};

export default About;
