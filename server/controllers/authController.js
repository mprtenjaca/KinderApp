
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import ParentSchema from '../models/parentModel.js';


// export const register = async (req, res) => {

//     try{
//         const { firstName, lastName, email, password, gender} = req.body
        
//         let username = req.body.firstName + req.body.lastName;
//         username = username.toLowerCase();

//         const existingParent = await ParentSchema.findOne({email: email});
//         if(existingParent){
//             return res.status(400).json({msg: "This email is already exists."});
//         }

//         if(password.length < 4){
//             return res.status(400).json({msg: "Password must be at least 4 characters."});
//         }

//         const paswordHash = await bcrypt.hash(password, 12);

//         const newParent = new ParentSchema({
//             firstName, lastName, email, username, password: paswordHash, gender
//         });

//         const access_token = createAccessToken({id: newParent._id});
//         const refresh_token = createRefreshToken({id: newParent._id});

//         res.cookie('refreshtoken', refresh_token, {
//             httpOnly: true,
//             path: '/api/refresh_token',
//             maxAge: 30*7*24*60*60*1000 // 30 days
//         });

//         await newParent.save();

//         res.json({
//             msg: 'Registration Sucessful!',
//             access_token,
//             user: {
//                 ...newParent._doc,
//                 password: ''
//             }
//         });
//     }catch(err){
//         return res.status(500).json({msg: err.message});
//     }
// }

// export const login = async (req, res) => {
//     try{
//         const { email, password} = req.body;

//         const user = await ParentSchema.findOne({email});
//         if(!user){
//             return res.status(400).json({msg: "This email does not exist."});
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if(!isMatch){
//             return res.status(400).json({msg: "Password is incorrect"});
//         }

//         const access_token = createAccessToken({id: user._id});
//         const refresh_token = createRefreshToken({id: user._id});

//         res.cookie('refreshtoken', refresh_token, {
//             httpOnly: true,
//             path: '/api/refresh_token',
//             maxAge: 30*7*24*60*60*1000 // 30 days
//         });

//         res.json({
//             msg: 'Login Sucessful!',
//             access_token,
//             user: {
//                 ...user._doc,
//                 password: ''
//             }
//         });
//     }catch(err){
//         return res.status(500).json({msg: err.message});
//     }
// }

// export const logout = async (req, res) => {
//     try{
//         res.clearCookie('refreshtoken', {path: '/api/refresh_token'});
//         res.json({msg: 'Logged out!'});
//     }catch(err){
//         return res.status(500).json({msg: err.message});
//     }
// }

// export const generateAccessToken = async (req, res) => {
//     try{
//         const rf_token = req.cookies.refreshtoken;
//         if(!rf_token){
//             return res.status(400).json({msg: "Plesase login now."});
//         }

//         jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, async(err, result) => {
//             if(err){
//                 return res.status(400).json({msg: "Please login now."});
//             }
//             console.log(result);
//             const user = await ParentSchema.findById(result.id).select("-password");

//             if(!user){
//                 return res.status(400).json({msg: "This does not exist."});
//             }
//             const access_token = createAccessToken({id: user._id});
            
//             res.json({
//                 access_token,
//                 user
//             });
//         });

//     }catch(err){
//         return res.status(500).json({msg: err.message});
//     }
// }

const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'});
}

const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '30d'});

}


const authController = {
    a: async (req, res) => {
       console.log("MARKO")
    },
    register: async (req, res) => {
        try{
            const { firstName, lastName, email, password, gender} = req.body
            
            let username = req.body.firstName + req.body.lastName;
            username = username.toLowerCase();

            const existingParent = await ParentSchema.findOne({email: email});
            if(existingParent){
                return res.status(400).json({msg: "This email is already exists."});
            }

            if(password.length < 4){
                return res.status(400).json({msg: "Password must be at least 4 characters."});
            }

            const paswordHash = await bcrypt.hash(password, 12);

            const newParent = new ParentSchema({
                firstName, lastName, email, username, password: paswordHash, gender
            });

            const access_token = createAccessToken({id: newParent._id});
            const refresh_token = createRefreshToken({id: newParent._id});

            res.cookie('refreshtoken', refresh_token, {
                httpOnly: true,
                path: '/api/refresh_token',
                maxAge: 30*7*24*60*60*1000 // 30 days
            });

            await newParent.save();

            res.json({
                msg: 'Registration Sucessful!',
                access_token,
                user: {
                    ...newParent._doc,
                    password: ''
                }
            });
        }catch(err){
            return res.status(500).json({msg: err.message});
        }
    },
    login: async (req, res) => {
        try{
            const { email, password} = req.body;
    
            const user = await ParentSchema.findOne({email});
            if(!user){
                return res.status(400).json({msg: "This email does not exist."});
            }
    
            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch){
                return res.status(400).json({msg: "Password is incorrect"});
            }
    
            const access_token = createAccessToken({id: user._id});
            const refresh_token = createRefreshToken({id: user._id});
    
            res.cookie('refreshtoken', refresh_token, {
                httpOnly: true,
                path: '/api/refresh_token',
                maxAge: 30*7*24*60*60*1000 // 30 days
            });
    
            res.json({
                msg: 'Login Sucessful!',
                access_token,
                user: {
                    ...user._doc,
                    password: ''
                }
            });
        }catch(err){
            console.log("MARKo")
            return res.status(500).json({msg: err.message});
        }
    },
    logout: async (req, res) => {
        try{

        }catch(err){
            return res.status(500).json({msg: err.message});
        }
    },
    generateAccessToken: async (req, res) => {
        try{
            const rf_token = req.cookies.refreshtoken;
            if(!rf_token){
                return res.status(400).json({msg: "Plesase login now."});
            }
    
            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, async(err, result) => {
                if(err){
                    return res.status(400).json({msg: "Please login now."});
                }
                console.log(result);
                const user = await ParentSchema.findById(result.id).select("-password");
    
                if(!user){
                    return res.status(400).json({msg: "This does not exist."});
                }
                const access_token = createAccessToken({id: user._id});
                
                res.json({
                    access_token,
                    user
                });
            });
    
        }catch(err){
            return res.status(500).json({msg: err.message});
        }
    }
}

export default authController;