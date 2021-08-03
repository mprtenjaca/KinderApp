import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Register = () => {
    const {auth} = useSelector(state => state)
    const history = useHistory()

    useEffect(() => {
        if(auth.token){
            history.push("/")
        }
    }, [auth.token, history])

    return (
        <div>
            Register
        </div>
    )
}

export default Register;
