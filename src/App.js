import { useState } from 'react';
import Adduser from './components/User/Adduser';
import Userlist from './components/User/Userlist';

function App() {
  const [userList, setuserList] = useState([]);

  const adduser = (uname, uage) =>{
    setuserList((prelist) => {
        return [...prelist, {id:Math.random(), name:uname, age:uage}];
    });

  };
  return (
    <div >
      <Adduser onAdduser={adduser}></Adduser>
      <Userlist users={userList}></Userlist>
    </div>
  );
}

export default App;
