import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const Main = () => {

const [movies, setMovies] = useState([])
const [search, setSearch] = useState("")

let key = process.env.REACT_APP_apiKey;

   
useEffect(() => {
  axios(`https://api.themoviedb.org/3/discover/movie?api_key=${key}`)
  .then(res=>setMovies(res.data.results))}, [])


const searchMovie= (e)=>{
  e.preventDefault()
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${search}`)
  .then(res=>setMovies(res.data.results))
}







  return (
    <div className=" h-screen bg-gray-700 dark:bg-slate-200 overflow-scroll" >
        <form onSubmit={searchMovie}  action="" className="flex flex-row justify-center p-4 gap-2 items-center ">
          
            <input required onChange={(e)=>setSearch(e.target.value)} className="rounded-sm ps-2 p-0.5 w-[15rem]" placeholder='Search...' type="search" />
            <button className="font-bold text-white dark:text-black">Search</button>
        </form>
       
     <MovieCard movies={movies}/>

    </div>
  )
}

export default Main