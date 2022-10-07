import React from "react";
import "./Movies.css";

const Movies = ({ movie }) => {
  console.log(movie);
  const { poster_path, overview } = movie;
  return (
    <div>
      <img src={poster_path} alt="" />
      <h1>{overview}</h1>
    </div>
  );
};

export default Movies;
