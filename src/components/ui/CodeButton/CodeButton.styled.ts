import styled from "styled-components";

const StyledCodeButton = styled.button`
  border: none;
  border-radius: 9px;
  width: 52px;
  height: 40px;
  background-image: url("/images/icons/code.svg");
  background-repeat: no-repeat;
  background-size: 24px 24px;
  background-position: center;
  background-color: #444444;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #555555;
  }

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
    cursor: initial;
  }
`;

export { StyledCodeButton };
