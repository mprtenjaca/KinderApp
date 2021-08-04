import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../redux/actions/authAction.js';
import { useDispatch, useSelector } from 'react-redux';

import img from '../images/authImg.svg';
import avatar from '../images/avatar.svg';

const Login = () => {

    const initialState = {email: '', password: ''};
    const [userData, setUserData] = useState(initialState);
    const {email, password} = userData;

	const { auth } = useSelector(state => state);
    const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
        if(auth.token){
            history.push("/")
        }
    }, [auth.token, history])

    const handleChangeInput = e => {
        const {name, value} = e.target;
        setUserData({...userData, [name]: value});
    }

    const handleSubmit = e => {
        dispatch(login(userData));
        e.preventDefault();
    }

    return (
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
