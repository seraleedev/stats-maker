import { BaseInputProps } from ".";
import { FlexBox } from "../common";

interface RangeInputProps extends BaseInputProps {
  maxStat?: number;
}
const RangeInput = ({ id, value, onChange, maxStat }: RangeInputProps) => {
  return (
    <div className="w-full">
      <FlexBox className="justify-between w-full">
        <span className="text-white">1</span>
        <span className="text-white">10</span>
      </FlexBox>

      <input
        type="range"
        className={`w-full cursor-pointer 
      focus:outline-none
     `}
        id={id}
        value={value}
        onChange={onChange}
        step={1}
        min={1}
        max={10}
      />
    </div>
  );
};

export default RangeInput;
