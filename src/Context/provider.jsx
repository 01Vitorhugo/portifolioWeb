import React, { useState } from 'react';
import { ContextApi } from './contextApi';

export const Provider = ({ children }) => {
  const [ValueMenu, setValueMenu] = React.useState(0);


  


  return (
    <ContextApi.Provider value={{ ValueMenu, setValueMenu }}>
      {children}
    </ContextApi.Provider>
  );
};
