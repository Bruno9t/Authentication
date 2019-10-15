const express = require('express')
const mongoose = require('mongoose') 
const routes = require('./routes')
const cors = require('cors')
const authMiddleware = require('./middlewares/auth')


const app = express()
//database connect
mongoose.connect(Uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
},() => console.log('Database is connect'))
//midlewares

app.use(express.json())
app.use(cors())
app.use('/projects',authMiddleware)


//routes
app.use(routes)

//run server
app.listen(3333,()=>{
    console.log('server is running')
})