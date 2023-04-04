import BookShow from './BookShow';
function BookList({ books }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookShow book={book} key={book.id} />
      ))}
    </div>
  );
}

export default BookList;
