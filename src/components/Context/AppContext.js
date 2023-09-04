"use client";

import React, { useContext, useState } from "react";

export const appContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [imgModelIsOpen, setImgModelIsOpen] = useState(false);

  const handleOpenImgModel = () => setImgModelIsOpen(true);
  const handleCloseImgModel = () => setImgModelIsOpen(false);

  const values = { imgModelIsOpen, handleOpenImgModel, handleCloseImgModel };

  return <appContext.Provider value={values}>{children}</appContext.Provider>;
};

export const useGlobalContext = () => useContext(appContext);
