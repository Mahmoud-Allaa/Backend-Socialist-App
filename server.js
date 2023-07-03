const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require("cookie-parser")
const multer = require('multer')
const path = require('path')
const UserModel = require('./models/userModel')
const { error, log } = require("console")
const userRouter = require('./routers/userRouter');
const postRouter = require('./routers/postRouter');


const app = express()
app.use(express.json())
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(cookieParser())

mongoose.connect('mongodb://127.0.0.1:27017/blog')

// Start ==> Routes 
app.get('/', (req, res) => {
    res.send('Hello Mahmoud')
})

app.use('/api/user', userRouter)
app.use('/api/posts', postRouter)



app.listen(4000, () => {
    console.log('Server is Running on port: 4000');
})