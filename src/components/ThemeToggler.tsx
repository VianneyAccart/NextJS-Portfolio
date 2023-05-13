"use client";
import { MdOutlineWbSunny } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggler() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div onClick={() => setTheme("light")}>
          <MdOutlineWbSunny className="nav-icon" role="button" />
        </div>
      );
    } else {
      return (
        <div onClick={() => setTheme("dark")}>
          <FiMoon className="nav-icon" role="button" />
        </div>
      );
    }
  };

  return <div>{renderThemeChanger()}</div>;
}
