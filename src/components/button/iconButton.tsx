import { iconButtonStyle } from ".";

interface IconButtonProps {
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
  toggle?: boolean;
  toggledIcon?: React.ReactNode;
}

const IconButton = ({
  icon,
  onClick,
  className,
  toggle,
  toggledIcon,
}: IconButtonProps) => {
  return (
    <button
      type="button"
      className={iconButtonStyle + className}
      onClick={onClick}
    >
      {toggle ? toggledIcon : icon}
    </button>
  );
};

export default IconButton;
