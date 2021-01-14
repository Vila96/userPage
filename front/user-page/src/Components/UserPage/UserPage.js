import {useState, useEffect} from "react";
import Axios from "axios";

function UserPage() {

    let [userData, setUserData] = useState([]);

    let [userId, setUserId] = useState("")

    let loading = true


  const getDbData = () => {
    Axios.get("http://localhost:5001/get", ).then((response) => {
      console.log(response.data);
      console.log(response.data[0].name)
      setUserData(response.data);
      userId = response.data[0].id;

      loading = false
      console.log(loading)

    });
  }


  const mapData = userData.map((val, key) => {
      
    return (
      <div className="dataContainer"> 
        <h3>Name: {val.name}</h3>

        <h3>Last Name: {val.family_name}</h3>

        <h3>Birthday: {val.birthday}</h3>

        <h3>Tel: {val.tel}</h3>

        <h3>Email: {val.email}</h3>

      </div>

    )
  })

  const load = () => {
      if(loading == false) {
          getDbData();
      }
  }

  return (

        
        <div>
            {load}
          <div className="getContainer">
          </div>
        </div>


  );
}

export default UserPage;
