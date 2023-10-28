import React, { useEffect, useState } from "react";


function Header({ onSetUser, isLoggedIn, onSetIsLoggedIn, refresh }) {
    // function loginHandler = async (user) => {
    const handleFetchUser = async (user) => {
    
        const response = await fetch(`http://localhost:3001/api/users/${user}`);

        if (response.status === 200) {
            const userData = await response.json();
            onSetUser(userData.username);
console.log(userData.username);
            onSetIsLoggedIn(true);
      
        }
    };
    
     

   return (
     <div>
           <div className="user-list">
             select a user:  <button onClick={()=> {handleFetchUser("userOne")}}>userOne</button>
               <button onClick={() => { handleFetchUser("admin") }}>admin</button>
               </div>
       {isLoggedIn ? <button className="logout-button " onClick={() => { onSetUser("guest"); onSetIsLoggedIn(false); refresh() }}>logout</button> : null}
             
           
     </div>
   );
}
 export default Header;