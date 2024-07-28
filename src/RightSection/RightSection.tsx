import { Link } from "react-router-dom";
import classRightSection from "./RightSection.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
const RightSection = () => {
  const stElem = useSelector((state: RootState) => state.stateEl);

  return (
    <>
      <div className={classRightSection.info_main}>
        <Link to="/" className={classRightSection.close}>
          +
        </Link>
        <div className={classRightSection.info_container}>
          <div className={classRightSection.name}>
            {stElem.initialState?.name}
          </div>
          <hr />
          <div className={classRightSection.edited}>
            {stElem.initialState?.edited}
          </div>
          <div className={classRightSection.birth_year}>
            {stElem.initialState?.birth_year}
          </div>
          <div className={classRightSection.height}>
            {stElem.initialState?.height}
          </div>
        </div>
      </div>
    </>
  );
};
export default RightSection;
