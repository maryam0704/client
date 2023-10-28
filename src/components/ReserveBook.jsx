import React, { useState } from "react";

function ReserveBook({ bookId, user}) {
  // const [bookId, setBookId] = useState("");
  // const [username, setUsername] = useState("");
  // const [message, setMessage] = useState(null);

  const handleReserve = async () => {
    const response = await fetch(`http://localhost:3001/books/${bookId}/reserve`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify({ reservedBy: user  }),
     
    });
      if(response.status === 200) {
        const data = await response.json();
    console.log(data);
  }

   
  };

    return (
      <div>
       
          <button onClick={handleReserve}>Reserve Book</button>
    

      </div>
    );
  }


export default ReserveBook;
