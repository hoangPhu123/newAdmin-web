import React from 'react'
import MovieList from './MovieList/MovieList'
import { useEffect, useState } from "react";
import { getMovieService } from '../../service/movieService';
import MovieTab from './MovieTab/MovieTab';

export default function HomePage() {

  let [movieArr, setMovieArr] = useState([]);

  useEffect(() => {
    getMovieService()
      .then((res) => {
        setMovieArr(res.data.content)
      })
      .catch((err) => {
      });
  }, []);

  return (
    <div className='container w-4/5 mx-auto mt-6'>
      <MovieList movieArr = {movieArr}/>
      <MovieTab/>
    </div>
  )
}
