import * as React from "react";
import "./BSection.css";
import { State, ElementType } from "../All_Interface/BottomSection";
import Pagination from "./Pagination/Pagination";
import ElemsPag from "./Pagination/PaginatorElems/ElemsPag";
import { Outlet } from "react-router-dom";

const BSection = (props: {
  setStateElem: React.Dispatch<React.SetStateAction<ElementType | undefined>>;
}) => {
  const [state, setState] = React.useState<State>();
  React.useEffect(() => {
    // const searchQuery =  useSearchQuery({key:"all",value:"[]"})

    const all_elems: ElementType[] = JSON.parse(
      localStorage.getItem("all") || "[]",
    );
    const filters: ElementType[] = JSON.parse(
      localStorage.getItem("filter_array") || "[]",
    );
    const input_value: string = localStorage.getItem("input_value") || "";
    setState((elem) => {
      return {
        ...elem,
        all_elem: all_elems,
        filter: filters,
        input_value: input_value,
      };
    });
  }, []);

  return (
    <>
      <main className="main_content">
        <div className="main_container">
          {state && (
            <Pagination
              setStateElem={props.setStateElem}
              allElem={state.all_elem}
              filterElem={state.filter}
              inputValue={state.input_value}
            />
          )}
        </div>
      </main>
      <div>
        {state && (
          <ElemsPag
            allElem={state.all_elem}
            filterElem={state.filter}
            inputValue={state.input_value}
          />
        )}
      </div>
      <Outlet />
    </>
  );
};

export default BSection;
