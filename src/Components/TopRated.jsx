import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const TopRated = () => {
  const [movies, setMovies] = useState([]);
  const url = "https://api.themoviedb.org/3/tv/top_rated?api_key=";
  const apiKey = "aeeb61963da597e184eba3a9b3377487";
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${url}${apiKey}`);
      const data = await res.json();
      setIsLoading(false);
      setMovies(data.results);
      console.log(data.results);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h2>Top Rated TV</h2>
      <div className="container">
      {isLoading ? <Spinner /> : ""}
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
