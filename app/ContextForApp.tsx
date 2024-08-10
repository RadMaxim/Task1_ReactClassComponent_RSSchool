"use client";
import { ElementType } from "@/All_Interface/BottomSection";
import React, { createContext, useEffect, useState } from "react";
interface AppContextType {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  numPage: number;
  setNumPage: React.Dispatch<React.SetStateAction<number>>;
  details: ElementType | null;
  setDetails: React.Dispatch<React.SetStateAction<ElementType | null>>;
  elementsLike: ElementType[];
  setElementsLike: React.Dispatch<React.SetStateAction<ElementType[]>>;
  close: boolean;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
  filterElements:ElementType[]|[];
  setFilterElements:React.Dispatch<React.SetStateAction<ElementType[]|[]>>;
  value:string|null;
  setValue:React.Dispatch<React.SetStateAction<string|null>>;
}
export const AllContextApp = createContext<AppContextType | null>(null);

const ContextForAppClient = ({ children }: any) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [numPage, setNumPage] = useState<number>(1);
  const [details, setDetails] = useState<ElementType | null>(null);
  const [close, setClose] = useState<boolean>(true);
  const [elementsLike, setElementsLike] = useState<ElementType[]|[]>(

    typeof window!==undefined?
    JSON.parse(localStorage.getItem("favoritesElements")||"[]"):[]
  );
  const [value, setValue] = useState<string|null>("")
  const [filterElements,setFilterElements ] = useState<ElementType[]|[]>([])
 
  useEffect(()=>{
    localStorage.setItem("favoritesElements", JSON.stringify(elementsLike));
    localStorage.setItem("input_value",String(value))
    
  },[elementsLike, value])
  const allValue = {
    theme,
    setTheme,
    numPage,
    setNumPage,
    details,
    setDetails,
    close,
    setClose,
    elementsLike,
    setElementsLike,
    filterElements,
    setFilterElements,
    value,
    setValue
  };
  return (
    <>
      <AllContextApp.Provider value={allValue}>
        {children}
      </AllContextApp.Provider>
    </>
  );
};
export default ContextForAppClient;
