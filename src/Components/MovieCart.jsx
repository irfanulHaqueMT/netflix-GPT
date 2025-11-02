import React from "react";
import { MOVIE_IMG } from "../utils/constants";

const MovieCart = ({ posterPath }) => {
  return (
    <div className="w-42 pr-2 ">
      <img className="" src={MOVIE_IMG + posterPath} alt="movie" />
    </div>
  );
};

export default MovieCart;
