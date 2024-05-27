import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

const trailers = {

  'movie-uuid-2': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Example URL for testing
 
  'movie-uuid-6': 'https://www.youtube.com/watch?v=V-mugKDQDlg&pp=ygUWZmFsbG91dCBzZXJpZXMgdHJhaWxlcg%3D%3D',
  

};

const Series = () => {
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
      <h2 className="title">Series:-</h2>
      {trailerUrl ? (
        <ReactPlayer
          controls={true}
          url={trailerUrl}
          width="1100px"
          height="650px"
        />
      ) : (
        <p>Trailer not available yeah!😁</p>
      )}
    </div>
  );
};

export default Series;
