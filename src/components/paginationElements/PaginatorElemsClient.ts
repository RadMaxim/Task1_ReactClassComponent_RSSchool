"use client";

import { useContextAll } from "@/hooks/useContextAll";

import { useGetFilterDataAboutOurCardsQuery } from "@/store/api/api";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const PaginatorElemsClient = () => {
  const inputValue = useSelector(
    (state: RootState) => state.stateEl.inputValue,
  );
  const { numPage } = useContextAll();
  const { data} = useGetFilterDataAboutOurCardsQuery({
    search: inputValue,
    page: numPage,
  });

  return Math.ceil(Number(data?.count) / 10);
};
export default PaginatorElemsClient;
