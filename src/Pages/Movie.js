import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

const trailers = {
  'movie-uuid-1': 'https://www.youtube.com/watch?v=48yIy_p3-vQ',
  'movie-uuid-2': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Example URL for testing
  'movie-uuid-3': 'https://www.youtube.com/watch?v=GIAn5zDtI10'
};

const Movie = () => {
  const { id } = useParams();
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    setTrailerUrl(trailers[id] || '');
  }, [id]);

  useEffect(() => {
    console.log('Current Trailer URL:', trailerUrl); // Debugging line to ensure URL is set correctly
  }, [trailerUrl]);

  return (
    <div>
      <h2>Movie:-</h2>
      {trailerUrl ? (
        <ReactPlayer
          controls={true}
          url={trailerUrl}
          width="1100px"
          height="650px"
        />
      ) : (
        <p>Trailer not available</p>
      )}
    </div>
  );
};

export default Movie;
