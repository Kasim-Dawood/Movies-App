import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export const MovieDetails = () => {
  const params = useParams();

  const [movie, setMovie] = useState([]);

  // GET Details by Axios to fetch data from API
  const getMovieDetails = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=d62fab375b1bed6fa545545d520c16f0&language=en-US`
    );
    setMovie(response.data);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4 ">
          <div className="card-details  d-flex align-items-center ">
            <img
              className="img-movie w-30"
              src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
              alt="movies"
            />
            <div className="justify-content-center text-center  mx-auto">
              <p className="card-text-details border-bottom">
                Film Name: {movie.title}
              </p>
              <p className="card-text-details border-bottom">
                Released: {movie.release_date}
              </p>
              <p className="card-text-details border-bottom">
                Vote_count : {movie.vote_count}
              </p>
              <p className="card-text-details border-bottom">
                vote_average : {movie.vote_average}
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1 ">
          <div className="card-story  d-flex flex-column align-items-start">
            <div className="text-end p-4 ">
              <p className="card-text-title border-bottom">The Story:</p>
            </div>
            <div className="text-end px-2">
              <p className="card-text-story">{movie.overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="mt-2 d-flex justify-content-center "
        >
          <Link to="/">
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary mx-4"
            >
              Home Page
            </button>
          </Link>
          <a href={movie.homepage}>
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary"
            >
              Watch Now
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
};
