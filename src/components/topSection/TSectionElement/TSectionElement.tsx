"use client";
import { AiFillDatabase } from "react-icons/ai";
import classTSection from "./../TSection.module.css";
import Link from "next/link";
import { useContext, useEffect, useRef } from "react";
import { AllContextApp } from "../../../../app/ContextForApp";
import { button_click } from "../ButtonsEvents/ButtonsEvents";
import { useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import ThemeChoice from "../ThemeChoice/ThemeChoice";
import { useContextAll } from "@/hooks/useContextAll";
const TSectionElement = () => {
  const dispatch = useDispatch();
 
  const { theme, elementsLike } = useContextAll();

  const inputs = useRef<HTMLInputElement>(null);
  const valueInput = useSelector((elem: RootState) => elem.stateEl.inputValue);
  useEffect(() => {
    inputs.current?.setAttribute("value", valueInput || "");
  }, [valueInput]);

  return (
    <>
      <header id="id1" className={classTSection.main_header}>
        <div className={classTSection.icons}>
          <ThemeChoice />
        </div>
        <div className={classTSection.list}>
          <Link href={"/magazin"}>
            <AiFillDatabase className={classTSection.AiFillDatabase} />
          </Link>
          <div className={classTSection.circle}>{elementsLike.length}</div>
        </div>
        <div className={classTSection.header_container}>
          <h1
            className={
              theme == "dark" ? classTSection.dark_h1 : classTSection.light_h1
            }
          >
            Search Information
          </h1>
          <form className={classTSection.form}>
            <input
              className={
                theme == "light"
                  ? classTSection.formInputLight
                  : classTSection.formInputDark
              }
              type="text"
              placeholder="Search"
              ref={inputs}
            />
            <Link
              className={
                theme == "light"
                  ? classTSection.searchLight
                  : classTSection.searchDark
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
export default TSectionElement;
