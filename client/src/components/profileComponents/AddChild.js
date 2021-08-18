import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';
import { addUserChild } from '../../redux/actions/childAction';
import { checkImage } from '../../utils/imageUpload';

import tempAvatar from '../../images/avatar.svg';

const AddChild = ({setOnAddChild}) => {

    const initialState = {
        firstName: '', lastName: '', age: '', gender: ''
    }

    const [childData, setChildData] = useState(initialState);
    const {firstName, lastName, age, gender} = childData;

    const [avatar, setAvatar] = useState('')

    const {auth} = useSelector(state => state);
    const dispatch = useDispatch()

    console.log(auth)

    const changeAvatar = (e) => {
        const file = e.target.files[0]
        const err = checkImage(file)
        if(err){
            return dispatch({type: GLOBALTYPES.ALERT, payload: {error: err}});
        }
        setAvatar(file)
    }

    const handleInput = e => {
        const {name, value} = e.target
        setChildData({...childData, [name]:value})
    }

    const handleSumbit = e => {
        e.preventDefault()
        dispatch(addUserChild({childData, avatar, auth}))
    }

    return (
        <div className="edit_profile">
            <button className="btn btn-danger btn_close" onClick={() => setOnAddChild(false)}>
                Close
            </button>
            
            <form onSubmit={handleSumbit}>
                <div className="info_avatar">
                    <img className="avatar_img" src={avatar ? URL.createObjectURL(avatar) : tempAvatar} alt="avatar"></img>
                    <input type="file" id="file_up" accept="image/*" onChange={changeAvatar} /><span className="material-icons">camera_alt</span>
                </div>

                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <div className="position-relative">
                        <input type="text" className="form-control" id="firstName"
                        name="firstName" value={firstName} onChange={handleInput} />
                        <small className="text-danger position-absolute"
                        style={{top: '50%', right: '5px', transform: 'translateY(-50%)'}}>
                            {firstName.length}/25
                        </small>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <div className="position-relative">
                        <input type="text" className="form-control" id="lastName"
                        name="lastName" value={lastName} onChange={handleInput} />
                        <small className="text-danger position-absolute"
                        style={{top: '50%', right: '5px', transform: 'translateY(-50%)'}}>
                            {lastName.length}/25
                        </small>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="text" name="age" value={age}
                    className="form-control" onChange={handleInput} />
                </div>

                <label htmlFor="gender">Gender</label>
                <div className="input-group-prepend px-0 mb-4">
                    <select name="gender" id="gender" value={gender}
                    className="custom-select text-capitalize"
                    onChange={handleInput}>
                        <option defaultValue value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <button className="btn btn-info w-100" type="submit">Save</button>
            </form>

        </div>
    )
}

export default AddChild
