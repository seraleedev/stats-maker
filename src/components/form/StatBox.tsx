import { FlexBox } from "../common";
import { ReactNode } from "react";

interface StatBoxProps {
  components?: ReactNode;
  className?: string;
}

const StatBox = ({ components, className }: StatBoxProps) => {
  return (
    <FlexBox align="start" className={`mb-3 ${className} gap-2`}>
      {components}
    </FlexBox>
  );
};

export default StatBox;
