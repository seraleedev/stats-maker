import { ReactNode } from "react";
import { FlexBox } from "../common";

interface InputBoxProps {
  labelName: string;
  labelId: string;
  components?: ReactNode;
}

const InputBox = ({ labelName, labelId, components }: InputBoxProps) => {
  return (
    <FlexBox direction="col" align="start" className="mb-3">
      <label className="text-white font-medium mb-2" htmlFor={labelId}>
        {labelName}
      </label>
      {components}
    </FlexBox>
  );
};

export default InputBox;
