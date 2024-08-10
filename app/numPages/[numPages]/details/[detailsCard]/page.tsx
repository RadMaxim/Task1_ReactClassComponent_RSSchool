import Link from "next/link";
import classRightSection from "./classDetailsCard.module.css";
import DetailsCardClient from "./DetailsCardClient";

const DetailsCard = () => {
  return (
    <>
      <div className={classRightSection.info_main}>
        <Link href="/" className={classRightSection.close}>
          +
        </Link>
        <div className={classRightSection.info_container}>
          <DetailsCardClient />
        </div>
      </div>
    </>
  );
};
export default DetailsCard;
