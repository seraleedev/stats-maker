import { ReactNode } from "react";
import { FlexBox } from "../common";
import Input from "./Input";

interface InputBoxProps {
  key?: React.Key;
  labelName: string;
  labelId: string;
  components?: ReactNode;
  className?: string;
  editable?: boolean;
  setLabel?: React.Dispatch<React.SetStateAction<string>>;
}

const InputBox = ({
  labelName,
  labelId,
  components,
  className,
  editable,
  setLabel,
}: InputBoxProps) => {
  return (
    <FlexBox align="start" className={`mb-3 flex-col ${className}`}>
      {editable ? (
        <div className="mb-3 w-full">
          <Input
            value={labelName}
            onChange={() => setLabel && setLabel(labelName)}
          />
        </div>
      ) : (
        <label className="text-white font-medium mb-2" htmlFor={labelId}>
          {labelName}
        </label>
      )}

      {components}
    </FlexBox>
  );
};

export default InputBox;
