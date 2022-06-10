import React, { useEffect, useState } from "react";
import { TheNavbar } from "./Components/TheNavbar";
import { MoviesList } from "./Components/MoviesList";
import { Container } from "react-bootstrap";
import axios from "axios";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { MovieDetails } from "./Components/MovieDetails";

function App() {
  const [movies, setMovies] = useState([]);

  const [pageCount, setPageCount] = useState(1);

  // using Axios to fetch data from API
  const getAllMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=d62fab375b1bed6fa545545d520c16f0&language=en-US"
    );
    setMovies(response.data.results);
    setPageCount(response.data.total_pages);
    // console.log(movies);
  };

  // Get CURRENT Page using Axios to fetch data from API
  const getCurrentPage = async (currentPage) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=d62fab375b1bed6fa545545d520c16f0&language=en-US&page=${currentPage}`
    );
    setMovies(response.data.results);
    setPageCount(response.data.total_pages);
    // console.log(movies);
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  // Search Functionality
  const SearchHandler = async (word) => {
    if (word === "") {
      getAllMovies();
    }

    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=d62fab375b1bed6fa545545d520c16f0&query=${word}&language=en-US&page=1&include_adult=false`
    );
    setMovies(response.data.results);
    setPageCount(response.data.total_pages);
  };

  return (
    <div className="font color-body">
      <TheNavbar SearchHandler={SearchHandler} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                  movies={movies}
                  getCurrentPage={getCurrentPage}
                  pageCount={pageCount}
                />
              }
            />

            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
