import './index.css';
import { useState } from 'react';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';

function App() {
  const [books, setBooks] = useState([]);
  const createBook = (title) => {
    setBooks([...books, { id: Math.floor(Math.random() * 1000000), title }]);
  };

  return (
    <div>
      <BookList books={books} />
      <BookCreate onCeateBook={createBook} />
    </div>
  );
}

export default App;
