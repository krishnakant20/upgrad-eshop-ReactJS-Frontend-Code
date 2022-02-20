import React from 'react'
import { Link } from 'react-router-dom'


const Details = () => {
  return (
    <>
    <h1>Details page</h1>
      <div className="card" style={{"width": "18rem"}}>
        <img src={require("../../assests/images/2.jpg")} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/orders" className="btn btn-primary">Place Order</Link>
          </div>
      </div>
    </>
  )
}

export default Details