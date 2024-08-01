import React from "react";
import BottomPanel from "../bottomPanel/BottomPanel";
import classBSection from "./BSection.module.css";
import Pagination from "./Pagination/Pagination";
import ElemsPag from "./Pagination/PaginatorElems/ElemsPag";
import { Outlet } from "react-router-dom";

const BSection:React.FC = () => {
  return (
    <>
      <main className={classBSection.main_content}>
        <div className={classBSection.main_container}>
          <div className={classBSection.main_container_left}>
            {/* {<Pagination />} */}
            {/* <div>{<ElemsPag />}</div> */}
          </div>
          <div className={classBSection.main_container_right}>
            {/* <Outlet /> */}
          </div>
        </div>
      </main>
      <BottomPanel />
    </>
  );
};

export default BSection;
