import {useState} from "react";
import Axios from "axios";
import "./ShowData.css"

function ShowData() {

  let [userData, setUserData] = useState([])


  let [name, setName] = useState("");
  let [lastname, setLastName] = useState("");
  let [birthday, setBirthday] = useState("");
  let [tel, setTel] = useState("");
  let [email, setEmail] = useState("");

  const getDbData = () => {
    Axios.get("http://localhost:5001/get", ).then((response) => {
      console.log(response.data);
      console.log(response.data[0].name)
      setUserData(response.data);
      setName = response.data[0].name;
      setLastName = response.data[0].family_name;
      setBirthday = response.data[0].birthday;
      setTel = response.data[0].tel;
      setEmail = response.data[0].email;

    })
  }


  const updateDbData = (id) => {

    Axios.put("http://localhost:5001/update", {
      name: setName,
      lastname: setLastName,
      birthday: setBirthday,
      tel: setTel,
      email: setEmail,
      id: id
    }).then((response) => {
        alert("Data updated");
        console.log(setLastName);
    })
  }


  const mapData = userData.map((val, key) => {
    return (
      <div className="dataContainer"> 
        <h3>Name: {val.name}</h3>
        <input type="text" onChange={(event) => { if(event){setName = event.target.value}}}></input>

        <h3>Last Name: {val.family_name}</h3>
        <input type="text" onChange={(event) => {if(event){setLastName = event.target.value}}}></input>

        <h3>Birthday: {val.birthday}</h3>
        <input type="text" onChange={(event) => {if(event){setBirthday = event.target.value}}}></input>

        <h3>Tel: {val.tel}</h3>
        <input type="text" onChange={(event) => {if(event){setTel = event.target.value}}}></input>

        <h3>Email: {val.email}</h3>
        <input type="text" onChange={(event) => {if(event){setEmail = event.target.value}}}></input>

        <button onClick={() => {updateDbData(val.id)}}>Update</button>

      </div>

    )
  })

  return (

        
        <div >
          <button onClick={getDbData}>Show all data inside DB</button>
          <div className="getContainer">
            {mapData}
          </div>
        </div>


  );
}

export default ShowData;
