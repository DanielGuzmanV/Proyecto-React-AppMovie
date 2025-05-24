import "../components/MovieCard.css"
import { Link } from "react-router-dom";

function MovieCard({objMovie}) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + objMovie.poster_path;

  return (
    <li className="movieCard">

      <Link to={"movies/"+objMovie.id}>
        <img
          width={230}
          height={345}
          src={imageUrl}
          alt={objMovie.title}
          className="movieImage"
          />
      
      </Link>
          <div>{objMovie.title}</div>

    </li>
  )
}

export default MovieCard


