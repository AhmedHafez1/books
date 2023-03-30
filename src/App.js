import { useState } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);
  const createBook = (title) => {
    setBooks([...books, { title }]);
  };

  return (
    <div>
      <BookList books={books} />
      <BookCreate onCeateBook={createBook} />
    </div>
  );
}

export default App;
