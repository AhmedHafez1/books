import { useState } from 'react';
import useBookContext from '../hooks/use-book-context';

function BookCreate() {
  const [title, setTitle] = useState('');
  const { createBook } = useBookContext();

  const onCreateBook = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle('');
  };

  return (
    <div className="book-create">
      <form onSubmit={onCreateBook}>
        <h3>Add a book</h3>
        <label className="label">Title</label>
        <input
          className="input"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button className="button" onClick={onCreateBook}>
          Add Book
        </button>
      </form>
    </div>
  );
}

export default BookCreate;
