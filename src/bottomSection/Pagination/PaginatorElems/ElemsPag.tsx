import { Link } from "react-router-dom";
import { ElementType } from "../../../All_Interface/BottomSection";
const Chunk = (array: ElementType[], size: number): ElementType[][] => {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size); // c 0 по 6 фильм обрезаем
  const tail = array.slice(size); // с 6 до конца
  return [head, ...Chunk(tail, size)]; // рекурсивный случай
};
const ElemsPag = (props: {
  allElem: ElementType[];
  filterElem: ElementType[];
  inputValue: string;
}) => {
  const { allElem, filterElem, inputValue } = props;

  return (
    <>
      <ul className="paginator_list">
        {(inputValue == "" ? Chunk(allElem, 6) : Chunk(filterElem, 6)).map(
          (elem, i) => {
            return (
              <Link key={i} className="page" to={`/?search=&page=${i}`}>
                {i}
              </Link>
            );
          },
        )}
      </ul>
    </>
  );
};
export default ElemsPag;
