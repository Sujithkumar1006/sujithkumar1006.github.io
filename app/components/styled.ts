import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  .picture {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #fff;
  }
  nav {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
  }
`;

export const Heading = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin: 0;
`;

export const SubHeading = styled.h2`
  font-size: 24px;
  color: #b0b0b0;
  margin: 16px 0 32px;
  font-weight: 500;
`;

export const ButtonLink = styled.a`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid #ffffff;
  color: #ffffff;
  background-color: transparent;
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.6s ease forwards;

  &:hover {
    background-color: #ffffff;
    color: #0d1117;
    transform: scale(1.05);
  }
`;
export const CommonSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  > h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;
  }
`;

export const AboutParagraph = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.75;
  max-width: 720px;
  margin: 0 auto 16px;
  color: #ccc;
  text-align: justify;
`;

export const TechStackWrapper = styled.ul`
  display: flex;
  gap: 32px;
  flex-flow: wrap;
  > li {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 16px;
    font-weight: 500;
    color: #cccccc;
    margin-top: 8px;
    text-align: center;
    background-color: #1e1e1e;
    border: 1px solid #2c2c2c;
    border-radius: 12px;
    transition: all 0.3s ease;
    padding: 12px 32px;
    cursor: pointer;
    > i {
      font-size: 20px;
    }
    &:hover {
      border-color: #3a3a3a;
      transform: scale(1.05);
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.08);
    }
  }
`;

export const ProjectSection = styled.ul`
  list-style: none;
  display: flex;
  gap: 40px;
  flex-flow: wrap;
  .project-card {
    background-color: #1e1e1e;
    border: 1px solid #2c2c2c;
    border-radius: 12px;
    overflow: hidden;
    max-width: 360px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    min-height: 460px;
  }

  .project-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
  }

  .project-thumbnail {
    width: 100%;
    height: 200px;
    object-fit: contain;
    border-bottom: 1px solid #2c2c2c;
  }

  .project-content {
    padding: 20px;
  }

  .project-title {
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 8px;
    color: #fff;
  }

  .project-description {
    font-size: 14px;
    color: #ccc;
    margin: 0 0 8px;
    line-height: 1.5;
  }

  .project-tech {
    font-size: 13px;
    color: #999;
    padding: 12px 0;
  }

  .project-links {
    margin-top: 12px;
  }

  .project-button {
    padding: 8px 16px;
    background-color: transparent;
    border: 1px solid #ccc;
    border-radius: 6px;
    color: #fff;
    font-size: 14px;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .project-button:hover {
    background-color: #fff;
    color: #0d1117;
    border-color: #fff;
  }
`;

export const ExperienceSection = styled.div`
  .timeline-section {
    padding: 60px 20px;
  }

  .timeline-title {
    font-size: 24px;
    font-weight: bold;
    color: #ffff;
    margin-bottom: 40px;
  }

  position: relative;
  border-left: 2px solid #ffff;
  .timeline-item {
    position: relative;
    margin-bottom: 40px;
  }

  .timeline-dot {
    position: absolute;
    left: -9px;
    top: 6px;
    width: 16px;
    height: 16px;
    background-color: #ffff;
    border-radius: 50%;
    border: 2px solid white;
  }

  .timeline-card {
    background: #1e1e1e;
    margin-left: 25px;
    border-radius: 8px;
    padding: 16px 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    color: #eee;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
    }
  }

  .timeline-date {
    font-size: 16px;
    color: #999;
    margin-bottom: 4px;
  }

  .timeline-role {
    font-size: 20px;
    font-weight: 600;
    margin: 24px;
    color: #fff;
  }
  .timeline-location {
    font-size: 16px;
  }
`;

export const EducationSection = styled(ExperienceSection)`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  .timeline-section {
    display: flex;
    justify-content: space-between;
    gap: 250px;
    padding: 60px 20px;
    flex-wrap: wrap;
  }

  .timeline-column {
    flex: 1;
    min-width: 300px;
  }

  .contact-box .timeline-card {
    padding: 24px;
    background: #1e1e1e;
    color: #ddd;
    > p {
      padding: 8px 0;
    }
  }

  .contact-links {
    display: flex;
    align-items: center;
    gap: 30px;
    font-size: 55px;
    justify-content: center;
    
  }
`;
