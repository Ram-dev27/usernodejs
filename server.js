const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/userDB");
const connection = mongoose.connection;
connection.on('open',()=>console.log("mongoDB connection established successfully"))

const userRouter = require('./routes/userRoute')
app.use('/user',userRouter)

app.listen(9000,()=>console.log("Server is run on the port 9000"))