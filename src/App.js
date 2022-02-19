import React, { useState } from 'react';

import Adduser from './components/User/Adduser';
import Userlist from './components/User/Userlist';

function App() {
  const [usersList, setUserList] = useState([]);

  const addUser = (uName, uAge) =>{
    setUserList((prelist) => {
        return [...prelist, {id:Math.random().toString(), name:uName, age:uAge},];
    });

  };
  return (
    <React.Fragment>
      <Adduser onAddUser={addUser}></Adduser>
      <Userlist users={usersList}></Userlist>
    </React.Fragment>
  );
}

export default App;
