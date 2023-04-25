import { createContext, useState } from 'react';

const BookContext = createContext();

export const Provider = ({ children }) => {
  const [count, setCount] = useState(5);
  const value = {
    count,
    incrementCount: () => setCount(count + 1),
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

export default BookContext;
