import { BaseInputProps } from ".";
import { FlexBox } from "../common";
import { RiSubtractLine, RiAddLine } from "@remixicon/react";
import { inputStyle } from ".";

const CounterInput = ({ id, value, onChange }: BaseInputProps) => {
  const buttonStyle = `text-white cursor-pointer flex justify-center items-center`;

  return (
    <FlexBox className="w-full justify-between gap-5">
      <button type="button" className={buttonStyle}>
        <RiSubtractLine />
      </button>
      <input
        type="number"
        id={id}
        className={`${inputStyle}`}
        value={value}
        onChange={onChange}
        min={1}
        max={10}
        step={1}
      />
      <button type="button" className={buttonStyle}>
        <RiAddLine />
      </button>
    </FlexBox>
  );
};

export default CounterInput;
