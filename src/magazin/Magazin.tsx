import { useSelector } from "react-redux";
import classMagazin from "./classMagazin.module.css";
import { RootState } from "../store/store";
import Card from "../Card/Card";

const Magazin = () => {
  const favorite = useSelector((item: RootState) => item.stateEl.savedElem);
  return (
    <>
      <div className={classMagazin.main_magazin}>
        <h1>My favorites</h1>
        <ul className={classMagazin.ul_favorite}>
          {favorite.map((elem) => (
            <li>
              <Card
                favorite={true}
                key={elem.url}
                info={elem}
                id={elem.name.replace(" ", "")}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Magazin;
