import exrpess from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import authRouter from './routes/authRouter.js';

dotenv.config();
const app = exrpess();

app.use(exrpess.json({extended: true}));
app.use(exrpess.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());

// Default route for application
//app.use('/posts', postRoutes);
app.use('/api', authRouter);

//app.use(bodyParser.json({limit: "30mb", extended: true}));
const CONNECTION_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 5000;

// {} Params makes sure to avoid warnings or errors in console
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false})
        .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
        .catch((error) => console.log(error.message));

// Makes sure to avoid warnings in console
//mongoose.set('useFindAndModify', false);