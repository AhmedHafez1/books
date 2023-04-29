import { createContext, useState } from 'react';

const BookContext = createContext();

export const Provider = ({ children }) => {
  return <BookContext.Provider value={{}}>{children}</BookContext.Provider>;
};

export default BookContext;
