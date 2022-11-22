import { FC } from "react";
import styled from "styled-components";

interface IButton {
  title: string;
  callback: () => void;
}

const Button: FC<IButton> = (props) => {
  return (
    <ButtonCmp className="py-3 px-3" onClick={props.callback}>
      <ButtonText>{props.title}</ButtonText>
    </ButtonCmp>
  );
};

export default Button;

const ButtonCmp = styled.button`
  background-color: blue;
  border-radius: 6px;
`;

const ButtonText = styled.p`
  color: white;
`;
