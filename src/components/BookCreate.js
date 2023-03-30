function BookCreate({ onCeateBook }) {
  const createBooke = () => {
    onCeateBook({ title: "New Book" });
  };

  return (
    <div>
      <button onClick={createBooke}>Add Book</button>
    </div>
  );
}

export default BookCreate;
