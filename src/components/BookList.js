import useBookContext from '../hooks/use-book-context';
import BookShow from './BookShow';

function BookList() {
  const { books } = useBookContext();
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
