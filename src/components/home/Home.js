import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
    <h1 id='homeHeading'>Welcome to Eshop Home</h1>
    <Link to="/products" className="btn btn-success">Click to See New Products</Link>

    </>
  )
}

export default Home