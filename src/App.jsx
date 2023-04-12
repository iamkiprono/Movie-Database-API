import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PopularMovies from "./Components/PopularMovies";
import TopRated from "./Components/TopRated";
import Navbar from "./Components/Navbar";
import MovieDetails from "./Components/MovieDetails";
import SearchResults from "./Components/SearchResults";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PopularMovies />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="movies/:id" element={<MovieDetails />} />
          <Route path="toprated" element={<TopRated />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
