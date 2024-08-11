"use client";

import React, { useEffect, useState } from 'react'

import TSection from '../topSection/TSection'
import BSection from '../bottomSection/BSection'
import { Theme } from '../ContextForApp/ContextForApp'
import { Provider } from 'react-redux';
import store from '../store/store';
import { useDispatch } from 'react-redux';

export default function MainPage() {
  const [theme, setTheme] = useState<boolean>(false);

  
  return <>
    <Provider store={store}>
   <Theme.Provider value={{ theme, setTheme }}>
   <div className={theme ? "light" : "dark"}>
      <TSection/>
      <BSection/>
   </div>


   </Theme.Provider>
   </Provider>
  
  </> // We'll update this
}