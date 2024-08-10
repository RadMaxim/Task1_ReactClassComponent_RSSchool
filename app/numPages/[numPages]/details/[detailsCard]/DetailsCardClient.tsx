"use client";
import { useSelector } from "react-redux";
import classRightSection from "./classDetailsCard.module.css";
import { RootState } from "@/store/store";

const DetailsCardClient = () => {
  const stElem = useSelector((state: RootState) => state.stateEl.initialState);
  return (
    <>
      <div className={classRightSection.name}>{stElem?.name}</div>
      <hr />
      <div className={classRightSection.edited}>{stElem?.edited}</div>
      <div className={classRightSection.birth_year}>{stElem?.birth_year}</div>
      <div className={classRightSection.height}>{stElem?.height}</div>
    </>
  );
};
export default DetailsCardClient;
