import { useState } from "react";

function BookCreate({ onCeateBook }) {
  const [title, setTitle] = useState("");

  const createBooke = (event) => {
    event.preventDefault();
    onCeateBook({ title });
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={createBooke}>
        <label>Title</label>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button onClick={createBooke}>Add Book</button>
      </form>
    </div>
  );
}

export default BookCreate;
