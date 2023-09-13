import express from 'express'
import mongoose from 'mongoose'
import authRoute from './routes/authRoute.js';

const uri = 'mongodb+srv://66CoderHasan:c4m1dr0GiwPHLFrB@dummy0.q82kncb.mongodb.net/Dummy0?retryWrites=true&w=majority'

const port = 8800;


const app = express()
app.use(express.json());
app.use('/api', authRoute);


const connectDb = () => {
    console.log('MongoDb Connected')
    return mongoose.connect(uri,{
        useNewUrlParser : true
    }
)
}
app.listen(port , () =>{
    connectDb()
    console.log(`server is live on port number ${port}`)
} );