import { GLOBALTYPES } from './globalTypes'
import { postDataAPI } from '../../utils/fetchData'
import { imageUpload } from '../../utils/imageUpload'
import tempAvatar from '../../images/avatar.svg';


export const CHILD_TYPES = {
    CREATE_CHILD: 'CREATE_CHILD',
    UPDATE_CHILD: 'UPDATE_CHILD'
}

// export const updateUserChild = ({childData, avatar, auth}) => async (dispatch) => {
//     if(!childData.firstName)
//     return dispatch({type: GLOBALTYPES.ALERT, payload: {error: "Please add your first name."}})

//     if(childData.firstName.length > 25)
//     return dispatch({type: GLOBALTYPES.ALERT, payload: {error: "Your first name is too long."}})

//     if(!childData.lastName)
//     return dispatch({type: GLOBALTYPES.ALERT, payload: {error: "Please add your last name."}})

//     if(childData.lastName.length > 25)
//     return dispatch({type: GLOBALTYPES.ALERT, payload: {error: "Your last name is too long."}})

//     console.log({childData, avatar, auth})

//     try {
//         let media;
//         dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})

//         if(avatar) media = await imageUpload([avatar])

//         const res = await patchDataAPI("user", {
//             ...childData,
//             avatar: avatar ? media[0].url : auth.user.avatar
//         }, auth.token)

//         dispatch({
//             type: GLOBALTYPES.AUTH,
//             payload: {
//                 ...auth,
//                 child: {
//                     ...auth.user, ...childData,
//                     avatar: avatar ? media[0].url : auth.user.avatar,
//                 }
//             }
//         })

//         dispatch({type: GLOBALTYPES.ALERT, payload: {success: res.data.msg}})
//     } catch (err) {
//         dispatch({
//             type: GLOBALTYPES.ALERT, 
//             payload: {error: err.response.data.msg}
//         })
//     }
// }

export const addUserChild = ({childData, avatar, auth}) => async (dispatch) => {
    if(!childData.firstName)
    return dispatch({type: GLOBALTYPES.ALERT, payload: {error: "Please add first name."}})

    if(childData.firstName.length > 25)
    return dispatch({type: GLOBALTYPES.ALERT, payload: {error: "Child first name is too long."}})

    if(!childData.lastName)
    return dispatch({type: GLOBALTYPES.ALERT, payload: {error: "Please add last name."}})

    if(childData.lastName.length > 25)
    return dispatch({type: GLOBALTYPES.ALERT, payload: {error: "Child last name is too long."}})

    console.log({childData, avatar, auth})

    try {
        let media;
        dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})

        if(avatar) media = await imageUpload([avatar])

        const res = await postDataAPI("child", {
            ...childData,
            avatar: avatar ? media[0].url : tempAvatar
        }, auth.token)

        dispatch({type: CHILD_TYPES.CREATE_CHILD, payload: res.data.newChild})

        dispatch({type: GLOBALTYPES.ALERT, payload: {success: res.data.msg}})
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT, 
            payload: {error: err.response.data.msg}
        })
    }
}