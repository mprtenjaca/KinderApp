import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import logo from '../images/kinderLogo.png'
import { logout } from '../redux/actions/authAction'

const Menu = () => {
    const navLinks = [
        {label: 'Home', icon: 'home', path: '/'},
        {label: 'Profile', icon: 'face', path: '/profile'},
        {label: 'Logout', icon: 'logout', path: '/'}
    ]

    const {auth} = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between align-middle">
            <Link className="navbar-brand" to="/"><img className="logo" src={logo}/></Link>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="menu" id="navbarNav">
                <ul className="navbar-nav flex-row">
                    {/* {
                        navLinks.map((link, index) => (
                            <li className="nav-item active">
                                <Link className="nav-link" to={link.path}>
                                    <span className="material-icons">{link.icon}</span>
                                </Link>
                            </li>
                        ))
                    } */}
                    <li className="nav-item active">
                        <Link className="nav-link" to="/"><span className="material-icons">home</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to={`/profile/${auth.user._id}`}><span className="material-icons">face</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/" onClick={() => dispatch(logout())}><span className="material-icons">logout</span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu
