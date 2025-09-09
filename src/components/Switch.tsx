import { FlexBox } from "./common";

interface ISwitch {
  text: string;
}
const Switch = ({ text }: ISwitch) => {
  return (
    <FlexBox justify="center" className="gap-x-3">
      <p className="text-base text-white">{text}</p>
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
      </label>
    </FlexBox>
  );
};

export default Switch;
