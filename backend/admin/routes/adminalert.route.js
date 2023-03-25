const express=require('express')
const { adminalertcontroller } = require('../controllers/adminalerts.controller')
const {validation}=require('../../user/helper/checklogin')
const adminalertroute=express.Router()

adminalertroute
.route('/createadminalert')
.post(validation,adminalertcontroller)

module.exports={adminalertroute}