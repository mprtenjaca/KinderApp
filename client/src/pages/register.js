import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import avatar from '../images/avatar.svg';
import signIn from '../images/signIn.svg';

import { register } from '../redux/actions/authAction.js'

const Register = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { auth, alert } = useSelector(state => state)

    const initialState = {firstName: '', lastName: '', email: '', password: '', cf_password: '', gender: 'male'};
    const [userData, setUserData] = useState(initialState);
    const {firstName, lastName, email, password, cf_password, gender} = userData;


    const handleChangeInput = e => {
        const {name, value} = e.target;
        setUserData({...userData, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(register(userData))
        console.log(alert)
    }

    useEffect(() => {
        if(auth.token){
            history.push("/")
        }
    }, [auth.token, history])


    return (
        <div className="container">
		<div className="img">
			<img src={signIn}/>
		</div>
		<div className="login-content">
			<form onSubmit={handleSubmit}>
				<img src={avatar}/>
				<h2 className="title">Register</h2>
                <div className="input-div firstName">
           		    <div className="i">
           		   		<i className="fas fa-user"></i>
           		    </div>
           		    <div className="div">
           		   		<input type="text" 
                                placeholder="First Name" 
                                className="input" 
                                onChange={handleChangeInput} 
                                value={firstName} 
                                name="firstName" 
                                />
           		    </div>
                    <small className="form-text text-danger">{alert.firstName ? alert.firstName : ''}</small>
           		</div>
                
                <div className="input-div lastName">
           		    <div className="i">
           		   		<i className="fas fa-user"></i>
           		    </div>
           		    <div className="div">
           		   		<input type="text" placeholder="Last Name" className="input" onChange={handleChangeInput} value={lastName} name="lastName" />
           		    </div>
                    <small className="form-text text-danger">{alert.lastName ? alert.lastName : ''}</small>
           		</div>
           		<div className="input-div email">
           		    <div className="i">
           		   		<i className="fas fa-user"></i>
           		    </div>
           		    <div className="div">
           		   		<input type="text" placeholder="Email" className="input" onChange={handleChangeInput} value={email} name="email" />
           		    </div>
                    <small className="form-text text-danger">{alert.email ? alert.email : ''}</small>
           		</div>
           		<div className="input-div pass">
           		    <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		    </div>
           		    <div className="div">
           		    	<input type="password" placeholder="Password" className="input" onChange={handleChangeInput} value={password} name="password"/>
            	    </div>
                    <small className="form-text text-danger">{alert.password ? alert.password : ''}</small>
            	</div>
                <div className="input-div pass2">
                    <div className="i"> 
                            <i className="fas fa-lock"></i>
                    </div>
                    <div className="div">
                            <input type="password" placeholder="Confirm Password" className="input" onChange={handleChangeInput} value={cf_password} name="cf_password"/>
                    </div>
                    <small className="form-text text-danger">{alert.cf_password ? alert.cf_password : ''}</small>
            	</div>
                <div className="input-div genders">
                    <label htmlFor="male">
                        MALE: <input type="radio" id="male" name="gender" value="male" defaultChecked onChange={handleChangeInput} />
                    </label>
                    <label htmlFor="female">
                        FEMALE: <input type="radio" id="female" name="gender" value="female" onChange={handleChangeInput} />
                    </label>
                </div>
                <div><Link to="/register">Login Now</Link></div>
            	<a href="#">Forgot Password?</a>
            	<input type="submit" className="btn" value="Login" disabled={email && password ? false : true}/>
            </form>
        </div>
    </div>
    )
}

export default Register;