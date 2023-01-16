import React, {useState} from "react";
import Header from "./components/Header";
import AddUserInput from "./components/AddUserInput";

function App(){
  const [showAddInput, setShowAddInput] = useState(false)
  const [inputs, setInputs] = useState([]);
   const getAPI =() => {
      fetch('http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/today')
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
  }

  return (
    <div className="container">
      <h1> AggieWorks Take Home Assignment!</h1>
      <Header onAdd = {() => setShowAddInput(!showAddInput)} showAdd ={showAddInput}/>
      {showAddInput && <AddUserInput onAdd={addInput}/>} {/* If the AddInput is true then do this */}
      <button onClick={getAPI}> Today's Actual date in IST</button>
      <div className="posts-container"> 
      <pre>{JSON.stringify(inputs, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
