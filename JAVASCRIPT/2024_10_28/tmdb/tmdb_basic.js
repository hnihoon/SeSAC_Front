import dotenv from 'dotenv';
// const dotenv = require('dotenv')
dotenv.config();

// async function getPost() {
//   try{

//   const baseURL = 'https://api.themoviedb.org/3/movie'
//   // const baseURL = 'https://api.themoviedb.org/3'
//   const apiKey = process.env.TMDB_API_KEY;
//   // const path = '/popular'
//   const path = '/top_rated'
//   const params = new URLSearchParams({
//     api_key: apiKey,
//     language: 'ko',
//   })

//   const URL = `${baseURL}${path}?${params}`;
//   const response = await fetch(URL);
//   const data = await response.json();
  
//   // const movies = data.results
//   const movies = data.genre
//   const movie = movies[0];
//   // console.log(movie.title);
//   console.log(movies);
  
//    } catch(error){
//   console.log('Error:', error);
//   }
// }
// getPost();

async function getPost() {
  try{

  const baseURL = 'https://api.themoviedb.org/3'
  // const baseURL = 'https://api.themoviedb.org/3'
  const apiKey = process.env.TMDB_API_KEY;
  // const path = '/popular'
  const path = '/genre/movie/list'
  const params = new URLSearchParams({
    api_key: apiKey,
    language: 'ko',
  })

  const URL = `${baseURL}${path}?${params}`;
  const response = await fetch(URL);
  const data = await response.json();
  
  // const movies = data.results
  const movies = data.genres
  const movie = movies[0];
  // console.log(movie.title);
  console.log(movies);
  
   } catch(error){
  console.log('Error:', error);
  }
}
getPost();