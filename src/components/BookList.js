import BookShow from './BookShow';
import { useContext } from 'react';
import BookContext from '../context/book';

function BookList() {
  const { books } = useContext(BookContext);
  const renderedBooks = books.map((book) => {
    return <BookShow book={book} key={book.id} />;
  });
  return (
    <div>
      <div className="book-list">{renderedBooks}</div>
    </div>
  );
}

export default BookList;
