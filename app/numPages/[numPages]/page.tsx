import classBSection from "./classElemsPag.module.css";
import React from "react";
import ClientPages from "./ClientPages";

import RightSection from "../../../src/components/RightSection/RightSection";

const Pages: React.FC = ({ params }: any) => {
  return (
    <>
      <main className={classBSection.main_content}>
        <div className={classBSection.main_container}>
          <div className={classBSection.main_container_left}>
            <ClientPages page={params.numPages} />
          </div>
          <div className={classBSection.main_container_right}>
            <RightSection />
          </div>
        </div>
      </main>
    </>
  );
};
export default Pages;
