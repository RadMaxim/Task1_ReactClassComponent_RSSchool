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
  filterArray: JSON.parse(localStorage.getItem("filter_elem") || "[]"),
  inputValue: localStorage.getItem("input_value") || null,
  savedElem: JSON.parse(localStorage.getItem("ListPeople") || "[]"),
  countSave: Number(localStorage.getItem("count")) || 0,
};
const counterSlice = createSlice({
  name: "stateEl",
  initialState,
  reducers: {
    setRightSection: (state, action: PayloadAction<ElementType>) => {
      state.initialState = { ...action.payload };
    },

    setFilterCards: (state, action: PayloadAction<ElementType[]>) => {
      state.filterArray = [...action.payload];
      localStorage.setItem("filter_elem", JSON.stringify(state.filterArray));
    },
    setInputValues: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
      localStorage.setItem("input_value", state.inputValue);
    },
    saveElements: (state, action: PayloadAction<ElementType>) => {
      if (
        !state.savedElem.map((elem) => elem.name).includes(action.payload.name)
      ) {
        const arr = [...state.savedElem, action.payload];
        state.savedElem = arr;
        localStorage.setItem("ListPeople", JSON.stringify(state.savedElem));
        console.log("save");
        state.countSave = state.savedElem.length;
        localStorage.setItem("count", String(state.countSave));
        console.log(state.savedElem);
      } else {
        console.log("it is");
      }
    },
    removeElements: (state, action: PayloadAction<ElementType>) => {
      state.savedElem = state.savedElem.filter(
        (elem) => elem.name !== action.payload.name,
      );
      localStorage.setItem("ListPeople", JSON.stringify(state.savedElem));
      state.countSave = state.savedElem.length;
      console.log("remove");
      console.log(state.savedElem);
      localStorage.setItem("count", String(state.countSave));
    },
    setCountSave: (state, action: PayloadAction<number>) => {
      state.countSave = action.payload;
    },
    removeAllElements: (state) => {
      state.savedElem = [];
    },
  },
});

export const {
  setRightSection,
  setFilterCards,
  setInputValues,
  saveElements,
  removeElements,
  setCountSave,
  removeAllElements,
} = counterSlice.actions;

export default counterSlice.reducer;
