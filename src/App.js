import './index.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';

function App() {
  const bookUrl = 'http://localhost:3001/books/';
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get(bookUrl);

    setBooks(response.data);
  };

  useEffect(() => fetchBooks(), []);

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

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
      <BookCreate onCeateBook={createBook} />
    </div>
  );
}

export default App;
