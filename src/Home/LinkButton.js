import "./Home.css";

const LinkButton = (props) => {
  return (
    <button
      onClick={() => window.open(props.link, props.target)}
      class="linkButton"
    >
      <img src={props.image} class="buttonImage" />
    </button>
  );
};

export default LinkButton;
