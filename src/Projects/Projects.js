import FadeInDiv from "../Animations/FadeInDiv";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <FadeInDiv seconds={1}>
        <h1>Projects</h1>
      </FadeInDiv>
      <FadeInDiv seconds={2}>
        <p>
          <a
            href="https://play.google.com/store/apps/details?id=com.blitznote"
            target="_blank"
          >
            BlitzNote: on Google Play
          </a>
        </p>
      </FadeInDiv>
    </div>
  );
};
export default Projects;
