import { Animate } from "react-simple-animate";

const FadeInDiv = (props) => (
  <Animate
    play={true}
    easeType="cubic-bezier(0.37, 0, 0.63, 1)"
    start={{
      opacity: 0,
      filter: "blur(1vw)",
      transform: "translate(-25vw, 25vw)",
    }}
    end={{ opacity: 1, filter: "blur(0)", transform: "translate(0, 0)" }}
    duration={props.seconds}
  >
    {props.children}
  </Animate>
);

export default FadeInDiv;
