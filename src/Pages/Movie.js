import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

const trailers = {
  'movie-uuid-1': 'https://www.youtube.com/watch?v=48yIy_p3-vQ',
  'movie-uuid-2': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Example URL for testing 
  'movie-uuid-3': 'https://www.youtube.com/watch?v=GIAn5zDtI10',
  'movie-uuid-4': 'https://www.youtube.com/watch?v=TYljxL4WeRo&t=14s&pp=ygUeZ29kemlsbGEgeCBrb25nIHRoZSBuZXcgZW1waXJl',
  'movie-uuid-5': 'hhttps://www.youtube.com/watch?v=VDlY71vZivs&pp=ygUOZHVuZSAyIHByZXZpZXc%3D',
  'movie-uuid-6': 'https://www.youtube.com/watch?v=V-mugKDQDlg&pp=ygUWZmFsbG91dCBzZXJpZXMgdHJhaWxlcg%3D%3D',
  'movie-uuid-7': 'https://www.youtube.com/watch?v=761uRaAoW00&pp=ygUSdGhlIGJhdG1hbiBwcmV2aWV3',
  'movie-uuid-8': 'https://www.youtube.com/watch?v=-YV9GYSrJZs',
  'movie-uuid-9': 'https://www.youtube.com/watch?v=-AR5X_Hk6IA',
  'movie-uuid-10': 'https://www.youtube.com/watch?v=WfV-0Yv5vNY',
  'movie-uuid-11': 'https://www.youtube.com/watch?v=wz_-wornJwA',
  'movie-uuid-12': 'https://www.youtube.com/watch?v=RP0K94bGNnA',
  'movie-uuid-13': '',







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
      <h2>Movie :-</h2>
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
