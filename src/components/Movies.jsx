/* eslint-disable react/prop-types */
import { useContext } from "react"
import Movie from "./Movie"
import { MovieContext } from "../MovieContext"

function Movies() {
    const [movies] = useContext(MovieContext)
  return (
    <div>
        {movies.map((movie) => <Movie key={movie.id} movie={movie} /> )}
    </div>
  )
}

export default Movies