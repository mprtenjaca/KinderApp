import React, { Profiler, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getProfileUsers } from '../../redux/actions/profileAction'
import EditProfile from './EditProfile'

const Info = () => {
    const {id} = useParams()
    const {auth, profile} = useSelector(state => state)
    const dispatch = useDispatch()

    const [userData, setUserData] = useState([])
    const [oneEdit, setOnEdit] = useState(false)

    useEffect(() => {
        if(id == auth.user._id){
            setUserData([auth.user])
        }else{
            dispatch(getProfileUsers({users: profile.users, id, auth}))
        }
    }, [id, auth.user, dispatch, profile.users])

    return (
        <div className="info">
            {
                userData.map(user => (
                    <div className="container">
                    <div className="row" key={user._id}>
                        <div className=" col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <div className="info_container">
                            <div className="info_header">
                                <div className="info_header_avatar">
                                    <img className="avatar_img" src={user.avatar} />

                                    <div className="user_info first"><span className="material-icons">phone</span>{user.contactPhone}</div>
                                    <div className="user_info"><span className="material-icons">email</span><Link className="nav-link" to="/">{user.email}</Link></div>
                                    <div className="user_info first"><span className="material-icons">escalator_warning</span>2</div>
                                    <div className="user_info chat"><button><div><span className="material-icons">chat</span>CONTACT</div></button></div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className=" col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <div className="info_header_title">
                                <h2>{user.firstName} {user.lastName} 
                                    {
                                        user._id === auth.user._id
                                        ? <span className="material-icons" onClick={() => setOnEdit(true)}>edit</span>
                                        : ''
                                    }
                                </h2>
                                <p>Vrtić Pčelica</p>
                            </div>
                        </div>

                        {
                            oneEdit && <EditProfile setOnEdit={setOnEdit}/>
                        }
                    </div>
                    </div>

                    // <div className="info_container" key={user._id}>
                    //     <div className="info_header">
                    //         <div className="info_header_avatar">
                    //             <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" />
                    //             <hr/>
                    //             <div className="user_info first"><span className="material-icons">phone</span>+385953997687</div>
                    //             <div className="user_info"><span className="material-icons">email</span><Link className="nav-link" to="/">{user.email}</Link></div>
                    //             <div className="user_info first"><span className="material-icons">escalator_warning</span>2</div>
                    //             <div className="user_info chat"><button><div><span class="material-icons">chat</span>CONTACT</div></button></div>
                    //         </div>
                    //         <div className="info_header_title">
                    //             <h2>{user.firstName} {user.lastName}</h2>
                    //             <p>Vrtić Pčelica</p>
                    //         </div>
                    //     </div>
                    // </div>
                ))
            }
        </div>
    )
}

export default Info
