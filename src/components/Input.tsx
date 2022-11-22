import { FC } from "react";
import styled from "styled-components";

interface IInput {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
}

const Input: FC<IInput> = (props) => {
  return <InputCmp value={props.value} className="py-2 px-2" onChange={props.onChange} />;
};

export default Input;

const InputCmp = styled.input`
  border: 1px solid black;
  border-radius: 10px;
  width: 50%;
`;
