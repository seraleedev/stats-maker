import { BaseInputProps } from ".";
import { inputStyle } from ".";
interface InputProps extends BaseInputProps {
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = ({ id, value, placeholder, onChange, className }: InputProps) => {
  return (
    <input
      autoComplete="off"
      type="text"
      id={id}
      className={inputStyle + className}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
