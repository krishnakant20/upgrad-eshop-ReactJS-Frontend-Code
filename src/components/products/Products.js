import React from 'react'
import { Link } from 'react-router-dom'


const Products = () => {
    return (
        <>
        <h1>Products page</h1>
            <div className="card" style={{ "width": "18rem" }}>
                <img src={require("../../assests/images/1.jpg")} className="card-img-top" alt="123" />
                <div className="card-body">
                    <h5 className="card-title">Product title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/products/details" className="btn btn-primary">BUY</Link>
                </div>
            </div>
        </>
    )
}

export default Products