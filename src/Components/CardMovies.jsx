import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CardMovies = ({ movie }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <Link to={`/movie/${movie.id}`}>
        <div className="card">
          <img
            className="card__image"
            src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
            alt="Movies"
          />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>Title : {movie.title}</p>
              <p>Released : {movie.release_date}</p>
              <p>Vote_count : {movie.vote_count}</p>
              <p>Vote : {movie.vote_average}</p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};
