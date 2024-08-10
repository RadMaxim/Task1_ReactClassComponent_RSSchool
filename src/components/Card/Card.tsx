"use client";

import classCards from "./card.module.css";
import * as React from "react";
import { FaHeart } from "react-icons/fa";
import { Cards } from "@/All_Interface/Cards";
import { useContextAll } from "@/hooks/useContextAll";

const Card = ({ favorite, info }: Cards) => {
  const [fav, setFav] = React.useState<boolean>(favorite);
  const { name, birth_year, height } = info;
  
  const { theme, setDetails, setElementsLike, elementsLike, setClose } =
    useContextAll();

  return (
    <>
      <section
        id="section"
        className={
          theme == "light" ? classCards.cardsLight : classCards.cardsDark
        }
        onClick={() => {
          setDetails(info);
          setClose(true);
        }}
      >
        <div className={classCards.name}>{name}</div>
        <hr />
        <div className={classCards.info}>
          <h5>{height}</h5>
          <p>{birth_year}</p>
        </div>
        <div
          className={
            !(theme == "light")
              ? classCards.choice_favorite_light
              : classCards.choice_favorite_dark
          }
        >
          <FaHeart
            id="svg"
            onClick={() => {
              if (!fav) {
                setElementsLike(() =>
                  elementsLike.map((el) => el.name).includes(info.name)
                    ? elementsLike
                    : [...elementsLike, info],
                );
              } else {
                setElementsLike(() =>
                  elementsLike.filter((val) => val.name !== info.name),
                );
              }

              setFav((fav) => !fav);
            }}
            className={
              !fav ? classCards.GrFavorite : classCards.GrFavorite_active
            }
          />
        </div>
      </section>
    </>
  );
};

export default Card;
