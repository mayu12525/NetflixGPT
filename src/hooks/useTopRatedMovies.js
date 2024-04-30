import { addTopRatedMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useTopRatedMovies = () =>{
    const dispatch = useDispatch();
  
    const topRatedMovies = useSelector(store=>store.movies.topRatedMovie);
    const getTopRatedMovies =  async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }
  
    useEffect(()=>{
        if(!topRatedMovies) getTopRatedMovies();
    },[])
};

export default useTopRatedMovies;



  