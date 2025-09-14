import { RiGithubFill, RiMessage3Fill } from "@remixicon/react";

const Footer = () => {
  return (
    <footer className="w-full pt-3 pb-5 flex justify-center align-center">
      <a
        className="w-[40px] h-[40px] mr-2"
        href="https://github.com/seraleedev/stats-maker"
        target="_blank"
        rel="noreferrer"
        title="source code repository"
      >
        <RiGithubFill
          size={40}
          className="text-gray-400 hover:text-gray-200 transition-all duration-300"
        />
      </a>

      <a
        className="w-[40px] h-[40px] "
        href="https://open.kakao.com/o/sxEs8kCd"
        target="_blank"
        rel="noreferrer"
        title="카카오톡 문의"
      >
        <RiMessage3Fill
          size={40}
          className="text-gray-400 hover:text-gray-200 transition-all duration-300"
        />
      </a>
    </footer>
  );
};
export default Footer;
