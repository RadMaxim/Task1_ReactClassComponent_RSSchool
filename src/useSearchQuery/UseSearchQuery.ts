import React, { useState, useEffect } from "react";
import { ElementType } from "../All_Interface/BottomSection";

interface ReciveValue {
  searchQuery: ElementType[];
  setSearchQuery: React.Dispatch<React.SetStateAction<ElementType[]>>;
}
function useSearchQuery(key: string, value: string): ReciveValue {
  console.log(value);
  console.log("1");
  const [searchQuery, setSearchQuery] = useState(() => {
    console.log("2");
    const savedQuery = localStorage.getItem(key);

    return savedQuery != null ? JSON.parse(savedQuery) : value;
  });
  console.log("4");
  useEffect(() => {
    return () => {
      console.log("3");

      localStorage.setItem(key, JSON.stringify(searchQuery));
    };
  }, []);

  return { searchQuery, setSearchQuery };
}

export default useSearchQuery;
