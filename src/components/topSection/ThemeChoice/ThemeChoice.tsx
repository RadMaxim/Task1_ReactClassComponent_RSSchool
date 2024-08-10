"use client";
import { FaRegLightbulb } from "react-icons/fa";
import classTSection from "./../TSection.module.css";
import { useState } from "react";
import { useContextAll } from "@/hooks/useContextAll";
const ThemeChoice = () => {
  
  const [stateTheme, setStateTheme] = useState<boolean>(true);
  const { setTheme } = useContextAll();
  return (
    <>
      <FaRegLightbulb
        className={classTSection.FaRegLightbulb_dark}
        onClick={() => {
          setStateTheme(!stateTheme);
          setTheme(stateTheme ? "light" : "dark");
        }}
      />
    </>
  );
};
export default ThemeChoice;
