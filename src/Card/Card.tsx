import { Link } from "react-router-dom";
import "./card.css";
import * as React from "react";
import { ElementType } from "../All_Interface/BottomSection";

interface ProportesElement {
  homeworld: string;
  name: string;
  url: string;
}

interface Cards {
  key: string;
  info: ElementType;
  id: string;
  setStateElem: React.Dispatch<React.SetStateAction<ElementType | undefined>>;
}
const Card = ({ info, id, setStateElem }: Cards) => {
  const [state, setState] = React.useState<ProportesElement>();
  const { homeworld, name, url } = info;

  React.useEffect(() => {
    setState({
      ...state,
      homeworld: homeworld,
      name: name,
      url: url,
    });
  }, []);
  return (
    <>
      <Link to={`/details/${id}`}>
        <section
          className="cards"
          onClick={(e) => {
            console.log(e.currentTarget);
            setStateElem({
              ...info,
            });
          }}
        >
          <div>{state?.name}</div>
          <div>
            <h5>{state?.homeworld}</h5>
            <p>{state?.url}</p>
          </div>
        </section>
      </Link>
    </>
  );
};

export default Card;
