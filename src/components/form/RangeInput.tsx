import { BaseInputProps } from ".";
import { FlexBox } from "../common";
import { Dispatch } from "react";

interface RangeInputProps extends BaseInputProps {
  labelList: number[];

  setState: Dispatch<React.SetStateAction<number>>;
}
const RangeInput = ({ id, value, labelList, setState }: RangeInputProps) => {
  const onChangeStatData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(e.target.value);
    setState(index);
  };

  return (
    <div className="w-full">
      <FlexBox className="justify-between w-full">
        {labelList.map((label, index) => (
          <span
            key={`max-${index}`}
            className="text-white text-center min-w-5 block"
          >
            {label}
          </span>
        ))}
      </FlexBox>

      <input
        type="range"
        className={`w-full cursor-pointer 
      focus:outline-none
     `}
        id={id}
        value={value}
        onChange={onChangeStatData}
        step={1}
        min={0}
        max={labelList.length - 1}
      />
    </div>
  );
};

export default RangeInput;
