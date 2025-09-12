import { BaseInputProps } from ".";
import { FlexBox } from "../common";
import { RiSubtractLine, RiAddLine } from "@remixicon/react";
import { inputStyle } from ".";

import { Dispatch } from "react";

interface CounterInputProps extends BaseInputProps {
  setState: Dispatch<React.SetStateAction<number>>;
}

const CounterInput = ({ id, value, setState }: CounterInputProps) => {
  const buttonStyle = `text-white cursor-pointer flex justify-center items-center active:bg-gray-800`;

  const controlValue = (action: "decrease" | "increase") => {
    const val = Number(value);

    // if (action === "decrease") {
    //   setState(val == initialMaxStat.min ? val : val - initialMaxStat.min);
    // }
    // if (action === "increase") {
    //   setState(val == initialMaxStat.max ? val : val + initialMaxStat.min);
    // }
  };

  return (
    <FlexBox className="w-full justify-between gap-5">
      <button
        type="button"
        className={buttonStyle}
        onClick={() => controlValue("decrease")}
      >
        <RiSubtractLine />
      </button>
      <input
        type="number"
        id={id}
        className={`${inputStyle} text-center`}
        value={value}
        readOnly
        min={1}
        max={10}
        step={5}
        placeholder={`${1} ~ ${10}까지의 수치 입력`}
      />
      <button
        type="button"
        className={buttonStyle}
        onClick={() => controlValue("increase")}
      >
        <RiAddLine />
      </button>
    </FlexBox>
  );
};

export default CounterInput;
