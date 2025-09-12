export interface ButtonProps {
  text?: string;
  design?: "cancel";
  onClick?: () => void;
}

export const iconButtonStyle = `rounded-sm
text-white cursor-pointer 
flex justify-center items-center
active:bg-gray-800 hover:bg-gray-800
transition-all duration-300`;
