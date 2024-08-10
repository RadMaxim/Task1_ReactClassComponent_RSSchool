
"use client"
import { useContext } from "react";
import { AllContextApp } from "../../app/ContextForApp";

export const useContextAll = () => {
    const context = useContext(AllContextApp);
  if (!context) {
    throw new Error("mistake");
    
  }
    return context;
  };