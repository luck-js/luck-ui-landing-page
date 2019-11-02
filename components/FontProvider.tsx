import * as React from 'react';
import {createContext, useState, useEffect} from 'react';
export const FontContext = createContext<boolean>(false);

const FontFaceObserver = require('fontfaceobserver');

const Fonts = async () => {
  document.documentElement.className += " fonts-loaded";

  const lato = new FontFaceObserver('Lato');

  return await lato.load();
};

const FontProvider: React.FunctionComponent = ({ children }) => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    let isSubscribed = true
    Fonts().then(() => isSubscribed ? setIsFontLoaded(true) : null);
    return () => {(isSubscribed = false)};
  }, []);

  return (
    <FontContext.Provider value={isFontLoaded}>
      { children }
    </FontContext.Provider>
  );
};
export default FontProvider;
