import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const url = "https://api.themoviedb.org/3/movie/popular?api_key=";
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const getMovies = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${url}${apiKey}`);
      const data = await res.json();
      console.log(data);

      setMovies(data.results);
      setIsLoading(false);
    } catch (error) {
      {
        error.message == "Failed to fetch"
          ? setErr("Server disconneted!")
          : setErr(error.message);
      }

      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h2>Popular Movies</h2>
      <div className="container">
        {err}
        {isLoading ? <Spinner /> : ""}
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
