import Image from "next/image";
import { Container, Heading, SubHeading, ButtonLink } from "./styled";

const Title = () => {
  return (
    <Container id="title">
      <div className="profile-image">
        <Image
          src="/profile.jpg"
          alt="Sujith Kumar Thankaraj profile picture"
          width={280}
          height={280}
          style={{
            borderRadius: "50%",
            border: "4px solid var(--button-border)",
            objectFit: "cover",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
          }}
          priority
        />
      </div>
      <div className="content">
        <Heading>Hi, I'm Sujith Kumar Thankaraj</Heading>
        <SubHeading>Full-Stack Software Engineer</SubHeading>
        <nav>
          <ButtonLink
            href="/SujithKumar_Thankaraj_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-download"></i>
            View Resume
          </ButtonLink>
          <ButtonLink href="#contact">
            <i className="fas fa-envelope"></i>
            Contact Me
          </ButtonLink>
        </nav>
      </div>
    </Container>
  );
};

export default Title;
