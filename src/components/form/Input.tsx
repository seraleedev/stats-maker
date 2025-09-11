import { BaseInputProps } from ".";
import { inputStyle } from ".";
interface InputProps extends BaseInputProps {
  placeholder?: string;
}

const Input = ({ id, value, placeholder, onChange }: InputProps) => {
  return (
    <input
      autoComplete="off"
      type="text"
      id={id}
      className={inputStyle}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
