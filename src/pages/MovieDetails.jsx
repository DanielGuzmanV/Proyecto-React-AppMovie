import { useParams } from "react-router-dom"
import get from "../data/httpClient"
import { useEffect, useState } from "react";
import getMovieImg from "../utils/getMovieImg"
import "../pages/MovieDetails.css"



function MovieDetails () {
  const {movieId} = useParams();
  const [movie, setMovies] = useState([]);
  const [genero, setGeneros] = useState([]);
  
  useEffect( () => {
    const fetchMovie = async function() {
      const response = await get("/movie/"+movieId);
      setMovies(response);
      setGeneros(response.genres[0]);
    }
    fetchMovie();

  }, [movieId]);
  const imgUrl = getMovieImg( movie.poster_path, 500);

  return (
    <div className="detailsContainer">
      <img className= "colum movieImg" src={imgUrl} alt={movie.title}/>
      <div className="colum movieDetails">
        <p className="title">
          <strong>Titulo: </strong>
          {movie.title}
        </p>

        <p>
          <strong>Generos: </strong>
          {genero.name}
        </p>

        <p>
          <strong>Descripcion: </strong>
          {movie.overview}
        </p>

      </div>
    </div>
  )
}

export default MovieDetails






