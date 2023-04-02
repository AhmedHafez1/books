function BookShow({ book, key }) {
  return (
    <div>
      {key} - {book.title}
    </div>
  );
}

export default BookShow;
