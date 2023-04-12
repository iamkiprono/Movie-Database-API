import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const url = "https://api.themoviedb.org/3/movie/popular?api_key=";
  const apiKey = "aeeb61963da597e184eba3a9b3377487";

  const getMovies = async () => {
    try {
      const res = await fetch(`${url}${apiKey}`);
      const data = await res.json();
      console.log(data.results);

      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h2>Popular Movies</h2>
      <div className="container">
        {movies.map((movie) => {
          return (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <div className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt=""
                />
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
                <p>{movie.vote_average}/10</p>
                <button className="view-details">View Details</button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PopularMovies;
