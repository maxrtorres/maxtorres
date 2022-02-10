import "./Home.css";

const LinkButton = (props) => {
  return (
    <button
      onClick={() => window.open(props.link, props.target)}
      className="linkButton"
    >
      <img src={props.image} className="buttonImage" />
    </button>
  );
};

export default LinkButton;
