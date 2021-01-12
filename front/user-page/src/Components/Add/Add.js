import {useState} from "react";
import Axios from "axios";

function Add() {

  let [userData, setUserData] = useState([])

  let [userData1, setUserData1] = useState("");
  let [userData2, setUserData2] = useState("");


  const insertTest = () => {
    Axios.post("http://localhost:5001/create", {
      userData1: setUserData1, 
      userData2: setUserData2
    }).then(() => {
      console.log("data sent to back")
      console.log(setUserData1, setUserData2)
      setUserData([...userData, {
        userData1: setUserData1, 
        userData2: setUserData2}])
    })
  }

  return (
    
    <div className="Add">
      
        <label>Add to DB:</label>
        <input type="text" name="addTest" onChange={(event) => {setUserData1 = event.target.value}}></input>
        <input type="text" name="addTest2" onChange={(event) => {setUserData2 = event.target.value}}></input>
        <button onClick={insertTest}>Add</button>
    </div>

  );
}

export default Add;
