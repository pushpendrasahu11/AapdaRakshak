const { string } = require('joi');
const mongoose=require('mongoose');
const {Schema,model} =mongoose;
const adminalertschema=new Schema({
    title:{
        type:String,
        required:true 
    },
    disastertype:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    supportingdocs:{
        type:[{
            name:{
                type:String
            },
            Url:{
                type:String
            }
        }],
        required:true
    },
    status:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    cordinate:{
        x:{
            type:Number
        },
        y:{
            type:Number
        }
    }

})

const adminalertmodel=model('adminalertmodel',adminalertschema)

module.exports={adminalertmodel}