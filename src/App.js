import './index.css';
import axios from 'axios';
import { useState } from 'react';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';

function App() {
  const [books, setBooks] = useState([]);
  const bookUrl = 'http://localhost:3001/books';

  const createBook = async (title) => {
    const response = await axios.post(bookUrl, { title });

    setBooks([...books, response.data]);
  };

  const editBook = (id, title) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title };
      }
      return { ...book };
    });
    setBooks(updatedBooks);
  };

  const deleteBook = (id) => {
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
