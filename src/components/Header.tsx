import ThemeToggler from "./ThemeToggler";
import Image from "next/image";
import i18n from "i18next";

import { useEffect, useState } from "react";

const LangToggler = ({
  src,
  alt,
  lang,
}: {
  src: string;
  alt: string;
  lang: string;
}) => {
  return (
    <Image
      className="cursor-pointer transform transition duration-500 hover:scale-110 h-auto w-6"
      src={src}
      alt={alt}
      width={25}
      height={20}
      onClick={() => i18n.changeLanguage(lang)}
    />
  );
};

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const threshold = 50;
      setIsSticky(scrollTop > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-100 ${
        isSticky && " backdrop-blur-lg backdrop-opacity-100 shadow-xs"
      } ${!isSticky && "bg-transparent"}`}
    >
      <nav className="flex justify-between items-center py-5 px-6 md:px-12">
        <ThemeToggler />
        <div className="flex gap-4">
          <LangToggler src="/french_flag.png" alt="French flag" lang="fr" />
          <LangToggler src="/english_flag.png" alt="English flag" lang="en" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
