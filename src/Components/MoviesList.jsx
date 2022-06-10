import React from "react";
import { Row } from "react-bootstrap";
import { CardMovies } from "./CardMovies";
import { ThePaginations } from "./ThePaginations";

export const MoviesList = ({ movies, getCurrentPage, pageCount }) => {
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((movie) => {
          return <CardMovies key={movie.id} movie={movie} />;
        })
      ) : (
        <h1 className="text-center p-5">" No Movies Found ... "</h1>
      )}

      {movies.length >= 1 ? (
        <ThePaginations getCurrentPage={getCurrentPage} pageCount={pageCount} />
      ) : null}
    </Row>
  );
};
