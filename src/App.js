import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import Header from "./components/Header";
import BorrowedBooks from "./components/BorrowedBooks";
// import Conditionalbuttons from "./components/ConditionalButtons";
import "./App.css";
function App() {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState("guest");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [refresh]);

  useCallback(refresh, [refresh]);
  function refresh() {
    return null;
  }

  const handleDeleteBook = async (bookId) => {
    const response = await fetch(`http://localhost:3001/books/${bookId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="App">
    
      <Router>
        <Header
          onSetUser={setUser}
          isLoggedIn={isLoggedIn}
          onSetIsLoggedIn={setIsLoggedIn}
          refresh={refresh}
        />
        {/* <BorrowedBooks user={user} isloggedIn={isLoggedIn} Books={books} /> */}
        <Routes>
          <Route
            path="/"
            element={
              <BookList
                books={books}
                setBooks={setBooks}
                isLoggedIn={isLoggedIn}
                user={user}
                handleDeleteBook={handleDeleteBook}
              />
            }
          />

          {/* <Route path="/" element={<Conditionalbuttons  />} /> */}

          <Route
            path="/admin"
            element={
              <BookList
                books={books}
                setBooks={setBooks}
                isLoggedIn={isLoggedIn}
                user={user}
                handleDeleteBook={handleDeleteBook}
              />
            }
          />

          <Route path="/AddBook" element={<AddBook onRefresh={refresh} />} />
        </Routes>
      </Router>
      {/* <BookList
        books={books}
        setBooks={setBooks}
        isLoggedIn={isLoggedIn}
        user={user}
        handleDeleteBook={handleDeleteBook}
      /> */}
      {/* {user === "admin" ? <AddBook Setbooks={refresh} /> : null}; */}
    </div>
  );
}

export default App;
