import "../components/MovieCard.css"

function MovieCard({objMovie}) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + objMovie.poster_path;

  return (
    <li className="movieCard">
      <img
        width={230}
        height={345}
        src={imageUrl}
        alt={objMovie.title}
        className="movieImage"
        />
        <h3>{objMovie.title}</h3>

    </li>
  )
}

export default MovieCard


