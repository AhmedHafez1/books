import { useState } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);
  const handleCreateBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <div>
      <BookList books={books} />
      <BookCreate onCeateBook={handleCreateBook} />
    </div>
  );
}

export default App;
