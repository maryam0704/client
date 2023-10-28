import BorrowedBooks from "./BorrowedBooks";
import DeleteBook from "./DeleteBook";
import ReserveBook from "./ReserveBook";

export default function BrowsedBook({ Books , handleDeleteBook, isLoggedIn, user  }) {
    return (
      <div className="browsedbooks">
        {/* <h1 className="books">List of Books</h1> */}
        <div className="books">
      <ul  className="book">
        {Books.map((book, index) => (
          <li key={index}>
            {/* <strong>{book._id} </strong>  */}
            <strong>{book.title}
            <br/></strong> by {book.author} 
            {/* <strong> {book.reservedBy}</strong> */}
            <br/>
          
            {isLoggedIn && !book.isReserved?
              <ReserveBook bookId={book._id} user={ user} />
               : null
            }
             {user ==="admin" ?
            <DeleteBook onDeleteClick={handleDeleteBook} bookId={book._id} />
              : null}
          </li>
        ))}
          </ul>
        </div>
      </div>
    );

}