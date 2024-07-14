import React, { useMemo } from "react";
import { ElementType } from "../../All_Interface/BottomSection";
import "./Pagination.css";
import Card from "../../Card/Card";
import { useSearchParams } from "react-router-dom";

const Chunk = (array: ElementType[], size: number): ElementType[][] => {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size); // c 0 по 6 фильм обрезаем
  const tail = array.slice(size); // с 6 до конца
  return [head, ...Chunk(tail, size)]; // рекурсивный случай
};
const Pagination = (props: {
  allElem: ElementType[];
  filterElem: ElementType[];
  inputValue: string;
  setStateElem: React.Dispatch<React.SetStateAction<ElementType | undefined>>;
}) => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 0;
  const { allElem, filterElem, inputValue } = props;
  const allElems = useMemo(() => Chunk(allElem, 6), [allElem]);
  const filterElems = useMemo(() => Chunk(filterElem, 6), [filterElem]);

  return (
    <>
      {inputValue == ""
        ? allElems[page]?.map((el: ElementType) => {
            return (
              <Card
                setStateElem={props.setStateElem}
                key={el.url}
                info={el}
                id={el.name.replace(" ", "")}
              />
            );
          })
        : filterElems[page]?.map((el: ElementType) => {
            console.log(el.url);
            return (
              <Card
                setStateElem={props.setStateElem}
                key={el.url}
                info={el}
                id={el.name.replace(" ", "")}
              />
            );
          })}
    </>
  );
};
export default Pagination;
