/* eslint-disable react/prop-types */

function Movie({movie}) {
  return (
    <div>
        <h1>{movie.title}</h1>
        <h6>{movie.author}</h6>
        <p>{movie.price}</p>
    </div>
  )
}

export default Movie