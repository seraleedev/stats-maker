import { ButtonProps } from ".";
import { RiDownloadFill, RiResetLeftLine } from "@remixicon/react";
import { FlexBox } from "../common";

const Button = ({ text, onClick, design }: ButtonProps) => {
  const primaryStyle = `bg-blue-600 hover:bg-blue-800 active:ring-blue-300 text-white`;
  const cancelStyle = `bg-gray-300 hover:bg-gray-400 active:ring-gray-200 text-gray-600 `;
  return (
    <button
      onClick={onClick}
      type="button"
      className={` 
         block w-full cursor-pointer rounded-sm
         px-5 py-2
         font-medium text-md text-center
         me-2 mb-2
         focus:outline-none active:ring-2
         ${design == "cancel" ? cancelStyle : primaryStyle}
        `}
    >
      <FlexBox className="justify-center gap-2">
        {design == "cancel" ? <RiResetLeftLine /> : <RiDownloadFill />}

        {text}
      </FlexBox>
    </button>
  );
};

export default Button;
