import React from "react";
import { useLoaderData } from "react-router-dom";
import Movies from "../Movies/Movies";
import "./Home.css";

const Home = () => {
  const allMovies = useLoaderData();
  const movies = allMovies.results;

  return (
    <div>
      {movies.map((movie) => (
        <Movies key={movie.id} movie={movie}></Movies>
      ))}
    </div>
  );
};

export default Home;
