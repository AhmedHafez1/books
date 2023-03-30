import BookShow from "./BookShow";
function BookList({ books }) {
  return (
    <div>
      {books.map(() => (
        <BookShow />
      ))}
    </div>
  );
}

export default BookList;
