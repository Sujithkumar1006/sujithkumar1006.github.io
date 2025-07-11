import { CommonSection, AboutParagraph } from "./styled";

const About = () => {
  return (
    <CommonSection id="about">
      <h2>About me</h2>
      <AboutParagraph>
        I’m Sujith Kumar Thankaraj, a Full-Stack Software Engineer with over
        four years of experience building reliable, scalable, and user-friendly
        fintech applications. My expertise spans modern frontend technologies
        like <b>React.js</b> and <b>TypeScript</b>, as well as backend
        frameworks such as <b>Ruby on Rails</b> and <b>Node.js</b>. I’ve worked
        on complex real-world systems, architecting RESTful APIs, implementing
        caching strategies, integrating third-party services, and delivering
        features that directly enhance customer experience and business value.
      </AboutParagraph>
      <AboutParagraph>
        Currently, I’m pursuing my Master’s in Computer Science at Binghamton
        University, focusing on system design, cloud computing, and distributed
        systems. I care deeply about accessibility, developer experience, and
        building products that make a real impact.
      </AboutParagraph>
    </CommonSection>
  );
};

export default About;
