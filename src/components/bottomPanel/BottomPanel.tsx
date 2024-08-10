"use client";

import classBottomPanel from "./BottomPanel.module.css";

import { saveAs } from "file-saver";
import { IoMdDownload } from "react-icons/io";
import { FaAnglesUp } from "react-icons/fa6";
import React from "react";
import { ElementType } from "@/All_Interface/BottomSection";
import { useContextAll } from "@/hooks/useContextAll";
const handlerEventButton = (allChoice: ElementType[]) => {
  const saveDataForFile = allChoice
    .map((elem) => {
      const newElem = Object.values(elem).join(", ");
      return newElem;
    })
    .join("\n");
  const blob = new Blob([saveDataForFile], { type: "text/csv;charset=utf-8;" });

  saveAs(blob, `${allChoice.length}_save.csv`);
};
const BottomPanel: React.FC = () => {
 
  const { setElementsLike, elementsLike, theme } = useContextAll();

  return (
    <>
      <div
        className={classBottomPanel.main_panel}
        id={
          elementsLike.length > 0
            ? classBottomPanel.active
            : classBottomPanel.noActive
        }
      >
        <div className={classBottomPanel.panel_container}>
          <div className={classBottomPanel.left}>
            <button
              onClick={() => {
                localStorage.setItem("favoritesElements", "[]");
                setElementsLike([]);
              }}
            >
              Unselect all
            </button>
          </div>
          <div className={classBottomPanel.center}>
            <p>{elementsLike.length} item is selected</p>
          </div>
          <div className={classBottomPanel.right}>
            <IoMdDownload
              onClick={() => handlerEventButton(elementsLike)}
              className={classBottomPanel.IoMdDownload}
            />
          </div>
        </div>
        <a href="#id1">
          <FaAnglesUp
            id={
              theme == "dark" ? classBottomPanel.black : classBottomPanel.white
            }
            className={classBottomPanel.FaAnglesUp}
          />
        </a>
      </div>
    </>
  );
};
export default BottomPanel;
