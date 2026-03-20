import About from "../components/sections/About";
import VibeCoding from "../components/sections/VibeCoding";
import ProjectGallery from "../components/sections/ProjectGallery";
import TechStack from "../components/sections/TechStack";

export default function Home() {
  return (
    <>
      {/* Hero는 Step 8에서 추가 */}
      <About />
      <VibeCoding />
      <ProjectGallery />
      <TechStack />
    </>
  );
}
