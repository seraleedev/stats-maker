import { BaseInputProps } from ".";
import { FlexBox } from "../common";
import { RiSubtractLine, RiAddLine } from "@remixicon/react";
import { inputStyle } from ".";
import IconButton from "../button/iconButton";

interface CounterInputProps extends BaseInputProps {
  index: number;
  min: number;
  max: number;
  className?: string;
  onChangeStat?: (value: number, index: number) => void;
}

const CounterInput = ({
  id,
  value,
  min,
  max,
  className,
  onChangeStat,
  index,
}: CounterInputProps) => {
  const controlValue = (action: "decrease" | "increase") => {
    const val = Number(value);
    if (onChangeStat) {
      let result = val;
      if (action === "decrease") {
        result = val <= min ? val : val - 1;
      }
      if (action === "increase") {
        result = val >= max ? val : val + 1;
      }
      onChangeStat(result, index);
    }
  };

  const onChangeStatString = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value);
    if (value < min) value = min;
    if (value > max) value = max;
    if (onChangeStat) {
      onChangeStat(value, index);
    }
  };

  return (
    <FlexBox className={`w-full justify-between gap-1 ${className}`}>
      <IconButton
        icon={<RiSubtractLine />}
        onClick={() => controlValue("decrease")}
      />

      <input
        type="number"
        id={id}
        className={`${inputStyle} text-center`}
        value={value || ""}
        onChange={onChangeStatString}
        min={min}
        max={max}
        step={1}
        placeholder={`1`}
      />

      <IconButton
        icon={<RiAddLine />}
        onClick={() => controlValue("increase")}
      />
    </FlexBox>
  );
};

export default CounterInput;
