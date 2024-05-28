import { Link } from "react-router-dom";
import ViTable from "../components/ViTable";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
// import React, {useState} from "react";

const movies = [
  {
    id: 'movie-uuid-1',
    name: 'Edge of Tomorrow',
    genre: 'Action, Sci-fi',
    medium: 'Movie',
    image: '../445edge.jpg'
  },
  {
    id: 'movie-uuid-3',
    name: 'The Lost Temple 2',
    genre: 'Action, Thriller',
    medium: 'Movie',
    image: '../cover4.jpg'
  },
  {
    id: 'movie-uuid-12',
    name: 'Deadpool & Wolverine',
    genre: 'Action, Comedy',
    medium: 'Movie',
    image: '../dead.png'
  },
  {
    id: 'movie-uuid-5',
    name: 'Dune 2',
    genre: 'Action, Thriller',
    medium: 'Movie',
    image: '../dune2.jpg'
  },
  {
    id: 'movie-uuid-7',
    name: 'The Batman',
    genre: 'Action, Thriller',
    medium: 'Movie',
    image: '../batman.jpg'
  },

  
];
const UserManagement= () => {

  
  const uuid = uuidv4();
  console.log(uuid);
// qwdqwqd

// wedewd
    return(
        <div>
        <h2 className="title">Movies & Series:-</h2>
        
        
        {/* <Link className="adser" to="/Pages/AddUser">Add User here.</Link> */}

        <h3 className="title">Latest:-</h3>
        {/* New card 1 */}
        
<div class="flex-box">

{movies.map(movie => (
          <div key={movie.id} className="boxy">
            <div className="center flex">

            
            <Link to={`/Movie/${movie.id}`}>
                  
              <div>
              
                <img className="posters"  src={movie.image} alt={movie.name} />
              </div>
              
              </Link>
              {/* </div> */}
              {/* </div> */}




              <div>
                <p className="solid"><strong>Name:</strong> {movie.name}</p>
                <p className="solid"><strong>Genre:</strong> {movie.genre}</p>
                <p className="solid"><strong>Medium:</strong> {movie.medium}</p>
                {/* <Link to={`/Movie/${movie.id}`}>
                  <button className="accordion">Watch Now!</button>
                </Link> */}
              </div>
            </div>
          </div>
        ))}
        {/* end */}

      
      
{/* <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
    <a href="#" class="block w-full h-full">
        <img alt="blog photo" src="cover4.jpg" class="object-cover w-full max-h-40"/>
        <div class="w-full p-4 bg-white dark:bg-gray-800">
            <p class="font-medium text-indigo-500 text-md">
            </p>
            <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                New Macs here !
            </p>
            <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years on...
            </p>
        </div>
    </a>
</div> */}

    </div>

  

    

             {/* YES!!! */}
        </div>

    );
};


export default UserManagement;