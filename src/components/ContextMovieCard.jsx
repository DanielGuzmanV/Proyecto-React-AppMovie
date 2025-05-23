import { useEffect, useState } from "react"
import get from "../data/httpClient";
import MovieCard from "../components/MovieCard";
import "../components/ContextMovieCard.css";

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
    <ul className="container">
      {movies.map( (movieItem) => (
        < MovieCard  objMovie={movieItem} key= {movieItem.id}/>
      ))}
    </ul>
  )
}

export default ContextMovieCard






