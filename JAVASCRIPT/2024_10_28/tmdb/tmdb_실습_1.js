// 현재 상영 중인 영화 중 평점(vote_average)이 가장 높은 영화를 찾으시오.
import dotenv from 'dotenv';
// const dotenv = require('dotenv')
dotenv.config();

async function getPost() {
    
  try{
    const baseURL = 'https://api.themoviedb.org/3/movie'
    // const path = '/popular'
    const apiKey = process.env.TMDB_API_KEY;
    const path = '/now_playing'
    const params = new URLSearchParams({
      api_key: apiKey,
      language: 'ko',
    })
  
    const URL = `${baseURL}${path}?${params}`;
    const response = await fetch(URL);
    const data = await response.json();
    
    const movies = data.results

    // console.log(movies); //전체 출력

    //방법1
    let maxVoteAverage = 0;
    let maxVoteMovie = null;

    for (let movie of movies) {
      let voteAverage = movie.vote_average;

      if (voteAverage > maxVoteAverage) {
        maxVoteAverage = voteAverage;
        maxVoteMovie = movie;
      }
    }

    console.log(maxVoteAverage);
    console.log(maxVoteMovie.title);
    
    ///////////////////////////////////////////////////////

    //방법2
    // const maxVoteAverage2 = movies.reduce((acc, cur) => {
    //     const accVoteAverage = acc.vote_average;
    //     const curVoteAverage = cur.vote_average;
      
    //     if(accVoteAverage > curVoteAverage){
    //         return acc;
    //       } else if(accVoteAverage < curVoteAverage){
    //           return cur;
    //         } else {
    //             const accVoteCount = acc.vote_count;
    //             const curVoteCount = acc.vote_count;
    //   }
    // });    

    // console.log(maxVoteAverage2.title);

    ///////////////////////////////////////////////////////

    //방법3
    // let maxVoteAverage = 0;
    // let maxVoteMovie = null;
    // for(movie of movies){
    //   let voteAverage = movie.vote_average
      
    //   if(voteAverage > maxVoteAverage){
    //     if(voteCount < 100){
    //       continue;
    //     }
    //     maxVoteAverage = voteAverage
    //     maxVoteMovie = movie;
    //   }
    // }
    
  } catch(error){
    console.log('Error:', error);
    }
  }
  getPost();