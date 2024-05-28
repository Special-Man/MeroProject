import { Link } from "react-router-dom";
import ViTable from "../components/ViTable";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

const movies = [
  {
    id: 'movie-uuid-3',
    name: 'Deadpool & Wolverine',
    genre: 'Action, Comedy',
    medium: 'Movie',
    image: '../dead.png'
  },
 
  {
    id: 'movie-uuid-1',
    name: 'Edge of Tomorrow',
    genre: 'Action, Sci-fi',
    medium: 'Movie',
    image: '../445edge.jpg'
  },
  {
    id: 'movie-uuid-4',
    name: 'Godzilla x Kong',
    genre: 'Action, Entertainment',
    medium: 'Movie',
    image: '../gxk.png'
  },
  {
    id: 'movie-uuid-5',
    name: 'Dune 2',
    genre: 'Action, Thriller',
    medium: 'Movie',
    image: '../dune2.jpg'
  },
  {
    id: 'movie-uuid-12',
    name: 'Deadpool',
    genre: 'Action, Rom-Com',
    medium: 'Movie',
    image: '../dead1.jpg'
  },
  {
    id: 'movie-uuid-7',
    name: 'The Batman',
    genre: 'Suspense, Thriller',
    medium: 'Movie',
    image: '../batman.jpg'
  },
  {
    id: 'movie-uuid-9',
    name: 'Transformers: Dark of the Moon',
    genre: 'Action, Entertainment',
    medium: 'Movie',
    image: '../tf3.jpg'
  },
  {
    id: 'movie-uuid-11',
    name: 'Spider-Man',
    genre: 'Action, Entertainment',
    medium: 'Movie',
    image: '../spidey.jpg'
  },
  {
    id: 'movie-uuid-10',
    name: 'The Amazing Spider-Man 2',
    genre: 'Action, Entertainment',
    medium: 'Movie',
    image: '../tasm2.jpg'
  },
  
  {
    id: 'movie-uuid-2',
    name: 'The Lost Temple 2: Anthrolopogia',
    genre: 'Adventure, Mystery',
    medium: 'Movie',
    image: '../cover4.jpg'
  },
  {
    id: 'movie-uuid-8',
    name: 'Battlefield: 2042',
    genre: 'Action, Thriller',
    medium: 'Movie',
    image: '../battle42.jpg'
  },
];
const Faq= () => {

  
  const uuid = uuidv4();
  console.log(uuid);

    return(
        <div>
        <h2 className="title">Movies:-</h2>
        
        
        {/* <Link className="adser" to="/Pages/AddUser">Add User here.</Link> */}

        <h3 className="title">All Movies:-</h3>
        {/* New card 1 */}
        
<div class="flex-box">

{movies.map(movie => (
          <div key={movie.id} className="boxy">
            <div className="center flex">
            <Link to={`/Movie/${movie.id}`}>
                  
              <div>
                <img className="posters" src={movie.image} alt={movie.name} />
              </div>
              
              </Link>
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

    </div>

    

             {/* YES!!! */}
        </div>

    );
};


export default Faq;