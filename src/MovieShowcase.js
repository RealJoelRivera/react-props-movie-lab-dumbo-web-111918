import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js";

export default class MovieShowcase extends Component {
  // MY METHOD
  // generateMovieCards = () => {
  //   return movieData.map((movie, idx) => {
  //     return (
  //       <MovieCard
  //         key={idx}
  //         movie={movie}
  //         title={movie.title}
  //         IMDBRating={movie.IMDBRating}
  //         poster={movie.poster}
  //         genres={movie.genres.forEach(genre => genre)}
  //       />
  //     );
  //   });
  // };

  // FLATIRON'S METHOD
  generateMovieCards = () => {
    return movieData.map((data, idx) => <MovieCard key={idx} {...data} />);
  };

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}
