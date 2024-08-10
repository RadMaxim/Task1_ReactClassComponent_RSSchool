"use client";


import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useGetFilterDataAboutOurCardsQuery } from "@/store/api/api";
import Load from "./Load/Load";
import { ElementType } from "@/All_Interface/BottomSection";
import Card from "./Card/Card";
import { useDispatch } from "react-redux";
import { setFilterCards } from "@/store/counterSlice";
import { useContextAll } from "@/hooks/useContextAll";

interface FilterProps {
  page: number;
}

const FilterCards = ({ page }: FilterProps) => {

  const { setNumPage, setFilterElements,filterElements,elementsLike } = useContextAll();

  setNumPage(page);

  const inputValue = useSelector((elem: RootState) => elem.stateEl.inputValue);
  const { data, isLoading, error } = useGetFilterDataAboutOurCardsQuery({
    search: inputValue,
    page: page,
  });

  data && setFilterElements(data.results);

  const storageOfElem: ElementType[] = JSON.parse(
    typeof window !== 'undefined'&&
    localStorage.getItem("favoritesElements") || "[]"
  );
  const collectionName = storageOfElem.map((val) => val.name);
  if (isLoading) {
    return (
      <>
        <Load />
      </>
    );
  } else if (error) {
    return (
      <>
        <h1 style={{ fontSize: "50px" }}>Error....</h1>
      </>
    );
  } else {
    if (data) {
      const elem: ElementType[] = data.results;
      return Array.from(elem).map((el: ElementType) => {
        const isFavorite = collectionName.includes(el.name);

        return (
          <Card
            favorite={isFavorite}
            key={el.url}
            info={el}
            id={el.name.replace(" ", "")}
          />
        );
      });
    }
  }
};
export default FilterCards;
