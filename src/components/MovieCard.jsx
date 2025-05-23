function MovieCard({objMovie}) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + objMovie.poster_path;

  return (
    <li>
      <h3>{objMovie.title}</h3>
      <img
        width={230}
        height={345}
        src={imageUrl}
        alt={objMovie.title}
      />

    </li>
  )
}

export default MovieCard


