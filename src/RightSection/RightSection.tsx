import { Link, useParams } from "react-router-dom";
import { ElementType } from "../All_Interface/BottomSection";
import "./RightSection.css";
const RightSection = (props: { stateElem: ElementType |undefined}) => {
  const { stateElem } = props;
  const p = useParams();
  console.log(p.detailsCard);

  return (
    <>
      <div className="info_main">
        <Link to="/" className="close">
          <p>+</p>
        </Link>
        <div className="info_container">
          <div className="name">{stateElem?.name}</div>
          <div className="birth_year">{stateElem?.birth_year}</div>
          <div className="created">{stateElem?.created}</div>
          <div className="edited">{stateElem?.edited}</div>
          <div className="films">
            <p> {stateElem?.films.join(", ")}</p>
          </div>
          <div>{stateElem?.homeworld}</div>
        </div>
      </div>
    </>
  );
};
export default RightSection;
