import "./Home.css";
import FadeInDiv from "../Animations/FadeInDiv";
import LinkButton from "./LinkButton";

const Home = () => {
  return (
    <div className="home">
      <FadeInDiv seconds={0.5}>
        <h1>Max Torres</h1>
      </FadeInDiv>
      <div className="row">
        <FadeInDiv seconds={1.25}>
          <LinkButton
            link="https://www.linkedin.com/in/maxrtorres"
            image={"./Images/linkedin.png"}
            target="_blank"
          />
        </FadeInDiv>
        <FadeInDiv seconds={1}>
          <LinkButton
            link="https://github.com/maxrtorres"
            image={"./Images/github.png"}
            target="_blank"
          />
        </FadeInDiv>
        <FadeInDiv seconds={0.75}>
          <LinkButton
            link="mailto:maxtorres487@gmail.com"
            image={"./Images/email.png"}
            target="_self"
          />
        </FadeInDiv>
      </div>
    </div>
  );
};

export default Home;
