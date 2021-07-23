import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../redux/actions/authAction.js';
import { useDispatch } from 'react-redux';

const Login = () => {

    const initialState = {email: '', password: ''};
    const [userData, setUserData] = useState(initialState);
    const {email, password} = userData;

    const dispatch = useDispatch();

    const handleChangeInput = e => {
        const {name, value} = e.target;
        setUserData({...userData, [name]: value});
    }

    const handleSubmit = e => {
        dispatch(login(userData));
        e.preventDefault();
    }

    return (
        <div className="auth_page">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChangeInput} value={email} name="email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handleChangeInput} value={password} name="password"/>
                </div>
                <button type="submit" className="btn btn-primary" disabled={email && password ? false : true}>
                    Submit
                </button>
                <p className="my-2">You don't have an account? <Link to="/register">Register Now</Link></p>
            </form>
        </div>
    )
}

export default Login;
