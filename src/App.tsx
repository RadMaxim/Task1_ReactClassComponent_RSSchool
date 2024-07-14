import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BSection from "./bottomSection/BSection";
import TSection from "./topSection/TSection";
import RightSection from "./RightSection/RightSection";
import { useState } from "react";
import { ElementType } from "./All_Interface/BottomSection";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

const App = () => {
  const [stateElem, setStateElem] = useState<ElementType | undefined>();
  console.log(stateElem);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <>
                <TSection />
                <BSection setStateElem={setStateElem} />
              </>
            }
            path="/"
          />
          <Route
            path="/details/:detailsCard"
            element={
              <div className="panel">
                <div className="leftPanel">
                  <TSection />

                  <BSection setStateElem={setStateElem} />
                </div>
                <div className="rightPanel">
                  <RightSection stateElem={stateElem} />
                </div>
              </div>
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
