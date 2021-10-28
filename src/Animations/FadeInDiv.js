import styled, { keyframes } from "styled-components";
import { fadeIn, fadeInUpBig } from "react-animations";

const fadeInAnimation = keyframes`${fadeInUpBig}`;

const FadeInDiv = styled.div`
  animation: ${(props) => props.seconds}s ${fadeInAnimation};
`;

export default FadeInDiv;
