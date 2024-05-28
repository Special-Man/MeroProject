import { Link } from "react-router-dom";
import ViTable from "../components/ViTable";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

const movies = [
  {
    id: 'movie-uuid-6',
    name: 'Horse Rider: Edge of Time',
    genre: 'Drama',
    medium: 'Series',
    image: '../cover2.jpg'
  },
  {
    id: 'movie-uuid-2',
    name: 'The Window: tahiroforia',
    genre: 'Thriller',
    medium: 'Series',
    image: '../cover6.jpg'
  },
  {
    id: 'movie-uuid-6',
    name: 'Anthrolopogia',
    genre: 'Action, Thriller',
    medium: 'Series',
    image: '../cover.jpg'
  }
];
const Contact= () => {

  
  const uuid = uuidv4();
  console.log(uuid);

    return(
        <div>
        <h2 className="title">Series:-</h2>
        
        
        {/* <Link className="adser" to="/Pages/AddUser">Add User here.</Link> */}

        
        {/* New card 1 */}
        
<div class="flex-box">

{movies.map(movie => (
          <div key={movie.id} className="boxy">
            <div className="center flex">

            <Link to={`/Series/${movie.id}`}>
                
              <div>
                <img className="posters"  src={movie.image} alt={movie.name} />
              </div>
             
              </Link>

              <div>
                <p className="solid"><strong>Name:</strong> {movie.name}</p>
                <p className="solid"><strong>Genre:</strong> {movie.genre}</p>
                <p className="solid"><strong>Medium:</strong> {movie.medium}</p>
               
              </div>
            </div>
          </div>
        ))}

    </div>

    

             {/* YES!!! */}
        </div>

    );
};


export default Contact;