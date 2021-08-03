import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../redux/actions/authAction.js';
import { useDispatch } from 'react-redux';

import img from '../images/authImg.svg';
import avatar from '../images/avatar.svg';

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
        // <div classNameName="container">
        //     <div classNameName="auth_page">
        //         <div classNameName="auth_img">
        //             <img classNameName="img" src={img} />
        //         </div>
        //         <form onSubmit={handleSubmit}>
        //             <h2>WELCOME</h2>
        //             <div classNameName="form-group">
        //                 <label htmlFor="exampleInputEmail1">Email address</label>
        //                 <input type="email" classNameName="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChangeInput} value={email} name="email"/>
        //                 <small id="emailHelp" classNameName="form-text text-muted">We'll never share your email with anyone else.</small>
        //             </div>
        //             <div classNameName="form-group">
        //                 <label htmlFor="exampleInputPassword1">Password</label>
        //                 <input type="password" classNameName="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handleChangeInput} value={password} name="password"/>
        //             </div>
        //             <button type="submit" classNameName="btn btn-primary" disabled={email && password ? false : true}>
        //                 Submit
        //             </button>
        //             <p classNameName="my-2">You don't have an account? <Link to="/register">Register Now</Link></p>
        //         </form>
        //     </div>
        // </div>
        <div className="container">
		<div className="img">
			<img src={img}/>
		</div>
		<div className="login-content">
			<form onSubmit={handleSubmit}>
				<img src={avatar}/>
				<h2 className="title">Welcome</h2>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		<input type="text" placeholder="Email" className="input" onChange={handleChangeInput} value={email} name="email" />
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	<input type="password" placeholder="Password" className="input" onChange={handleChangeInput} value={password} name="password"/>
            	   </div>
            	</div>
                <div><Link to="/register">Register Now</Link></div>
            	<a href="#">Forgot Password?</a>
            	<input type="submit" className="btn" value="Login" disabled={email && password ? false : true}/>
            </form>
        </div>
    </div>
    )
}

export default Login;
