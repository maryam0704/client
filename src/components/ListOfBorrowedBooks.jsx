

export default function ListOfBorrowedBooks({ Books }) { 

    // const BooksData = Books.map((Book)=>Book.reservedBy === user );            

    return (
    
       <div> <h1>Borrowed Books</h1>
            <ul className="borrowedBooks">
              {Books.map((book, index) =>
              
              
              (book.isReserved   ?
                ( <li className="book-item" key = { index } >
                {/* <strong>{book._id} </strong>  */}
                <strong>{book.title} </strong> by { book.author }
                 < strong > { book.reservedBy }</strong>
                </li>) : null)
              
              )
              }
            </ul>
          </div>
        
);
}