import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
`;

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

// const pulse = keyframes`
//   0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
//   70% { box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
//   100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
// `;

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  min-height: 80vh;
  padding: 60px 20px;

  @media (max-width: 1024px) {
    gap: 60px;
    padding: 50px 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    text-align: center;
    min-height: auto;
    padding: 40px 20px;

    .profile-image img {
      width: 240px !important;
      height: 240px !important;
    }
  }

  @media (max-width: 480px) {
    gap: 30px;
    padding: 30px 15px;

    .profile-image img {
      width: 200px !important;
      height: 200px !important;
    }

    nav {
      flex-direction: column;
      gap: 15px;
      align-items: center;

      a {
        width: 100%;
        max-width: 250px;
        justify-content: center;
      }
    }
  }

  .profile-image {
    animation: ${slideInLeft} 0.8s ease-out, ${float} 6s ease-in-out infinite;
    animation-delay: 0s, 0.8s;
  }

  .content {
    animation: ${slideInRight} 0.8s ease-out;
    max-width: 600px;
  }

  nav {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 40px;

    @media (max-width: 768px) {
      justify-content: center;
    }
  }
`;

export const Heading = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin: 0 0 20px 0;
  background: linear-gradient(
    135deg,
    var(--text-color) 0%,
    var(--sub-text-color) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${fadeIn} 1s ease-out 0.3s both;
  line-height: 1.2;
`;

export const SubHeading = styled.h2`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: var(--sub-text-color);
  margin: 0 0 20px 0;
  font-weight: 500;
  animation: ${fadeIn} 1s ease-out 0.5s both;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    border-radius: 2px;
    animation: ${fadeIn} 1s ease-out 0.7s both;
  }
`;

export const ButtonLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  border: 2px solid #10b981;
  color: white;
  background: #10b981;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeIn} 1s ease-out 0.9s both;
  position: relative;
  overflow: hidden;
  text-decoration: none;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-3px) scale(1.05);
    background: #059669;
    border-color: #059669;
    box-shadow: 0 10px 25px rgba(16, 185, 129, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px) scale(1.02);
  }

  &:nth-child(2) {
    background: transparent;
    border: 2px solid var(--button-border);
    color: var(--text-color);

    &:hover {
      background: var(--button-hover-bg);
      color: var(--button-hover-color);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }
  }
`;
export const CommonSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 80px 20px;

  > h2 {
    font-size: clamp(2rem, 4vw, 2.5rem);
    font-weight: 800;
    margin-bottom: 50px;
    color: var(--text-color);
    position: relative;
    animation: ${fadeIn} 0.8s ease-out;

    &::after {
      content: "";
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
      border-radius: 2px;
    }
  }

  @media (max-width: 1024px) {
    padding: 70px 20px;

    > h2 {
      margin-bottom: 45px;
    }
  }

  @media (max-width: 768px) {
    padding: 60px 20px;

    > h2 {
      margin-bottom: 40px;

      &::after {
        width: 60px;
        height: 3px;
        bottom: -12px;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 50px 10px;

    > h2 {
      margin-bottom: 35px;

      &::after {
        width: 50px;
        height: 2px;
        bottom: -10px;
      }
    }
  }

  @media (max-width: 360px) {
    padding: 40px 5px;

    > h2 {
      margin-bottom: 30px;
    }
  }
`;

export const AboutParagraph = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-weight: 400;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 24px;
  color: var(--sub-text-color);
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out 0.2s both;

  @media (max-width: 768px) {
    text-align: left;
    padding: 0 10px;
  }
`;

export const TechStackWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0;
  width: 100%;

  > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-size: 14px;
    font-weight: 600;
    color: var(--text-color);
    text-align: center;
    background: var(--tech-stack-bg);
    border: 1px solid var(--tech-stack-border);
    border-radius: 16px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 24px 16px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    animation: ${fadeIn} 0.6s ease-out both;

    &:nth-child(1) {
      animation-delay: 0.1s;
    }
    &:nth-child(2) {
      animation-delay: 0.15s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
    &:nth-child(4) {
      animation-delay: 0.25s;
    }
    &:nth-child(5) {
      animation-delay: 0.3s;
    }
    &:nth-child(6) {
      animation-delay: 0.35s;
    }
    &:nth-child(7) {
      animation-delay: 0.4s;
    }
    &:nth-child(8) {
      animation-delay: 0.45s;
    }
    &:nth-child(9) {
      animation-delay: 0.5s;
    }
    &:nth-child(10) {
      animation-delay: 0.55s;
    }
    &:nth-child(11) {
      animation-delay: 0.6s;
    }
    &:nth-child(12) {
      animation-delay: 0.65s;
    }
    &:nth-child(13) {
      animation-delay: 0.7s;
    }
    &:nth-child(14) {
      animation-delay: 0.75s;
    }
    &:nth-child(15) {
      animation-delay: 0.8s;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
      );
      transition: left 0.5s;
    }

    > i {
      font-size: 32px;
      transition: transform 0.3s ease;
    }

    > p {
      margin: 0;
      font-size: 13px;
      font-weight: 500;
    }

    &:hover {
      transform: translateY(-8px) scale(1.05);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
      border-color: #3b82f6;

      &::before {
        left: 100%;
      }

      > i {
        transform: scale(1.2) rotate(5deg);
      }
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 18px;

    > li {
      padding: 20px 14px;

      > i {
        font-size: 30px;
      }
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 16px;

    > li {
      padding: 18px 12px;
      border-radius: 12px;

      > i {
        font-size: 28px;
      }

      > p {
        font-size: 12px;
      }
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px;
    padding: 0 10px;
    max-width: calc(100vw - 40px);

    > li {
      padding: 14px 8px;
      border-radius: 10px;
      min-width: 0; /* Allow items to shrink */

      > i {
        font-size: 22px;
      }

      > p {
        font-size: 10px;
        word-break: break-word;
        hyphens: auto;
      }
    }
  }

  @media (max-width: 360px) {
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    gap: 8px;
    padding: 0 5px;

    > li {
      padding: 12px 6px;

      > i {
        font-size: 20px;
      }

      > p {
        font-size: 9px;
      }
    }
  }
`;

const cardFloat = keyframes`
  0%, 100% { transform: translateY(0px) rotateY(0deg); }
  50% { transform: translateY(-5px) rotateY(2deg); }
`;

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

const slideUp = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(50px) scale(0.9); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0) scale(1); 
  }
`;

export const ProjectSection = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;

  .project-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    min-height: 500px;
    position: relative;
    animation: ${slideUp} 0.8s ease-out both;

    &:nth-child(1) {
      animation-delay: 0.1s;
    }
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.3s;
    }
    &:nth-child(4) {
      animation-delay: 0.4s;
    }
    &:nth-child(5) {
      animation-delay: 0.5s;
    }
    &:nth-child(6) {
      animation-delay: 0.6s;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.05);
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 1;
    }

    &::after {
      content: "";
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: var(--card-border);
      border-radius: 22px;
      z-index: -1;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      transform: translateY(-15px) scale(1.02);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2), 0 0 0 1px var(--card-border);
      animation: ${cardFloat} 3s ease-in-out infinite;

      &::before {
        opacity: 0.5;
      }

      &::after {
        opacity: 1;
      }

      .project-thumbnail {
        transform: scale(1.1);
      }

      .project-title {
        color: #10b981;
        transform: translateX(5px);
      }

      .project-content {
        transform: translateY(-5px);
      }

      .project-button {
        transform: translateY(-3px) scale(1.05);
      }
    }
  }

  .project-thumbnail {
    width: 100%;
    height: 220px;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        45deg,
        transparent 30%,
        rgba(255, 255, 255, 0.1) 50%,
        transparent 70%
      );
      background-size: 200px 100%;
      background-repeat: no-repeat;
      background-position: -200px 0;
      animation: ${shimmer} 2s infinite;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .project-card:hover &::after {
      opacity: 1;
    }
  }

  .project-content {
    padding: 25px;
    transition: transform 0.3s ease;
    position: relative;
    z-index: 2;
  }

  .project-title {
    font-size: 22px;
    font-weight: 700;
    margin: 0 0 12px;
    color: var(--text-color);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #10b981, #059669);
      transition: width 0.3s ease;
    }

    .project-card:hover &::after {
      width: 100%;
    }
  }

  .project-description {
    font-size: 15px;
    color: var(--sub-text-color);
    margin: 0 0 15px;
    line-height: 1.6;
    transition: color 0.3s ease;
  }

  .project-tech {
    font-size: 13px;
    color: var(--sub-text-color);
    padding: 15px 0;
    font-weight: 500;
    opacity: 0.8;
    transition: opacity 0.3s ease;

    .project-card:hover & {
      opacity: 1;
    }
  }

  .project-links {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  .project-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    background: var(--card-bg);
    border: 2px solid var(--button-border);
    border-radius: 25px;
    color: var(--text-color);
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(59, 130, 246, 0.1),
        transparent
      );
      transition: left 0.5s;
    }

    &:hover {
      background: var(--button-hover-bg);
      color: var(--button-hover-color);
      border-color: #3b82f6;
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 8px 20px rgba(59, 130, 246, 0.2);

      &::before {
        left: 100%;
      }
    }

    /* GitHub button styling */
    background: var(--tech-stack-bg);
    border-color: #10b981;

    &:hover {
      background: #10b981;
      color: white;
      border-color: #10b981;
      box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3);
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;

    .project-card {
      min-height: 480px;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
    padding: 0 10px;

    .project-card {
      min-height: 450px;
      border-radius: 16px;

      &:hover {
        transform: translateY(-8px) scale(1.01);
      }
    }

    .project-content {
      padding: 20px;
    }

    .project-title {
      font-size: 20px;
    }

    .project-description {
      font-size: 14px;
    }

    .project-button {
      padding: 10px 18px;
      font-size: 13px;
    }
  }

  @media (max-width: 480px) {
    gap: 20px;
    padding: 0 5px;

    .project-card {
      min-height: 420px;
      border-radius: 12px;

      &:hover {
        transform: translateY(-5px) scale(1.005);
      }
    }

    .project-thumbnail {
      height: 180px;
    }

    .project-content {
      padding: 16px;
    }

    .project-title {
      font-size: 18px;
      margin-bottom: 10px;
    }

    .project-description {
      font-size: 13px;
      line-height: 1.5;
    }

    .project-tech {
      font-size: 12px;
      padding: 10px 0;
    }

    .project-button {
      padding: 8px 16px;
      font-size: 12px;
      border-radius: 20px;
    }

    .project-links {
      margin-top: 15px;
    }
  }
`;

export const ExperienceSection = styled.div`
  .timeline-section {
    padding: 60px 20px;
  }

  .timeline-title {
    font-size: 24px;
    font-weight: bold;
    color: var(--text-color);
    margin-bottom: 40px;
  }

  position: relative;
  border-left: 2px solid var(--timeline-border);
  max-width: 800px;
  margin: 0 auto;

  .timeline-item {
    position: relative;
    margin-bottom: 40px;
    opacity: 0;
    transform: translateX(-50px);
    transition: all 0.6s ease-out;
  }
  .timeline-item.reveal {
    opacity: 1;
    transform: translateX(0);
  }

  .timeline-dot {
    position: absolute;
    left: -9px;
    top: 6px;
    width: 16px;
    height: 16px;
    background-color: var(--timeline-dot);
    border-radius: 50%;
    border: 2px solid var(--bg-color);
  }

  .timeline-card {
    background: var(--card-bg);
    margin-left: 25px;
    border-radius: 8px;
    padding: 16px 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    color: var(--text-color);
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
    }
  }

  .timeline-date {
    font-size: 16px;
    color: var(--sub-text-color);
    margin-bottom: 4px;
  }

  .timeline-responsibilties li {
    margin-bottom: 0.9rem;
    padding-left: 0.75rem;
    position: relative;
    color: var(--text-color);
    font-size: 0.95rem;
    line-height: 1.6;
    transition: color 0.3s ease;
    text-align: left;
    margin-top: 16px;
  }

  .timeline-responsibilties li {
    position: relative;
    padding-left: 1rem;
    margin-bottom: 1rem;

    font-size: 0.95rem;
    line-height: 1.6;
  }

  .timeline-responsibilties li::before {
    content: "•";
    position: absolute;
    left: 0;
    top: 0;
    font-size: 1.2rem;
    line-height: 1.2;
  }

  .timeline-responsibilties li:hover {
    font-weight: 500;
  }
  .timeline-role {
    font-size: 20px;
    font-weight: 600;
    margin: 24px;
    color: var(--text-color);
  }
  .timeline-location {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    max-width: 100%;

    .timeline-card {
      margin-left: 20px;
      padding: 14px 16px;
    }

    .timeline-role {
      font-size: 18px;
      margin: 16px;
    }

    .timeline-date {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    border-left-width: 1px;

    .timeline-dot {
      width: 12px;
      height: 12px;
      left: -7px;
    }

    .timeline-card {
      margin-left: 15px;
      padding: 12px 14px;
      border-radius: 6px;
    }

    .timeline-role {
      font-size: 16px;
      margin: 12px;
    }

    .timeline-date {
      font-size: 13px;
    }

    .timeline-location {
      font-size: 14px;
    }
  }
`;

export const EducationSection = styled(ExperienceSection)`
  display: flex;
  justify-content: center;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;

  .timeline-section {
    display: flex;
    justify-content: center;
    gap: 40px;
    padding: 60px 20px;
    flex-wrap: wrap;
    width: 100%;
  }

  .timeline-column {
    flex: 1;
    min-width: 300px;
    max-width: 450px;
  }

  .contact-box .timeline-card {
    padding: 24px;
    background: var(--card-bg);
    color: var(--text-color);
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

  @media (max-width: 1024px) {
    .timeline-section {
      gap: 30px;
    }

    .timeline-column {
      min-width: 280px;
      max-width: 400px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .timeline-section {
      flex-direction: column;
      gap: 40px;
      padding: 40px 20px;
    }

    .timeline-column {
      min-width: auto;
      max-width: 100%;
      width: 100%;
    }

    .contact-links {
      gap: 25px;
      font-size: 45px;
    }
  }

  @media (max-width: 480px) {
    .timeline-section {
      padding: 30px 15px;
      gap: 30px;
    }

    .contact-box .timeline-card {
      padding: 20px;
    }

    .contact-links {
      gap: 20px;
      font-size: 35px;
    }
  }
`;
