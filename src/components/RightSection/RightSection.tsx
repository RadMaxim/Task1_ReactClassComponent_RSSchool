"use client";

import classRightSection from "./RightSection.module.css";

import Link from "next/link";
import { useContextAll } from "@/hooks/useContextAll";

const RightSection = () => {
  
  const { details, close, setClose } = useContextAll();

  return (
    <>
      {details?.name && close && (
        <div className={classRightSection.info_main}>
          <Link
            onClick={() => {
              setClose(false);
            }}
            href="/"
            className={classRightSection.close}
          >
            +
          </Link>
          <div className={classRightSection.info_container}>
            <div className={classRightSection.name}>{details?.name}</div>
            <hr />
            <div className={classRightSection.edited}>{details?.edited}</div>
            <div className={classRightSection.birth_year}>
              {details?.birth_year}
            </div>
            <div className={classRightSection.height}>{details?.height}</div>
          </div>
        </div>
      )}
    </>
  );
};
export default RightSection;
