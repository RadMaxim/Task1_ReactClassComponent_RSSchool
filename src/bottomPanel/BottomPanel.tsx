import { useSelector } from "react-redux";
import classBottomPanel from "./BottomPanel.module.css";
import { RootState } from "../store/store";
import { useDispatch } from "react-redux";
import { removeAllElements, setCountSave } from "../store/counterSlice";
import { IoMdDownload } from "react-icons/io";
import { FaAnglesUp } from "react-icons/fa6";
import { useContext } from "react";
import { Theme } from "../ContextForApp/ContextForApp";
import { saveAs } from "file-saver";
import { ElementType } from "../All_Interface/BottomSection";
const handlerEventButton = (allChoice: ElementType[]) => {
  const saveDataForFile = allChoice
    .map((elem) => {
      const newElem = Object.values(elem).join(", ");
      return newElem;
    })
    .join("\n");
  const blob = new Blob([saveDataForFile], { type: "text/csv;charset=utf-8;" });

  saveAs(blob, `${allChoice.length}_save.csv`);
  console.log("save");
};
const BottomPanel = () => {
  const allChoice = useSelector((items: RootState) => items.stateEl.savedElem);
  const dispatch = useDispatch();
  const context = useContext(Theme);
  if (!context) {
    throw new Error("mistake");
  }
  const { theme } = context;
  return (
    <>
      <div
        className={classBottomPanel.main_panel}
        id={
          allChoice.length > 0
            ? classBottomPanel.active
            : classBottomPanel.noActive
        }
      >
        <div className={classBottomPanel.panel_container}>
          <div className={classBottomPanel.left}>
            <button
              onClick={() => {
                localStorage.setItem("ListPeople", "[]");
                dispatch(removeAllElements());
                dispatch(setCountSave(0));
                localStorage.setItem("count", String(0));
              }}
            >
              Unselect all
            </button>
          </div>
          <div className={classBottomPanel.center}>
            <p>{allChoice.length} item is selected</p>
          </div>
          <div className={classBottomPanel.right}>
            <IoMdDownload
              onClick={() => handlerEventButton(allChoice)}
              className={classBottomPanel.IoMdDownload}
            />
          </div>
        </div>
        <a href="#id1">
          <FaAnglesUp
            id={theme ? classBottomPanel.black : classBottomPanel.white}
            className={classBottomPanel.FaAnglesUp}
          />
        </a>
      </div>
    </>
  );
};
export default BottomPanel;
