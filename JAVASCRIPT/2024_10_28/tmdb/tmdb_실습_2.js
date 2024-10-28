// 현재 상영 중인 영화 중 평점(vote_average)이 가장 높은 영화의 수익(revenue)를 찾으시오.
import dotenv from 'dotenv';
// const dotenv = require('dotenv')
dotenv.config();

async function getNowPlayingMovies() {
  try {
    const baseURL = 'https://api.themoviedb.org/3/movie';
    const apiKey = process.env.TMDB_API_KEY;
    const path = '/now_playing';
    const params = new URLSearchParams({
      api_key: apiKey,
      language: 'ko',
    });

    let URL = `${baseURL}${path}?${params}`;

    const response = await fetch(URL);
    const data = await response.json();

    const movies = data.results;

    const maxVoteMovie = movies.reduce((acc, cur) => {
      const accVoteAverage = acc.vote_average;
      const curVoteAverage = cur.vote_average;

      if (accVoteAverage > curVoteAverage) {
        return acc;
      } else if (accVoteAverage < curVoteAverage) {
        return cur;
      }
    });
    const movieId = maxVoteMovie.id;
    console.log(movieId);

    URL = `${baseURL}/${movieId}?${params}`;

    const response2 = await fetch(URL);
    const data2 = await response2.json();
    console.log(data2);
    const revenue = data2.revenue;

    console.log(revenue);
    // ///////////////////////////
  } catch (error) {
    console.error('Error:', error);
  }
}

getNowPlayingMovies();
