import FadeInDiv from "../Animations/FadeInDiv";
import "./Projects.css";

const Projects = () => {
  return (
    <div class="projects">
      <FadeInDiv seconds={0.5}>
        <h1>Projects</h1>
      </FadeInDiv>
      <FadeInDiv seconds={0.75}>
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
