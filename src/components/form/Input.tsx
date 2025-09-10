interface InputProps {
  type: string;
  id?: string;
  value?: string;
  placeholder?: string;
  onChange?: () => void;
}

const Input = ({ type, id, value, placeholder, onChange }: InputProps) => {
  return (
    <input
      autoComplete="off"
      type={type}
      id={id}
      className={`border-2 block w-full p-2 text-md rounded-sm
        focus:ring-blue-600 focus:border-blue-600
        focus-visible:outline-2
          bg-gray-700 border-gray-700 
         text-white placeholder-gray-400 font-light`}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
