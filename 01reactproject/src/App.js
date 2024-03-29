import React , { useState, Fragment }from "react";

import AddUser from './components/Users/AddUser';
import UserList from "./components/Users/UserList";

function App() {
   const [UsersList, setUsersList]= useState([]);

   const addUserHandler = (uName,uAge) => {
    setUsersList( (prevUsersList) => {
      return [
        ...prevUsersList ,
         {name : uName, age : uAge ,  id : Math.random().toString()},
             ];
        });
      };

  return (
    <Fragment>
      <AddUser onAddUser  ={addUserHandler} />
      <UserList  users = { UsersList }/>
    </Fragment>
  );
}

export default App;
