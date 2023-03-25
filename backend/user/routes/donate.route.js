const express=require('express')
const donateroute=express.Router()
const {getdonatecontroller}=require('../controllers/donate.controller')
const {validation}=require('../helper/checklogin')
donateroute
.route('/getdonate')
.get(getdonatecontroller)


module.exports={donateroute}