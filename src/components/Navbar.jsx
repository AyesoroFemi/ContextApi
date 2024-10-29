/* eslint-disable react/prop-types */

import { useContext } from "react"
import { MovieContext } from "../MovieContext"

function Navbar() {
    const [movies] = useContext(MovieContext)
    console.log(movies)

  return (
    <div className="navbar">
        <h1>Logo</h1>
        <p>Total Movies: <b>{movies.length}</b></p>
    </div>
  )
}

export default Navbar