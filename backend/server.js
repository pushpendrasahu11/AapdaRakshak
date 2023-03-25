require('dotenv').config('./')
const express=require('express');
const cookieParser=require("cookie-parser");
const cors=require('cors')

const { createadmin } = require('./admin/routes/createadmin.route');
const { loginroute } = require('./admin/routes/login.route');
const user  = require('./user/routes/user.js');
const errorMiddleware=require("./user/middleware/error.js");
require('dotenv').config('./')
const {mains}=require('./admin/routes/main')
const db=require('./db/db');
const { payoutroute } = require('./admin/routes/payout.route');
const { googleuserroute } = require('./user/routes/googleuser.route');
const { checkuserroute } = require('./user/routes/checkuser.route');
const { adminalertroute } = require('./admin/routes/adminalert.route');
const { fundroute } = require('./admin/routes/fund.route');
const { donateroute } = require('./user/routes/donate.route');
const { volunteerroute } = require('./user/routes/volunteer.route');
const app=express();

app.use(cors({
    origin:'*',
    methods:['GET','POST','DELETE','UPDATE','PUT','PATCH']
}))


app.use(express.json());
app.use(cookieParser());
app.use('/admin',loginroute)
app.use('/admin',createadmin)
app.use('/admin',payoutroute)
app.use('/user',user)
app.use('/user',googleuserroute)
app.use('/user',checkuserroute)
app.use('/user',adminalertroute)
app.use('/user',fundroute)
app.use('/user',volunteerroute)
app.use('/user',donateroute)
//Middleware for Error 
app.use(errorMiddleware);


let PORT=process.env.PORT||5000
app.listen(PORT,(e)=>{
    console.log('App listening at '+PORT)
})     