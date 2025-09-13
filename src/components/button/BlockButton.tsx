import { ButtonProps } from "@/components/button";

import { FlexBox } from "../common";

const BlockButton = ({
  text,
  onClick,
  design,
  icon,
  className,
}: ButtonProps) => {
  const primaryStyle = `bg-blue-600 hover:bg-blue-800 active:ring-blue-300 text-white`;
  const cancelStyle = `bg-gray-300 hover:bg-gray-400 active:ring-gray-200 text-gray-600 `;
  return (
    <button
      onClick={onClick}
      type="button"
      className={`group
         block w-full cursor-pointer rounded-sm
         px-5 py-2
         font-medium text-md text-center
         me-2 mb-2
         focus:outline-none active:ring-2
         ${design == "cancel" ? cancelStyle : primaryStyle}
         ${className}
        `}
    >
      <FlexBox className="justify-center gap-2">
        {icon} {text}
      </FlexBox>
    </button>
  );
};

export default BlockButton;
