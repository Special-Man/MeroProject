import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import ViTable from "../components/ViTable";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  //import batman from "../assets/batman.jpg";
  import gxk from "../assets/gxk.png";
  import dune2 from "../assets/dune2.jpg";

const UserManagement= () => {

  
  const uuid = uuidv4();
  console.log(uuid);


    const header = [
        {
          key: "username",
          name: "Username",
        },
        {
          key: "email",
          name: "Email",
        },
        {
          key: "age",
          name: "Age",
        },
        {
          key: "city",
          name: "City",
        }
      ]
    const data =[
        {
            id:1,
        username: "Bishesh",
        email: "specialman2099@gmail.com",
        age: 22,
        city:'Gotham'
    },
    {
        id: 2,
        username: "jay",
        email: "jay@gmail.com",
        age: 20,
        city:'Gotham'
    },
    {
        id: 3,

        username: "joey",
        email: "joey@gmail.com",
        age: 21,
        city:'Gotham'
    },
     {
        id: 4,

        username: "Ben",
        email: "Ben.reilly@gmail.com",
        age: 21,
        city:'New York'
    },
    {
        id: 5,

        username: "Jessica",
        email: "Jessica.reilly@gmail.com",
        age: 21,
        city:'New York'
    },
    ]

const [users, setUsers] = useState([]);

// useEffect( ()=> {
//     axios
//         .get("http://localhost:4000/users")
//         .then((res) => {
//           console.log(res.data);
//           setUsers(res.data);
//         })
//         .catch((err) => {  // Corrected the opening bracket for catchy
//           alert("API Server Error");
//           console.log(err);
//         });
//     }, []);



    return(
        <div>
        <h2>Movies & Series:-</h2>
        
        
        {/* <Link className="adser" to="/Pages/AddUser">Add User here.</Link> */}

        <h3>Latest:-</h3>
        {/* New card 1 */}
        

{/* THis is for: 1 */}
        <div class="boxy">
    <div class="center">
    <div>
      <img className="posters" src="../cover.jpg"></img>
      </div>
    <div>
      
      <p class="solid"> <strong>Name:</strong> TerraForge Chronicles: Nexus Dawn</p>
       <p class="solid"><strong>Genre:</strong> Action, Thriller</p>
        <p class="solid"><strong>Medium:</strong> Movie</p>
         <button class="accordion" onclick="document.location='http://localhost:8080/mero/mero4.jsp'">Watch Now!</button>
        </div>
    </div>
    </div>

  {/* THis is for: 1.5 */}
  <div class="boxy">
    <div class="center">
    <div>
      <img className="posters" src="../cover4.jpg"></img>
      </div>
    <div><p class="solid"> <strong>Name:</strong> The Lost Temple 2: Anthrolopogia</p>
        <p class="solid"><strong>Genre:</strong> Action, Thriller</p>
        <p class="solid"><strong>Medium:</strong> Movie</p>
         <button class="accordion" onclick="document.location='http://localhost:8080/mero/mero4.jsp'">Watch Now!</button>
        </div>
    </div>
    </div>

    {/* THis is for: 2 */}
    <div class="boxy">
    <div class="center">
    <div>
      <img className="posters" src={gxk}/>
      </div>
    <div><p class="solid"> <strong>Name:</strong> Godzilla x Kong: The New Empire</p>
        <p class="solid"><strong>Genre:</strong> Action, Entertainment</p>
        <p class="solid"><strong>Medium:</strong> Movie</p>
        <button class="accordion" onclick="document.location='http://localhost:8080/mero/mero4.jsp'">Watch Now!</button>
        </div>
    </div>
    </div>

    {/* THis is for: 3 */}
    <div class="boxy">
    <div class="center">
    <div>
      <img className="posters" src={dune2}/>
      </div>
    <div><p class="solid"> <strong>Name:</strong> Dune: Part Two</p>
        <p class="solid"><strong>Genre:</strong> Action, Thriller</p>
        <p class="solid"><strong>Medium:</strong>Movie</p>
        <button class="accordion" onclick="document.location='http://localhost:8080/mero/mero4.jsp'">Watch Now!</button>
        </div>
    </div>
    </div>
{/* _________________________________________________2ND_LINE_________________________________________________________________________ */}
    {/* THis is for: 1 */}
    <div class="boxy">
    <div class="center">
    <div>
      <img className="posters" src="../batman.jpg"></img>
      </div>
    <div>
      
      <p class="solid"> <strong>Name:</strong> The Batman</p>
       <p class="solid"><strong>Genre:</strong> Action, Thriller</p>
        <p class="solid"><strong>Medium:</strong> Movie</p>
         <button class="accordion" onclick="document.location='http://localhost:8080/mero/mero4.jsp'">Watch Now!</button>
        </div>
    </div>
    </div>

     {/* THis is for: 2 */}
     <div class="boxy">
    <div class="center">
    <div>
    <img className="posters" src="../superman.png"></img>
      </div>
    <div><p class="solid"> <strong>Name:</strong> Superman</p>
        <p class="solid"><strong>Genre:</strong> Action, Entertainment</p>
        <p class="solid"><strong>Medium:</strong> Movie</p>
        <button class="accordion" onclick="document.location='http://localhost:8080/mero/mero4.jsp'">Watch Now!</button>
        </div>
    </div>
    </div>

  {/* THis is for: 1.5 */}
  <div class="boxy">
    <div class="center">
    <div>
      <img className="posters" src="../cover2.jpg"></img>
      </div>
    <div><p class="solid"> <strong>Name:</strong> The Man from Oblivexia</p>
        <p class="solid"><strong>Genre:</strong> Drama, Suspense</p>
        <p class="solid"><strong>Medium:</strong> Movie</p>
         <button class="accordion" onclick="document.location='http://localhost:8080/mero/mero4.jsp'">Watch Now!</button>
        </div>
    </div>
    </div>

    

    {/* THis is for: 3 */}
    <div class="boxy">
    <div class="center">
    <div>
    <img className="posters" src="../ScarletSpider.jpg"></img>
      </div>
    <div><p class="solid"> <strong>Name:</strong> Scarlet-Spider: Part Two</p>
        <p class="solid"><strong>Genre:</strong> Action, Suspense</p>
        <p class="solid"><strong>Medium:</strong>Movie</p>
        <button class="accordion" onclick="document.location='http://localhost:8080/mero/mero4.jsp'">Watch Now!</button>
        </div>
    </div>
    </div>

             {/* YES!!! */}
        </div>

    );
};


export default UserManagement;