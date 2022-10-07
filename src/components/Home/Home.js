import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const allMovies = useLoaderData();
  const movies = allMovies;
  const { backdrop_path } = movies.results;

  return (
    <div>
      <img src={movies.results.backdrop_path} alt="" />
    </div>
  );
};

export default Home;
