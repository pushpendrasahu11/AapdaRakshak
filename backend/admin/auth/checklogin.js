const express=require('express')
require('dotenv').config('../../')
const jwt=require('jsonwebtoken')
const createrrors=require('http-errors')

async function validation(req,res,next){
    try {
        if(req.body.token){
        const {token}=req.body;
        const jwt_key=process.env.jwt_key_admin;
        const {userid}=jwt.verify(token,jwt_key)
        if(!userid){
            return res.status(401).json({
                message:"Login first",
                flag:false
            })
        }
        req.body.userid=userid
        next();
        }
        else{
            return res.status(401).json({
                message:"Login first",
                flag:false
            })
        }
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            message:error.message,
            flag:false
        })
    }
    
}
module.exports={validation}