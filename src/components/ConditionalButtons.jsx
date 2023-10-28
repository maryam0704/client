import React, { useEffect, useState } from "react";
// import DeleteBook from "./DeleteBook";
// import ReserveBook from "./ReserveBook";
import AddBook from "./AddBook";
import BookList from "./BookList";

function Conditionalbuttons({books, handleDeleteBook, user, isLoggedIn }) {
  const [BrowseBooks, setBrowseBooks] = useState(false);
  const [AddBooks, setAddBooks] = useState(false);
  function onBrowseBooks() { 
    setBrowseBooks(true);
    setAddBooks(false);

  }


  function onAddBook() { 
    setBrowseBooks(false);
    setAddBooks(true);


  }

  return (
    <div>
      <h1>welcome {user} </h1>
      <button onClick={onBrowseBooks}>Browse books</button>
      {user === "admin" ? <button onClick={onAddBook}>Add books</button> : null}
      {isLoggedIn ? <button>My borrowed books</button> : null}
    {BrowseBooks ?
        <BookList books={books} handleDeleteBook={handleDeleteBook} user={user} isLoggedIn={isLoggedIn} />
        : null}
      {AddBooks ? <AddBook /> : null}
    </div>
  );

}


export default Conditionalbuttons;
