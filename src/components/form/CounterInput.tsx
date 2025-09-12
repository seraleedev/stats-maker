import { BaseInputProps } from ".";
import { FlexBox } from "../common";
import { RiSubtractLine, RiAddLine } from "@remixicon/react";
import { inputStyle } from ".";

interface CounterInputProps extends BaseInputProps {
  onChange?: () => void;
}

const CounterInput = ({ id, value, onChange }: CounterInputProps) => {
  const buttonStyle = `text-white cursor-pointer flex justify-center items-center`;

  return (
    <FlexBox className="w-full justify-between gap-5">
      <button type="button" className={buttonStyle}>
        <RiSubtractLine />
      </button>
      <input
        type="number"
        id={id}
        className={`${inputStyle} text-center`}
        value={value}
        onChange={onChange}
        min={5}
        max={10}
        step={1}
        placeholder="5~10까지의 수치 입력"
      />
      <button type="button" className={buttonStyle}>
        <RiAddLine />
      </button>
    </FlexBox>
  );
};

export default CounterInput;
