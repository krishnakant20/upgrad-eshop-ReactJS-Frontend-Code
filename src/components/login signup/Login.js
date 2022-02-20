import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <>
            <div className='container loginPage my-3'>
                <h2>Login</h2>
                <Link to="/login/admin" className="btn btn-success my-3">Admin Login</Link>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <Link to="/products" className="btn btn-success">
                        <button type="submit" className="btn btn-success">Login</button>
                    </Link>
                </form>
            </div>
        </>
    )
}

export default Login