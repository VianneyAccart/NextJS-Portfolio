import ThemeToggler from "./ThemeToggler";
import Image from "next/image";
import i18n from "i18next";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle, AiOutlineMail } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 md:px-12">
      <div className="flex gap-3">
        <BsGithub className="nav-icon" role="button" />
        <AiFillTwitterCircle className="nav-icon" role="button" />
        <BsLinkedin className="nav-icon" role="button" />
        <AiOutlineMail className="nav-icon" role="button" />
      </div>
      <div className="flex gap-4">
        <ThemeToggler />
        <div>
          <Image
            className="cursor-pointer transform transition duration-500 hover:scale-110 h-auto w-6"
            src="/french_flag.png"
            alt="French flag"
            width={25}
            height={20}
            onClick={() => i18n.changeLanguage("fr")}
          />
        </div>
        <div>
          <Image
            className="cursor-pointer transform transition duration-500 hover:scale-110 h-auto w-6"
            src="/english_flag.png"
            alt="English flag"
            width={25}
            height={20}
            onClick={() => i18n.changeLanguage("en")}
          />
        </div>
      </div>
    </nav>
  );
}
