import React, { useState } from "react";

function BookEdit({ book }) {
  const [title, setTitle] = useState(book.title);

  const editBook = (event) => {
    event.preventDefault();
    console.log(title);
  };

  return (
    <div className="book-edit">
      <form onSubmit={editBook}>
        <label className="label">Title</label>
        <input
          className="input"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
