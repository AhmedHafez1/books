import { createContext } from 'react';
import axios from 'axios';
import { useState } from 'react';

const BookContext = createContext();

export const Provider = ({ children }) => {
  const bookUrl = 'http://localhost:3001/books/';
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get(bookUrl);

    setBooks(response.data);
  };

  const createBook = async (title) => {
    const response = await axios.post(bookUrl, { title });

    setBooks([...books, response.data]);
  };

  const editBook = async (id, title) => {
    const response = await axios.put(bookUrl + id, { title });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...response.data };
      }
      return { ...book };
    });
    setBooks(updatedBooks);
  };

  const deleteBook = async (id) => {
    await axios.delete(bookUrl + id);
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    createBook,
    fetchBooks,
    editBook,
    deleteBook,
  };

  return (
    <BookContext.Provider valueToShare={valueToShare}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
