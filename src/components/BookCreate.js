import { useState } from 'react';

function BookCreate({ onCeateBook }) {
  const [title, setTitle] = useState('');

  const createBooke = (event) => {
    event.preventDefault();
    onCeateBook(title);
    setTitle('');
  };

  return (
    <div className="book-create">
      <form onSubmit={createBooke}>
        <h3>Add a book</h3>
        <label className="label">Title</label>
        <input
          className="input"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button className="button" onClick={createBooke}>
          Add Book
        </button>
      </form>
    </div>
  );
}

export default BookCreate;
