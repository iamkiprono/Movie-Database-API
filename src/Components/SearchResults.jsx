import React, { useState } from "react";
import Spinner from "./Spinner";

const SearchResults = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=SEARCH_QUERY";
  const apiKey = "aeeb61963da597e184eba3a9b3377487";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${search}`
      );
      const data = await res.json();
      setIsLoading(false);
      console.log(data.results);
      setResults(data.results);
    } catch (error) {
      //   setIsLoading(true);
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Search results</h2>
      <form onSubmit={handleSubmit} className="search">
        <input
          type="Search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
      <div className="container">
        {isLoading ? <Spinner /> : ""}
        {results === []
          ? "No results"
          : results.map((movie) => {
              return (
                <div key={movie.id} className="card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    alt=""
                  />
                  <h3>{movie.name}</h3>
                  <p>{movie.release_date}</p>
                  <p>{Math.round(movie.vote_average)}/10</p>
                  <p className="overview">{movie.overview}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default SearchResults;
