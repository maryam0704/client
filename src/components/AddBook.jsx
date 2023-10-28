import { useState } from "react";
// import { useEffect } from "react";
// import BookList from "./BookList";



export default function AddBook({ onRefresh }) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    function addBookHandler() {
     
let newBook = { title: title, author: author, reservedBy: null };

        fetch("http://localhost:3001/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBook)
        });
     
                
    //   .then((response) => response.json())
    //   .then((data) => setBooks(data))
    //   .catch((error) => console.error("Error fetching data:", error));
  };
    
    return (
        <>
            <h1>
                Add New Book
            </h1>
            <div className="admin-container">
                 <label for="title" class="form-label" >Book Title:</label>  <br />
            <input  placeholder="book name"  value={title}
                onChange={e => setTitle(e.target.value)} />
                <br />
                                 <label for="author" class="form-label" >  Author: </label>
  <br />
            <input  placeholder="author name" value={author}
                onChange={e => setAuthor(e.target.value)} />
            <br/>
            <button className="add-button" onClick={() => {
                addBookHandler();
            
        }}> add books
                
            </button>
</div>
            <ul>

                {/* {books.map(book => (
                    <li key={book.id}>{book.title}  by {book.author }</li>
                ))} */}
                {/* <BookList books={books} /> */}
            </ul>
            
              </>
    )
}