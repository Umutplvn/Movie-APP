import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movies }) => {
console.log(movies);
  return (
    <div className=" flex flex-wrap justify-center ">
      {movies.map((movie) => {
        return (
          <Link to={`movie/:${movie.id}`}>   
          <div 
            key={movie.id}
            className="cardMain relative overflow-hidden flex flex-col justify-center  w-[20rem] h-[28rem] rounded-xl m-5 bg-black"
          >
            
            <div className=" flex flex-col justify-center  w-[20rem] h-[25rem] rounded-t-xl m-auto  bg-black">
              <img
              className="w-[20rem]"
                src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                alt=""
              />
            </div>

            <div className="flex items-center bg-[#312e81] dark:bg-[#c7d2fe] dark:text-black justify-between rounded-b-xl p-3 text-white">
              <h3 className="text-center w-[16rem]">{movie.original_title}</h3>
              <h3 className="bg-yellow-700 dark:bg-yellow-200 p-2 rounded-xl">
                {movie.vote_average}
              </h3>
            </div>

              <p className="cardText overflow-auto translate-x-[21rem]  h-[20rem] bg-white  p-3 bg-opacity-60 absolute  text-black w-[20rem]">
    {movie.overview}
              </p>
          </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MovieCard;
