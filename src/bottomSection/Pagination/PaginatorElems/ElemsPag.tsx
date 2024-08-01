"use client"
// import { Link, useSearchParams } from "react-router-dom";
import classElemsPag from "./ElemsPag.module.css";
import { useGetFilterDataAboutOurCardsQuery } from "../../../store/api/api";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import Load from "../../../Load/Load";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const ElemsPag:React.FC = () => {
  // const [searchParams] = useSearchParams();
  const {query} = useRouter()
  const page = Number(query.page) || 1;
  const inputValue = useSelector((elem: RootState) => elem.stateEl.inputValue);
  const { data, isLoading } = useGetFilterDataAboutOurCardsQuery({
    search: inputValue,
    page: page,
  });

  if (data?.count) {
    const countElem = Math.ceil(data?.count / 10);

    return (
      <>
        <ul className={classElemsPag.paginator_list}>
          {countElem > 0 &&
            new Array(countElem).fill(0).map((_, i) => {
              return (
                <Link key={i + 1} href={`/?search=${inputValue}&page=${i + 1}`}>
                  <li>{i + 1}</li>
                </Link>
              );
            })}
        </ul>
      </>
    );
  } else if (isLoading) {
    return <Load />;
  } else {
    return <h1>Error...</h1>;
  }
};
export default ElemsPag;
