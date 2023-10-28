import React, { useEffect, useState } from "react";
import DeleteBook from "./DeleteBook";
import ReserveBook from "./ReserveBook";
import AddBook from "./AddBook";
import BorrowedBooks from "./BorrowedBooks";
import BrowsedBook from "./BrowsedBook";
import ListOfBorrowedBooks from "./ListOfBorrowedBooks";

function BookList({books, handleDeleteBook, user, isLoggedIn }) {
  const [BrowseBooks, setBrowseBooks] = useState(false);
  const [AddBooks, setAddBooks] = useState(false);
  const [Borrowed, setBorrowed] = useState(false);
  const [AllBorrowedBooks, setAllBorrowedBooks] = useState(false);
  function onBrowseBooks() { 
    setBrowseBooks(true);
    setAddBooks(false);
    setBorrowed(false);
    setAllBorrowedBooks(false);

  }


  function onAddBook() { 
    setBrowseBooks(false);
    setAddBooks(true);
    setBorrowed(false);
    setAllBorrowedBooks(false);

  }
  function onBorrowedBook() {
    setBrowseBooks(false);
    setBorrowed(true);
    setAddBooks(false);
    setAllBorrowedBooks(false);
  }

  function onAllBorrowedBooks() {
    setBrowseBooks(false);
    setBorrowed(false);
    setAddBooks(false);
    setAllBorrowedBooks(true);
  }

  // let bookId = { type: Object, required: true };

  // function handleDeleteBook(bookId) {
  //    fetch(`http://localhost:3001/books/:bookId`, {
  //          method: "DELETE",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
          
  //      })
  //       console.log(bookId);
  //  }
  return (
    <div className="booklist">
      <h1 className="welcome">welcome {user} </h1>
       <div className="button-container">
      <button onClick={onBrowseBooks}>Browse books</button>
     
      {isLoggedIn ? <button onClick={onBorrowedBook} >My borrowed books</button> : null}
      {user === "admin" ? (<div className="admin-buttons"><button onClick={onAddBook}>Add books</button>
          <button onClick={onAllBorrowedBooks}>All Borrowed Books</button></div>) : null}
        </div>
      {BrowseBooks ?
        (
        <BrowsedBook Books={books}
        handleDeleteBook={handleDeleteBook}
        isLoggedIn={isLoggedIn}
        user={user} /> ) : null}
      {AddBooks && user=== "admin" ? <AddBook /> : null}
      {Borrowed && isLoggedIn? <BorrowedBooks Books = {books} user = {user}/> : null}
      {AllBorrowedBooks && user=== "admin" ? <ListOfBorrowedBooks Books={books} /> : null}
    </div>
  );

}


export default BookList;
