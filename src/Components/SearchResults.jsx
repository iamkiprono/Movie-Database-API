import React, { useState } from "react";
import Spinner from "./Spinner";
import { FaSearch } from "react-icons/fa";

const SearchResults = () => {
  const [search, setSearch] = useState("");

  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [movies, setMovies] = useState(true);
  const [series, setSeries] = useState(false);

  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (movies) {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`
        );
        const data = await res.json();
        setIsLoading(false);
        console.log(data.results);
        setResults(data.results);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    } else if (series) {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${search}`
        );
        const data = await res.json();
        setIsLoading(false);
        console.log(data.results);
        setResults(data.results);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    } else {
      return;
    }
  };
  return (
    <div className="search-results">

      <h2>Search results</h2>
      <form onSubmit={handleSubmit} className="search">
        <input
          type="Search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
      <div className="checkboxes">
      <input
          checked={movies}
          value={"movies"}
          type="checkbox"
          onChange={(e) => {
            setMovies(e.target.checked);
            setSeries(false);
          }}
        />
        <label>Movies</label>
        <input
          checked={series}
          value={"series"}
          type="checkbox"
          onChange={(e) => {
            setSeries(e.target.checked);
            setMovies(false);
          }}
        />
        <label>TV Series</label>

      </div>
        {isLoading ? <Spinner /> : ""}
      <div className="container">
        
  
        {
          results.map((movie) => {
              return (
                <div key={movie.id} className="card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    alt=""
                  />
                  <h3>{movie.name}</h3>
                  <h3>{movie.title}</h3>
                  <p>{movie.release_date}</p>
                  <p>
                    {!movie.vote_average
                      ? "Not rated"
                      : `${Math.round(movie.vote_average)}/10`}
                  </p>
                  <p className="overview">{movie.overview}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default SearchResults;
