import './index.css';
import { useState } from 'react';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';

function App() {
  const [books, setBooks] = useState([]);

  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    setBooks([...books, { id: Math.floor(Math.random() * 1000000), title }]);
  };

  return (
    <div>
      <BookList books={books} onDelete={deleteBook} />
      <BookCreate onCeateBook={createBook} />
    </div>
  );
}

export default App;
