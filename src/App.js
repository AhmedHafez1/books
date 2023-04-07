import './index.css';
import { useState } from 'react';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    setBooks([...books, { id: Math.floor(Math.random() * 1000000), title }]);
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
    <div>
      <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
      <BookCreate onCeateBook={createBook} />
    </div>
  );
}

export default App;
