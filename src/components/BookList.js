import BookShow from './BookShow';
function BookList({ books }) {
  return (
    <div>
      {books.map((book) => (
        <BookShow book={book} key={book.id} />
      ))}
    </div>
  );
}

export default BookList;
