import { observer } from "mobx-react-lite";
import React from "react";
import { FC } from "react";
import styled from "styled-components";

import Input from "../../components/Input";
import Hints from "./store";

interface IBottomControl {
  countOfHint: number;
  hints: Hints;
  className?: string;
}

const BottomControl: FC<IBottomControl> = observer((props) => {
  const [searchValue, setSearchValue] = React.useState("");
  const isChoseCountry = React.useRef(false);

  const timerId = React.useRef<ReturnType<typeof setTimeout>>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isChoseCountry.current) {
      clearTimeout(timerId.current);
      props.hints.clearHints();
      isChoseCountry.current = false;
      return;
    }
    clearTimeout(timerId.current);
    setSearchValue(e.target.value);
    props.hints.clearHints();

    timerId.current = setTimeout(() => {
      props.hints.getHintsBySearch(searchValue, { limit: props.countOfHint });
    }, 500);
  };

  const choiceValue = (country: string) => {
    props.hints.clearHints();
    setSearchValue(country);
    isChoseCountry.current = true;
    setTimeout(() => {
      isChoseCountry.current = false;
    }, 1000);
  };

  return (
    <div className={`flex-col ${props.className}`}>
      <div>
        <Input value={searchValue} onChange={onChange} />
      </div>
      {props.hints.hints.map((country) => {
        return (
          <ButtonChoice className="flex items-center justify-between p-3 mt-2" onClick={() => choiceValue(country.fullName)}>
            <div>
              <div>{country.name}</div>
              <div>{country.fullName}</div>
            </div>
            <Image src={country.flag} />
          </ButtonChoice>
        );
      })}
    </div>
  );
});

export default BottomControl;

const ButtonChoice = styled.div`
  border-radius: 10px;
  border: 1px solid black;
  width: 50%;
`;

const Image = styled.img`
  height: 25px;
  width: 50px;
`;
