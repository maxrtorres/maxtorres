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
              "https://play.google.com/store/apps/details?id=com.blitznote",
              "_blank"
            )
          }
        >
          BlitzNote: on Google Play
        </button>
      </FadeInDiv>
    </div>
  );
};
export default Projects;
