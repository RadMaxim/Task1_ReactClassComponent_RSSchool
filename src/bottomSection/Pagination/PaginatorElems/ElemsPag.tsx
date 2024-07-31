import { Link, useSearchParams } from "react-router-dom";
import classElemsPag from "./ElemsPag.module.css";
import { useGetFilterDataAboutOurCardsQuery } from "../../../store/api/api";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import Load from "../../../Load/Load";
import React from "react";
const ElemsPag:React.FC = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
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
                <Link key={i + 1} to={`/?search=${inputValue}&page=${i + 1}`}>
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
