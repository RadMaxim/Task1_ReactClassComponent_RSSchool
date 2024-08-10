import { ForLoad } from "@/All_Interface/ButtonsEvents";
import { stateTSection } from "@/All_Interface/TopSection";
import { setInputValues } from "@/store/counterSlice";
import React, { ChangeEvent } from "react";
import { Dispatch, UnknownAction } from "redux";

const button_err = ({ states, setStates }: ForLoad) => {
  if (states) {
    setStates({ ...states, err: false });
  }
};
export function setInputValue(
  e: ChangeEvent<HTMLInputElement>,
  setStates: React.Dispatch<React.SetStateAction<stateTSection | null>>,
  states: stateTSection | null,
) {
  if (states) {
    setStates({ ...states, inputVal: e.target.value });
  }
}
const button_click = (
  dispatch: Dispatch<UnknownAction>,
  valueInput: string,
) => {
  try {
    dispatch(setInputValues(valueInput.toLowerCase() || ""));
  } catch (error) {
    console.log(error);
  }
};

export { button_err, button_click };
