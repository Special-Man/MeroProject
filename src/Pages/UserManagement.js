import { Link } from "react-router-dom";
import ViTable from "../components/ViTable";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

const movies = [
  {
    id: 'movie-uuid-1',
    name: 'Edge of Tomorrow',
    genre: 'Action, Sci-fi',
    medium: 'Movie',
    image: '../445edge.jpg'
  },
  {
    id: 'movie-uuid-2',
    name: 'The Lost Temple 2: Anthrolopogia',
    genre: 'Action, Thriller',
    medium: 'Movie',
    image: '../cover4.jpg'
  },
  {
    id: 'movie-uuid-3',
    name: 'Anthrolopogia',
    genre: 'Action, Thriller',
    medium: 'Movie',
    image: '../cover5.jpg'
  }
];
const UserManagement= () => {

  
  const uuid = uuidv4();
  console.log(uuid);

    return(
        <div>
        <h2>Movies & Series:-</h2>
        
        
        {/* <Link className="adser" to="/Pages/AddUser">Add User here.</Link> */}

        <h3>Latest:-</h3>
        {/* New card 1 */}
        
<div class="flex-box">

{movies.map(movie => (
          <div key={movie.id} className="boxy">
            <div className="center flex">
              <div>
                <img className="posters" src={movie.image} alt={movie.name} />
              </div>
              <div>
                <p className="solid"><strong>Name:</strong> {movie.name}</p>
                <p className="solid"><strong>Genre:</strong> {movie.genre}</p>
                <p className="solid"><strong>Medium:</strong> {movie.medium}</p>
                <Link to={`/Movie/${movie.id}`}>
                  <button className="accordion">Watch Now!</button>
                </Link>
              </div>
            </div>
          </div>
        ))}

    </div>

    

             {/* YES!!! */}
        </div>

    );
};


export default UserManagement;