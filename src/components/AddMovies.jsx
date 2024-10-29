/* eslint-disable react/prop-types */
import { useContext, useState } from "react"
import { MovieContext } from "../MovieContext"

function AddMovies() {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [author, setAuthor] = useState("")

    const [movies, setMovies] = useContext(MovieContext)

    const addMovieHandler = (e) => {
        e.preventDefault()
        const id = crypto.randomUUID()
        const newMovie = {
            id, 
            title,
            price,
            author
        }
        // addMovies((prevMovies) => [...prevMovies, newMovie])
        // addMovies([...movies, newMovie])
        setMovies([...movies, newMovie])
        setTitle("")
        setPrice("")
        setAuthor("")
    }

  return (
    <div>
        <div>
            <label htmlFor="title">Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
        </div>
        <div>
            <label htmlFor="price">Price</label>
            <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" />
        </div>
        <div>
            <label htmlFor="author">Author</label>
            <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text" />
        </div>
        <button onClick={addMovieHandler} type="submit">Add Movie</button>
    </div>
  )
}

export default AddMovies