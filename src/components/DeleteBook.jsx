function DeleteBook({ onDeleteClick, bookId }) {
  const handleDelete = () => {
    onDeleteClick(bookId);
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
}

export default DeleteBook;