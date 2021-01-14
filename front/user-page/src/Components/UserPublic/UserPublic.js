import {useState} from "react";
import Axios from "axios";
import "./ShowData.css"

function UserPublic() {

  let [userData, setUserData] = useState([])

  let [name, setName] = useState("")

  const getDbData = () => {
    if (name !== "") {
      Axios.get("http://localhost:5001/getByName/" + name).then((response) => {
        setUserData(response.data);
      });  
    }

  }


  const mapData = userData.map((val, key) => {
    return (
      <div className="dataContainer" key={key}> 
        <h3>Name: {val.name}</h3>

        <h3>Last Name: {val.family_name}</h3>

        <h3>Birthday: {val.birthday === "0000-00-00" ? "0000-00-00" : val.birthday}</h3>

        <h3>Tel: {val.tel}</h3>

        <h3>Email: {val.email}</h3>

      </div>

    )
  })

  return (

        <div>
          <input type="text" onChange={(event) => {if(event){setName(event.target.value)}}}></input>
          <button onClick={getDbData}>Show all data inside DB</button>
          <div className="getContainer">
            {mapData}
          </div>
        </div>


  );
}

export default UserPublic;
