import { RiGithubFill } from "@remixicon/react";

const Footer = () => {
  return (
    <footer className="w-full pt-3 pb-5 flex justify-center align-center ">
      <a
        className="w-[40px] h-[40px] "
        href="https://github.com/seraleedev/stats-maker"
        target="_blank"
        rel="noreferrer"
      >
        <RiGithubFill
          size={40}
          className="text-gray-400 hover:text-gray-200 transition-all duration-300"
        />
      </a>
    </footer>
  );
};
export default Footer;
