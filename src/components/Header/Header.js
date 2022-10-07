import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="nav-info">
        <Link to="/popular">Popular</Link>
        <Link to="/top-rated">Top rated</Link>
        <Link to="/upcoming">Upcoming</Link>
      </div>
    </div>
  );
};

export default Header;
