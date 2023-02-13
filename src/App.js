//Referenced code from https://github.com/bradtraversy/react-crash-2021 and https://www.youtube.com/watch?v=27f3B1qndW8&ab_channel=CodeBucks
import React, {useState} from "react";
import Header from "./components/Header";
import AddUserInput from "./components/AddUserInput";

function App(){
  const [showAddInput, setShowAddInput] = useState(false)
  const [inputs, setInputs] = useState([]);
  //Fetching the data from the url
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

  //output to the console
  const addInput = (input) => {
    console.log(input)
  }

  return (
    <div className="container">
      <h1> Rest API!</h1>
      <Header onAdd = {() => setShowAddInput(!showAddInput)} showAdd ={showAddInput}/> {/*Header with the open and close button (uses useState) */}
      {showAddInput && <AddUserInput onAdd={addInput}/>} {/* If the AddInput is true then do this */}
      <button onClick={getAPI}> Today's Actual date in IST</button> {/*The button that queries the API */}
      <pre>{JSON.stringify(inputs, null, 2)}</pre> {/*Outputs the API data */}
    </div>
  );
}

export default App;
