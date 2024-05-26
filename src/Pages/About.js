import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

const trailers = {

  'movie-uuid-2': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Example URL for testing
 
  'movie-uuid-6': 'https://www.youtube.com/watch?v=V-mugKDQDlg&pp=ygUWZmFsbG91dCBzZXJpZXMgdHJhaWxlcg%3D%3D',
  

};

const About = () => {
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
      <h2>About Mero Entertainment:-</h2>
      {trailerUrl ? (
        <ReactPlayer
          controls={true}
          url={trailerUrl}
          width="1100px"
          height="650px"
        />
      ) : (

       
<div class="boxppp">
        Welcome to Mero Entertainment, your ultimate destination for an unparalleled movie 
        streaming experience! At Mero Entertainment, we offer an extensive library of movies
         across all genres and eras, ensuring there’s something for every movie enthusiast. 
         Whether you’re a fan of timeless classics, the latest blockbusters, or critically 
         acclaimed indie films, we’ve got you covered.
        
        Dive into our expansive collection of movies, ranging from action and adventure to
         romance, drama, horror, and more. With new titles added regularly, you’ll never run out 
         of options. Our vast library is designed to cater to diverse tastes, ensuring that everyone 
         finds something they love.
        
        Enjoy movies in stunning high-definition, ensuring a cinematic experience right from the 
        comfort of your home. Our adaptive streaming technology guarantees smooth playback, even 
        on slower internet connections, so you can enjoy your favorite films without interruption.
        
        Discover your next favorite movie with our smart recommendation engine. Based on your viewing 
        history and preferences, we curate a selection of films tailored just for you. This personalized 
        approach helps you find hidden gems and makes your movie-watching experience even more enjoyable.
        
        Our intuitive and easy-to-navigate interface allows you to find and watch movies effortlessly. 
        Create playlists, bookmark your favorites, and resume watching right where you left off. With 
        Mero Entertainment, the focus is on convenience and user satisfaction.
        
        Stream Mero Entertainment on various devices, including smartphones, tablets, smart TVs, and 
        computers. This multi-device access ensures that you can watch your favorite movies anytime, anywhere. 
        Whether you’re at home or on the go, Mero Entertainment is always within reach.
        
        Enjoy uninterrupted viewing with our premium, ad-free subscription plans. No ads, just pure 
        entertainment. At Mero Entertainment, we are committed to bringing the magic of movies to your 
        screen. Join us today and immerse yourself in a world of endless entertainment!
        </div>
        
      )}
    </div>
  );
};

export default About;
