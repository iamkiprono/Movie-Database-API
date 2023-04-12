import React, { useState } from "react";
import Spinner from "./Spinner";

const SearchResults = () => {
  const [search, setSearch] = useState("");
  const [checkValue, setCheckValue] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = "aeeb61963da597e184eba3a9b3377487";
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (checkValue == "movies") {
     

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
      }
    } else {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${search}`
        );
        const data = await res.json();
        setIsLoading(false);
        console.log(data.results);
        setResults(data.results);
      } catch (error) {
        console.log(error);
      }
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
        <input
          value={"movies"}
          type="checkbox"
          onChange={(e) => {
            setCheckValue(e.target.value);
          }}
        />{" "}
        <label>Movies</label>
        <input
          value={"series"}
          type="checkbox"
          onChange={(e) => {
            setCheckValue(e.target.value);
          }}
        />{" "}
        <label>TV Series</label>
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
