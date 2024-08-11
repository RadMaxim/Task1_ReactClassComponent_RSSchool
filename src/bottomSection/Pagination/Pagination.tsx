import { ElementType } from "../../All_Interface/BottomSection";
import Card from "../../Card/Card";
import { useSearchParams } from "react-router-dom";
import { useGetFilterDataAboutOurCardsQuery } from "../../store/api/api";
import Load from "../../Load/Load";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import React from "react";

const Pagination:React.FC = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const inputValue = useSelector((elem: RootState) => elem.stateEl.inputValue);
  const { data, isLoading, error } = useGetFilterDataAboutOurCardsQuery({
    search: inputValue,
    page: page,
  });
  const storageOfElem = useSelector(
    (items: RootState) => items.stateEl.savedElem,
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
        console.log(isFavorite);

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
export default Pagination;
