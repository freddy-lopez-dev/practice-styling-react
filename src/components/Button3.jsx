import styled from "styled-components";

// should be named as component
const StyledButton = styled.button`
  background-color: wheat;
  color: red;
  font-size: 2rem;
  padding: 1rem;
`;

const Button3 = (props) => {
  return <StyledButton className="btn3">test</StyledButton>;
};

export default Button3;
