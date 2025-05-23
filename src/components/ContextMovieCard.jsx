import { useEffect, useState } from "react"
import get from "../data/httpClient";
import MovieCard from "../components/MovieCard";

const pathMovies = "/discover/movie";

function ContextMovieCard() {
  const [movies, setMovies] = useState([]);
  
  useEffect( () => {

    const fetchMovies = async function () {
      const response = await get(pathMovies);
      return setMovies(response.results);
    };
    fetchMovies();

  }, []);

  return (
    <ul>
      {movies.map( (movieItem) => (
        < MovieCard  objMovie={movieItem}/>
      ))}
    </ul>
  )
}

export default ContextMovieCard






