import BlurText from "../../components/blurText";
import MainSection from "./MainSection";

const Projects = () => {
  return (
    <section className="c-space my-20">
        {/* <p className="head-text">My Projects</p> */}
      <BlurText
        text="My Projects"
        delay={150}
        animateBy="words"
        direction="top"
        className="head-text text-white-800"
      />
      <MainSection />
    </section>
  );
};

export default Projects;
