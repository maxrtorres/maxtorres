import FadeInDiv from "../Animations/FadeInDiv";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contacts">
      <FadeInDiv seconds={0.5}>
        <h1>Contact Info</h1>
      </FadeInDiv>
      <FadeInDiv seconds={0.75}>
        <p>
          Email:{" "}
          <a href="mailto:maxtorres487@gmail.com" target="_self">
            maxtorres487@gmail.com
          </a>
        </p>
      </FadeInDiv>
    </div>
  );
};
export default Contact;
