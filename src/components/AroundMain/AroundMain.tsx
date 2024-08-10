"use client";
import React from "react";
import classAroundMain from "./classAroundMain.module.css";

import { useContextAll } from "@/hooks/useContextAll";

const AroundMain = ({ children }: any) => {
  
  const { theme } = useContextAll();
  return (
    <div
      className={
        theme == "light"
          ? classAroundMain.aroundMain_dark
          : classAroundMain.aroundMain_light
      }
    >
      {children}
    </div>
  );
};
export default AroundMain;
