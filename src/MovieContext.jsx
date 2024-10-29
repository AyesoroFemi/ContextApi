/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


export const MovieContext = createContext()

const moviesList = [
    {
      id: 1,
      title: "The Batman",
      price: "$20",
      author: "Robert Pattison",
    },
    {
      id: 2,
      title: "Flying Cars",
      price: "$100",
      author: "Robert Jackson",
    },
    {
      id: 3,
      title: "Spiderman",
      price: "$29",
      author: "Stephen Steve",
    },
    {
      id: 4,
      title: "Virgin Airline",
      price: "$120",
      author: "Richard Brandson",
    },
  ];


 const MovieProvider = ({children}) => {
      const [movies, setMovies] = useState(moviesList);
      return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {children}
        </MovieContext.Provider>
      )

  }

  export default MovieProvider