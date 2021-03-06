import mongoose from 'mongoose';

const parentSchema = new mongoose.Schema({
    firstName: {type: String, required: true, trim: true},
    lastName: {type: String, required: true, trim: true},
    email: {type: String, required: true, trim: true, unique: true},
    username: {type: String, trim: true, unique: true},
    password: {type: String, required: true},
    avatar: {type: String, default: 'http://www.smartpowerdrink.com/pub/skin/default-skin/img/avatar.png'},
    contactPhone: {type: String, default: ''},
    childeren: {type: mongoose.Types.ObjectId, ref: 'child'},
    role: {type: String, default: 'user'},
    gender: {type: String, default: 'female'},
}, {
    timestamps: true
})

const ParentSchema = mongoose.model('parent', parentSchema);

export default ParentSchema;