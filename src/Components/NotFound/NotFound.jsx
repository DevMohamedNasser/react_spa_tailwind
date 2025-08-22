import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="bg-dark text-white vh-100 d-flex justify-content-center align-items-center flex-column">
      <h1>404 Not found page</h1>
        <Link to={""} >Go to Home</Link>
    </div>
  )
}
