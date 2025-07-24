import Image from "next/image";
import { Container, Heading, SubHeading, ButtonLink } from "./styled";

const Title = () => {
  return (
    <Container id="title">
      <Image
        src="/profile.jpg"
        alt="Sujith Kumar Thankaraj profile picture"
        width={300}
        height={300}
        style={{
          borderRadius: "50%",
          border: "3px solid white",
          objectFit: "cover",
        }}
        priority // to preload it and avoid flash
      />
      <div>
        <Heading>Hi, I&apos;m Sujith Kumar Thankaraj</Heading>
        <SubHeading>Full-Stack Software Engineer</SubHeading>
        <nav>
          <ButtonLink
            href="/SujithKumar_Thankaraj_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </ButtonLink>
          <ButtonLink href="#contact">Contact Me</ButtonLink>
        </nav>
      </div>
    </Container>
  );
};

export default Title;
