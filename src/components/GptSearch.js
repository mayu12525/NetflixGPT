import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BACK_IMG } from '../utils/constants';

const GptSearch = () => {
  return (
    <>
    
        <div className='fixed -z-10'>
            
            <img className='' 
            //h-screen object-cover
            src={BACK_IMG}
            alt='netflix-background-img'/>
          </div>
      <div className=''>
          <GptSearchBar/>
          <GptMovieSuggestions/>
      </div>
      </>
  )
}

export default GptSearch;
