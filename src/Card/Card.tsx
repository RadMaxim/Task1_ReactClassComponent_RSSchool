import { Link } from "react-router-dom";
import classCards from "./card.module.css";
import * as React from "react";
import { Cards, ProportesElement } from "../All_Interface/Cards";
import { FaHeart } from "react-icons/fa";
import {
  removeElements,
  saveElements,
  setRightSection,
} from "../store/counterSlice";
import { useDispatch } from "react-redux";
import { Theme } from "../ContextForApp/ContextForApp";

const Card = ({ favorite, info, id }: Cards) => {
  const dispatch = useDispatch();
  const [states, setStates] = React.useState(false);
  const [state, setState] = React.useState<ProportesElement>();
  const { homeworld, name, url, birth_year, height } = info;
  const context = React.useContext(Theme);
  if (!context) {
    throw new Error("theme");
  }
  const { theme, setTheme } = context;
  console.log(theme, setTheme);
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
      <section
        className={theme ? classCards.cardsLight : classCards.cardsDark}
        onClick={() => {
          dispatch(setRightSection(info));
        }}
      >
        <Link className={classCards.link} to={`/details/${id}`}></Link>
        <div className={classCards.name}>{name}</div>
        <hr />
        <div className={classCards.info}>
          <h5>{height}</h5>
          <p>{birth_year}</p>
        </div>
        <div
          className={
            !theme
              ? classCards.choice_favorite_light
              : classCards.choice_favorite_dark
          }
        >
          <FaHeart
            onClick={() => {
              states
                ? dispatch(saveElements(info))
                : dispatch(removeElements(info));
              setStates(!states);
            }}
            className={
              !favorite ? classCards.GrFavorite : classCards.GrFavorite_active
            }
          />
        </div>
      </section>
    </>
  );
};

export default Card;
