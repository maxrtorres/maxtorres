import "./Home.css";
import FadeInDiv from "../Animations/FadeInDiv";
import LinkButton from "./LinkButton";
import React, { View } from "react";
import linkedin from "./linkedin.png";
import github from "./github.png";
import email from "./email.png";

const Home = () => {
  return (
    <div>
      <FadeInDiv seconds={1}>
        <h1>Max Torres</h1>
      </FadeInDiv>

      <div class="row">
        <FadeInDiv seconds={1.5}>
          <div>
            <LinkButton
              link="https://www.linkedin.com/in/maxrtorres"
              image={linkedin}
            />
          </div>
        </FadeInDiv>
        <FadeInDiv seconds={2}>
          <div>
            <LinkButton link="https://github.com/maxrtorres" image={github} />
          </div>
        </FadeInDiv>
        <FadeInDiv seconds={2.5}>
          <div>
            <LinkButton link="mailto:maxtorres487@gmail.com" image={email} />
          </div>
        </FadeInDiv>
      </div>
    </div>
  );
};

export default Home;
