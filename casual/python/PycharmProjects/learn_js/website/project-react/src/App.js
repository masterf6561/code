import React, {useState} from "react";
import Tweet from "./Tweet";
import Hello from "./sayHello";


function App(){

  const [users, setUsers] = useState([
    {name: "Ed", message: "Buy Coke"},
    {name: "Mo", message: "Buy Ebay"},
    {name: "Ali", message: "Buy Nike"}
]);
  
  return(
    <div className="app">
      <Hello/>
      {users.map(user =>(
        <Tweet name={user.name} message={user.message}/>
      ))}
      <h3>Ertellt mit React.JS</h3>
    </div>
  )
}

export default App;