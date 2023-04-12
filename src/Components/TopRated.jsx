import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TopRated = () => {
  const [movies, setMovies] = useState([]);
  const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=";
  const apiKey = "aeeb61963da597e184eba3a9b3377487";
  

  const getMovies = async () => {
    try {
      const res = await fetch(`${url}${apiKey}`);
      const data = await res.json();
      setMovies(data.results);
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h2>Top Rated</h2>
      <div className="container">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
              />
              <h3>{movie.title}</h3>
              <h5>{movie.original_name}</h5>
              <p>{movie.first_air_date}</p>
              <p>{movie.vote_average}/10</p>
              <button className="view-details">View Details</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopRated;
