import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import VibeCoding from "../components/sections/VibeCoding";
import ProjectGallery from "../components/sections/ProjectGallery";
import TechStack from "../components/sections/TechStack";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <VibeCoding />
      <ProjectGallery />
      <TechStack />
    </>
  );
}
