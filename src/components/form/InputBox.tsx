import { ReactNode } from "react";
import { FlexBox } from "../common";

interface InputBoxProps {
  labelName: string;
  labelId: string;
  components?: ReactNode;
}

const InputBox = ({ labelName, labelId, components }: InputBoxProps) => {
  return (
    <FlexBox align="start" className="mb-3 flex-col">
      <label className="text-white font-medium mb-2" htmlFor={labelId}>
        {labelName}
      </label>
      {components}
    </FlexBox>
  );
};

export default InputBox;
