
export const LOGO ='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';
export const PHOTO_URL ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Wp0u6Kv4386chK7lwWL9QnyYCP2fReJwpX0nLUos2A&s";
export const BACK_IMG='https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg';

export const POSTER_URL='https://image.tmdb.org/t/p/w500';

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
     }
  };

  export const SUPPORTED_LANGUAGES = [{identifier:"english",name:"English"},{identifier:"hindi",name:"Hindi"},{identifier:"spanish",name:"Spanish"}];

  export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;

  export const GPT_QUERY_TEXT_1 = 'Act as a movie recommendation system and suggest some movies for the query.';
  export const GPT_QUERY_TEXT_2 = "Only give me names of 5 movies, comma seperated like the example given ahead. Example results: Gadar, Sholay, Don, Kuch Kuch hota hai, Jhimma";

