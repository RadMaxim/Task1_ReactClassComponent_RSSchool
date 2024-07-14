import * as React from "react";
import "./TSection.css";
import { button_click, button_err } from "./ButtonsEvents/ButtonsEvents";
import Load from "../Load/Load";
import { allFunction } from "./LoadInformation/LoadInformation";
import { Link } from "react-router-dom";

const TSection = () => {
  const inputs = React.useRef<HTMLInputElement>(null);
  const [err, setError] = React.useState(true);
  const [load, setLoad] = React.useState(true);
  const [inputVal, setInputVal] = React.useState<string>("");
  React.useEffect(() => {
    allFunction({ load, setLoad });
    if (inputs.current) {
      inputs.current?.setAttribute(
        "value",
        localStorage.getItem("input_value") || "",
      );
    }
  }, []);
  React.useEffect(() => {
    if (err == false) {
      throw new Error("This mistake is for task");
    }
  }, [err]);

  return (
    <>
      <header className="main_header">
        <div className="header_container">
          <button
            className="error"
            onClick={() => button_err({ err, setError })}
          >
            test
          </button>
          <h1 className="header_h1">Search Information</h1>
          <form>
            <input
              id="input1"
              onChange={(e) => setInputVal(e.target.value)}
              ref={inputs}
              type="text"
              placeholder="Search"
            />
            <Link
              type="submit"
              className="search"
              to={`/?search=${inputVal}`}
              onClick={button_click}
            >
              {" "}
              Seacrh
            </Link>
          </form>
        </div>
      </header>
      {load && <Load />}
    </>
  );
};

export default TSection;
