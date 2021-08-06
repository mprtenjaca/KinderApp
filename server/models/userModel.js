import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true, trim: true},
    lastName: {type: String, required: true, trim: true},
    email: {type: String, required: true, trim: true, unique: true},
    username: {type: String, trim: true, unique: true},
    password: {type: String, required: true},
    avatar: {type: String, default: 'http://www.smartpowerdrink.com/pub/skin/default-skin/img/avatar.png'},
    contactPhone: {type: String, default: ''},
    //childerenIDs: {type: String, required: true, trim: true},
    role: {type: String, default: 'user'},
    gender: {type: String, default: 'female'},
}, {
    timestamps: true
})

const ParentSchema = mongoose.model('user', userSchema);

export default ParentSchema;