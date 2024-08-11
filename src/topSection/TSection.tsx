"use client";
import * as React from "react";
import classTSection from "./TSection.module.css";
import { button_click } from "./ButtonsEvents/ButtonsEvents";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaRegLightbulb } from "react-icons/fa";
import { Theme } from "../ContextForApp/ContextForApp";
import { AiFillDatabase } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { saveElements, setCountSave, setFilterCards, setInputValues } from '../store/counterSlice';
import Link from "next/link";

const TSection = () => {
  
  const dispatch = useDispatch();
  const inputs = React.useRef<HTMLInputElement>(null);
  const context = React.useContext(Theme);
  const select = useSelector((elem: RootState) => elem.stateEl.countSave);
  if (!context) {
    throw new Error("not context!");
  }
  const { theme, setTheme } = context;
  React.useEffect(()=>{
    if (typeof window !=="undefined") {
      
    
      dispatch(setFilterCards(JSON.parse(localStorage.getItem("filter_elem") || "[]")))
      dispatch(setInputValues(localStorage.getItem("input_value") || ""))
      dispatch(saveElements(JSON.parse(localStorage.getItem("ListPeople") || "[]")))
      dispatch(setCountSave(Number(localStorage.getItem("count")) || 0))}
  },[])
  React.useEffect(() => {
    try {
      inputs.current?.setAttribute(
        "value",
        localStorage.getItem("input_value") || "",
      );
    } catch {
      throw new Error("TSection");
    }
  }, []);

  return (
    <>
      <header id="id1" className={classTSection.main_header}>
        <div className={classTSection.icons}>
          <FaRegLightbulb
            className={classTSection.FaRegLightbulb_dark}
            onClick={() => setTheme(!theme)}
          />
        </div>

        <div className={classTSection.list}>
          <Link href={"/magazin"}>
            <AiFillDatabase className={classTSection.AiFillDatabase} />
          </Link>
          <div className={classTSection.circle}>{select}</div>
        </div>
        <div className={classTSection.header_container}>
          <h1
            className={theme ? classTSection.dark_h1 : classTSection.light_h1}
          >
            Search Information
          </h1>
          <form className={classTSection.form}>
            <input
              className={
                theme
                  ? classTSection.formInputLight
                  : classTSection.formInputDark
              }
              ref={inputs}
              type="text"
              placeholder="Search"
            />
            <Link
              className={
                theme ? classTSection.searchLight : classTSection.searchDark
              }
             href={`/?search=${inputs.current?.value || ""}`}
              onClick={() =>
                button_click(dispatch, inputs.current?.value || "")
              }
            >
              Seacrh
            </Link>
          </form>
        </div>
      </header>
    </>
  );
};

export default TSection;
