import "./Home.css";
import FadeInDiv from "../Animations/FadeInDiv";
import LinkButton from "./LinkButton";
import linkedin from "./linkedin.png";
import github from "./github.png";
import email from "./email.png";

const Home = () => {
  return (
    <div class="home">
      <FadeInDiv seconds={0.5}>
        <h1>Max Torres</h1>
      </FadeInDiv>
      <div class="row">
        <FadeInDiv seconds={1.25}>
          <LinkButton
            link="https://www.linkedin.com/in/maxrtorres"
            image={linkedin}
            target="_blank"
          />
        </FadeInDiv>
        <FadeInDiv seconds={1}>
          <LinkButton
            link="https://github.com/maxrtorres"
            image={github}
            target="_blank"
          />
        </FadeInDiv>
        <FadeInDiv seconds={0.75}>
          <LinkButton
            link="mailto:maxtorres487@gmail.com"
            image={email}
            target="_self"
          />
        </FadeInDiv>
      </div>
    </div>
  );
};

export default Home;
