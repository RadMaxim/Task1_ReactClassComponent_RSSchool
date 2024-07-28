import React, { createContext } from "react";
import { ElementType } from "../All_Interface/BottomSection";
interface ElemContextType {
  stateElem: ElementType | null;
  setStateElem: React.Dispatch<React.SetStateAction<ElementType | null>>;
}
interface PageOfElementsI {
  pageOfElem: ElementType[] | null;
  setPageOfElem: React.Dispatch<React.SetStateAction<ElementType[] | null>>;
}
interface All_Elem {
  all_elem: ElementType[][] | null;
  setAllElem: React.Dispatch<React.SetStateAction<ElementType[][] | null>>;
}
interface Data {
  valueSearch: string;
  page: number;
}
interface URL_Interface {
  data: Data | null;
  setData: React.Dispatch<React.SetStateAction<Data | null>>;
}
export const DescriptionAboutElement = createContext<ElemContextType | null>(
  null,
);
interface Set_Theme {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}
export const PageOfElements = createContext<PageOfElementsI | null>(null);
export const All_Elements = createContext<All_Elem | null>(null);
export const DataForURL = createContext<URL_Interface | null>(null);
export const Theme = createContext<Set_Theme | null>(null);
