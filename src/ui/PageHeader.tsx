import { Divider } from "@nextui-org/react";
import AnimatedButton from "./AnimatedButton";
import { useLocation } from "react-router-dom";
import ToggleDarkMode from "./ToggleDarkMode";
import { useToggleDarkMode } from "../context/useToggleDarkMode";

const PageHeader = () => {
  const { pathname } = useLocation();
  const { selected } = useToggleDarkMode();

  const title =
    pathname === "/company"
      ? "Company"
      : pathname === "/products"
      ? "Products"
      : pathname === "/press-release"
      ? "Press Release"
      : pathname === "/careers"
      ? "Careers"
      : pathname === "/support"
      ? "Support"
      : "";
  return (
    <div className="hidden sticky w-full sm:flex flex-col justify-center items-start  gap-4 sm:gap-6">
      <div className="w-full flex justify-between items-center">
        <AnimatedButton size="xl" path="/">
          Epos Software
        </AnimatedButton>
        <ToggleDarkMode />
      </div>

      <Divider />
      <h1
        className={`font-bold ${
          selected === "light" ? "text-slate-900" : "text-slate-100"
        } duration-150 transition-all text-lg sm:text-2xl px-2`}
      >
        {title}
      </h1>
    </div>
  );
};

export default PageHeader;
