import FadeInDiv from "../Animations/FadeInDiv";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <FadeInDiv seconds={1}>
        <h1>Contact Info</h1>
      </FadeInDiv>
      <FadeInDiv seconds={2}>
        <p>
          Email:{" "}
          <a href="mailto:maxtorres487@gmail.com" target="_blank">
            maxtorres487@gmail.com
          </a>
        </p>
      </FadeInDiv>
    </div>
  );
};
export default Contact;
