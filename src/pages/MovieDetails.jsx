import { useParams } from "react-router-dom"
import get from "../data/httpClient"
import { useEffect, useState } from "react";


const MovieDetails = () => {
  const {movieId} = useParams;
  const [movie, setMovies] = useState(null);
  useEffect( () => {
    const fetchMovie = async function() {
      const response = await get("/movie/"+movieId);
      return setMovies(response);
    }
    fetchMovie();
  }, [movieId]);


  return (
    <div>
      <img src={""}/>
    </div>
  )
}

export default MovieDetails






