import mongoose from 'mongoose';

const childSchema = new mongoose.Schema({
    firstName: {type: String, required: true, trim: true},
    lastName: {type: String, required: true, trim: true},
    username: {type: String, trim: true, unique: true},
    avatar: {type: String, default: 'https://www.unicef.org/sites/default/files/styles/hero_desktop/public/UN0243366.jpg?itok=pPArYLci'},
    parents: {type: mongoose.Types.ObjectId, ref: 'parent'},
    role: {type: String, default: 'child'},
    gender: {type: String, default: 'female'},
}, {
    timestamps: true
})

const ParentSchema = mongoose.model('child', userSchema);

export default ParentSchema;