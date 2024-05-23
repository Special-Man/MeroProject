// import video from '../Edge1.mp4';
import ReactPlayer from 'react-player';

const Movie= () => {

    return(
        <div>
             <h2>Movie1:-</h2>
             {/* <video width ="1100" src="../Edge1.mp4"/> */}

             {/* <video width ="1100" controls> 1st battle: https://www.youtube.com/watch?v=eWH2w-LUVc0
             <source src={video} type ="video/mp4"/> trailer: https://www.youtube.com/watch?v=vw61gCe2oqI
             </video> */}
             <ReactPlayer
             controls={true}
             url={'https://www.youtube.com/watch?v=48yIy_p3-vQ'}
             width={1100}
             height={650}
             />

             {/* <ReactPlayer controls={true} width ="1100" src="../Edge1.mp4"/> */}


        </div>
    )
}
export default Movie;