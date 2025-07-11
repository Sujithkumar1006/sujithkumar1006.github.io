"use client";
import Title from "./components/Title";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";

export default function Home() {
  return (
    <main>
      <Title />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Education />
    </main>
  );
}
