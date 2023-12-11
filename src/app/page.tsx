'use client'

import { useEffect, useState } from 'react';

import Movie from '@/components/Movie';
import { MovieAPI } from '@/types/movie';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('Batman');
  const API_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;
  const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`;
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const fetchMovies = () => {
    setLoading(true);

    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {        
        setData(data.Search);
      })
      .finally(() => setLoading(false));
  };
  const onMovieTitleChange = (event: Event) => {
    setSearchTerm(event.target?.value || '');

    setTimeout(() => {
      fetchMovies();
    }, 3000);    
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  
  return (
    <div>
      <div className='search'>
        <input
          type='input'
          value={searchTerm}
          onChange={onMovieTitleChange}
        />
      </div>

      {
        isLoading
          ? <p>Loading...</p>
          : (
            <div className='container'>
              {
                data?.length
                  ? data.map((movie: MovieAPI) => (
                    <Movie
                      id={movie.imdbID}
                      key={movie.imdbID}
                      movie={movie}
                    />
                  ))
                  : <p>No movies available</p>
              }       
            </div>
          )
      }
    </div>
  )
}