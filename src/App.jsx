import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PopularMovies from "./Components/PopularMovies";
import PopularTvShows from "./Components/PopularTvShows";
import Navbar from "./Components/Navbar";
import MovieDetails from "./Components/MovieDetails";
import TvDetails from "./Components/TvDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="movies" element={<PopularMovies />} />
          <Route path="movies/:id" element={<MovieDetails />} />
          <Route path="tvdetails" element={<TvDetails />} />

          <Route path="/tvshows" element={<PopularTvShows />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
