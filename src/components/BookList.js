import BookContext from '../context/book';
import BookShow from './BookShow';
import { useContext } from 'react';

function BookList({ books, onDelete, onEdit }) {
  const bookContext = useContext(BookContext);

  const renderedBooks = books.map((book) => {
    return (
      <BookShow book={book} key={book.id} onDelete={onDelete} onEdit={onEdit} />
    );
  });
  return (
    <div>
      <div>{bookContext}</div>
      <div className="book-list">{renderedBooks}</div>
    </div>
  );
}

export default BookList;
