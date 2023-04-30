import { useState, useContext } from 'react';
import BookContext from '../context/book';

function BookCreate() {
  const [title, setTitle] = useState('');
  const { createBook } = useContext(BookContext);

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
