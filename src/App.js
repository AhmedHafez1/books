import './index.css';
import { useEffect, useContext } from 'react';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
import BookContext from './context/book';

function App() {
  const { fetchBooks } = useContext(BookContext);
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
