import React from "react";
import { FC } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

interface IFirstControl {}

const TopControls: FC<IFirstControl> = (props) => {
  const [firstControlValue, setFirstControlValue] = React.useState("");
  const [secondControlValue, setSecondControlValue] = React.useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, cb: React.Dispatch<React.SetStateAction<string>>) => {
    cb(e.target.value);
  };

  const isNumberValue = (value: string) => value && !isNaN(Number(value)) && alert(secondControlValue);

  return (
    <>
      <div className="flex gap-2">
        <Input value={firstControlValue} onChange={(e) => onChange(e, setFirstControlValue)} />
        <Button title="Очистить" callback={() => setFirstControlValue("")} />
        <Button title="Привет, мир!" callback={() => setFirstControlValue("Hello World!")} />
      </div>
      <div className="flex gap-2 mt-4">
        <Button title="Число ?" callback={() => isNumberValue(secondControlValue)} />
        <Input value={secondControlValue} onChange={(e) => onChange(e, setSecondControlValue)} />
        <Button title="Показать что лежит" callback={() => alert(secondControlValue)} />
      </div>
    </>
  );
};

export default TopControls;
