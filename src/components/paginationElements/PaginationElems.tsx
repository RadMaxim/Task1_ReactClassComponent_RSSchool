"use client";

import Link from "next/link";
import classElemsPag from "./classElemsPag.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useGetTotalPageSearchQuery } from "@/store/api/api";
import Load from "../Load/Load";
const PaginationElems: React.FC = () => {
  const inputSearch = useSelector(
    (state: RootState) => state.stateEl.inputValue,
  );
  const { data, isError, isLoading } = useGetTotalPageSearchQuery({
    search: inputSearch,
  });

  const count = Math.ceil(data?.count ? data.count / 10 : 0);
  if (isLoading) {
    return <Load />;
  } else if (isError) {
    return "";
  } else {
    return (
      <>
        <ul className={classElemsPag.paginator_list}>
          {count > 0 &&
            new Array(count).fill(0).map((_, i) => {
              return (
                <Link key={i + 1} href={`/numPages/${i + 1}`}>
                  <li>{i + 1}</li>
                </Link>
              );
            })}
        </ul>
      </>
    );
  }
};
export default PaginationElems;
