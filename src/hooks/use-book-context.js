import { useContext } from 'react';
import BookContext from '../context/book';

const useBookContext = () => {
  return useContext(BookContext);
};

export default useBookContext;
