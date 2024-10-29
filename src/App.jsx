// import { useState } from "react";
import "./App.css";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import AddMovies from "./components/AddMovies";
import MovieProvider from "./MovieContext";


function App() {
  // const [movies, setMovies] = useState(moviesList);
  return (
    <MovieProvider>
      {/* <Navbar movies={movies} />
      <div className="main">
        <Movies movies={movies} />
        <AddMovies  movies={movies} addMovies={setMovies}/>
      </div> */}
      <Navbar />
      <div className="main">
        <Movies  />
        <AddMovies />
      </div>
    </MovieProvider>
  );
}

export default App;
