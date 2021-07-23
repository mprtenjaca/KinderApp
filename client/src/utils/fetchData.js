import axios from 'axios';

export const getDataAPI = async (url, token) => {
    const res = await axios.get(`/api/${url}`, {
        headers: {Autorization: token}
    });
    return res;
}

export const postDataAPI = async (url, post, token) => {
    console.log("postDataAPI", post, url)
    const res = await axios.post(`http://localhost:3000/api/${url}`, post, {
        headers: {Autorization: token}
    });
    console.log("a")
    return res;
}

export const putDataAPI = async (url, post, token) => {
    console.log("asd")
    const res = await axios.put(`/api/${url}`, post, {
        headers: {Autorization: token}
    });
    return res;
}

export const patchDataAPI = async (url, post, token) => {
    const res = await axios.patch(`/api/${url}`, post, {
        headers: {Autorization: token}
    });
    return res;
}

export const deleteDataAPI = async (url, token) => {
    const res = await axios.delete(`/api/${url}`, {
        headers: {Autorization: token}
    });
    return res;
}