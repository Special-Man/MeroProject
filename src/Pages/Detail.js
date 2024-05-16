import { useState } from "react";
import { useEffect } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";
import { v4 as uuidv4 } from 'uuid';


const Detail= () => {
    const {id}=useParams();
     const {username}=useParams();


const [user, setUser] = useState({
    username:"",
    email:"",
    age:"",
    city:"",

});
     
 useEffect(()=>{
    axios
        .get(`http://localhost:4000/users/${id}`)
        .then((res) => {
          console.log(res.data);
          setUser(res.data);
        })
        .catch((err) => {  // Corrected the opening bracket for catch
          alert("API Server Error");
          console.log(err);
        });
    }, []);
    
//     const newUser = data.find((obj)=>obj.id.toString()===id.toString())
//     setUser(newUser);
// }, []);


    return(
        <div>
        <h2>This is Fast Detail yeah </h2>
        <h3>The detail page no.:{id}</h3>

         {/* <h1>User Details {id} {username}</h1> */}
            <div>Username: {user.username}</div>
            <div>Age: {user.age}</div>
            <div>City: {user.city}</div>
            <div>Email: {user.email}</div>


        </div>

    );
};

export default Detail;