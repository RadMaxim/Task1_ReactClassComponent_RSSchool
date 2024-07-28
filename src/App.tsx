import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BSection from "./bottomSection/BSection";
import TSection from "./topSection/TSection";
import RightSection from "./RightSection/RightSection";
import React, { useState } from "react";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import { Theme } from "./ContextForApp/ContextForApp";
import { Provider } from "react-redux";
import store from "./store/store";
import Magazin from "./magazin/Magazin";

const App: React.FC = () => {
  const [theme, setTheme] = useState<boolean>(false);

  console.log(theme);
  return (
    <>
      <Provider store={store}>
        <Theme.Provider value={{ theme, setTheme }}>
          <BrowserRouter>
            <Routes>
              <Route
                element={
                  <div className={theme ? "light" : "dark"}>
                    <TSection />
                    <BSection />
                  </div>
                }
                path="/"
              >
                <Route
                  path="/details/:detailsCard"
                  element={<RightSection />}
                />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/magazin" element={<Magazin />} />
            </Routes>
          </BrowserRouter>
        </Theme.Provider>
      </Provider>
    </>
  );
};

export default App;
