import FadeInDiv from "../Animations/FadeInDiv";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <FadeInDiv seconds={0.5}>
        <h1>Projects</h1>
      </FadeInDiv>
      <FadeInDiv seconds={0.75}>
        <button
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/dev?id=4945933172439007816",
              "_blank"
            )
          }
        >
          Developer Page - Google Play
        </button>
      </FadeInDiv>
    </div>
  );
};
export default Projects;
