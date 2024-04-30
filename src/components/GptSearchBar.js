import React, { useRef } from 'react';
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS, GPT_QUERY_TEXT_1, GPT_QUERY_TEXT_2 } from '../utils/constants';
import {addGptMovieResult} from '../utils/gptSlice';

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //Search movies in TMDB 
  const searchMovieTMDB = async (movie) =>{
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query="
      + movie + 
      "&include_adult=false&language=en-US&page=1", API_OPTIONS);

    const json = await data.json();  
    return json.results;
  }

  const handleGptSearchClick = async () =>{
      //Make an api call to GPT API and get movie results

      const gptQuery = GPT_QUERY_TEXT_1  + " " +searchText.current.value + " " +GPT_QUERY_TEXT_2;

      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content:gptQuery }],
        model: 'gpt-3.5-turbo',
      }); 

      if(!gptResults.choices){
        //TODO: Write error handling
      }

      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

      //For each movie i will search TMDB API

      const promiseArray = gptMovies.map(movie =>  searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));
      
  }
  return (
    <div className='pt-[35%]  md:pt-[10%] flex justify-center'>
      <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()} >
        <input ref={searchText}  type='text' className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceHolder}/>
        <button className='col-span-3 m-4  py-2 px-4 bg-red-700 text-white rounded-lg' onClick={handleGptSearchClick} >{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
