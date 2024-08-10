"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ElementType } from "../All_Interface/BottomSection";

export interface AllInterfaces {
  initialState: ElementType | null;
  filterArray: ElementType[] | [];
  inputValue: string | null;
  savedElem: ElementType[];
  countSave: number;
}

const initialState: AllInterfaces = {
  initialState: {
    birth_year: "",
    created: "",
    edited: "",
    eye_color: "",
    films: [],
    gender: "",
    hair_color: "",
    height: "",
    homeworld: "",
    mass: "",
    name: "",
    skin_color: "",
    url: "",
    vehicles: "",
    choice: false,
  },
  filterArray:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("filter_elem") || "[]")
      : [],
  inputValue:
    typeof window !== "undefined" ? localStorage.getItem("input_value") : null,
  savedElem:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("ListPeople") || "[]")
      : [],
  countSave:
    typeof window !== "undefined" ? Number(localStorage.getItem("count")) : 0,
};
const counterSlice = createSlice({
  name: "stateEl",
  initialState,
  reducers: {
   

    setFilterCards: (state, action: PayloadAction<ElementType[]>) => {
      state.filterArray = [...action.payload];
      typeof window !== "undefined" &&
        localStorage.setItem("filter_elem", JSON.stringify(state.filterArray));
    },
    setInputValues: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
      typeof window !== "undefined" &&
        localStorage.setItem("input_value", state.inputValue);
    },
   
    
   
   
  },
});

export const {

  setFilterCards,
  setInputValues,
} = counterSlice.actions;

export default counterSlice.reducer;
