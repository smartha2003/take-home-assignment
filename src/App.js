// import logo from './logo.svg';
// import './App.css';
import React, {useState} from "react";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import AddUserInput from "./components/AddUserInput";

function App(){
  const [showAddInput, setShowAddInput] = useState(false)
//   const [inputs, setInputs] = useState([
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "qui est esse",
//         "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//         "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//     }
// ])
  const [inputs, setInputs] = useState([]);
   const getAPI =() => {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setInputs(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   };

  //  //Add Input
  const addInput = (input) => {
    console.log(input)
    const id = Math.floor(Math.random()*10000) + 1
    // console.log(id)
    const newInput = {id, ...input}
    console.log(newInput)
    setInputs([...inputs, newInput])
  }

  //Delete Input
const deleteInput = (id) => {
  setInputs(inputs.filter((input) => input.id !== id))
}

  return (
    <div className="container">
      <h1> AggieWorks Take Home Assignment!</h1>
      <Header onAdd = {() => setShowAddInput(!showAddInput)} showAdd ={showAddInput}/>
      {showAddInput && <AddUserInput onAdd={addInput}/>} {/* If the AddInput is true then do this */}
      <button onClick={getAPI}> Fetch API</button>
      {/* {inputs.length > 0 ? (<Inputs inputs={inputs} onDelete = {deleteInput}/>) : ('No Input To Show')} if there's anything in the inputs then displays that if not then states No Input To Show */}
      <div className="posts-container">
      {/* This part prints out the things from the API*/}
      {/* {inputs.map((input) => {
         return (
            <div className="post-card" key={input.id}>
                <h2 className="post-id">{input.id}</h2>
               <h2 className="post-title">{input.title}</h2>
               <p className="post-body">{input.body}</p>
               <div className="button">
               <div className="delete-btn">Delete</div>
               </div>
            </div>
         );
      })} */}   
      <pre>{JSON.stringify(inputs, null, 2)}</pre>
   </div>
    </div>
  );
}

export default App;
