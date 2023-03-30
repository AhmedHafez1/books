import BookShow from "./BookShow";
function BookList({ books }) {
  return (
    <div>
      {books.map((book) => (
        <BookShow book={book.title} key={Math.floor(Math.random() * 1000000)} />
      ))}
    </div>
  );
}

export default BookList;
