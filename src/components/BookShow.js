import React, { useState, useContext } from 'react';
import BookEdit from './BookEdit';
import BookContext from '../context/book';

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { editBook, deleteBook } = useContext(BookContext);
  const handleSubmit = (id, title) => {
    editBook(id, title);
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) content = <BookEdit book={book} onSubmit={handleSubmit} />;

  return (
    <div className="book-show">
      <img
        alt="book"
        src={`https://picsum.photos/seed/${book.id}/300/200`}
      ></img>
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={() => setShowEdit(!showEdit)}>
          Edit
        </button>
        <button className="delete" onClick={() => deleteBook(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
