const {adminalertmodel}=require('../../models/adminalert.model')
const {emailmodel}=require('../../models/email.model')
const {phonenomodel}=require('../../models/phoneno.model')
const {sendemail}=require('../../user/helper/mailsender')
const {sendsms}=require('../helper/sendsms')
async function adminalertcontroller(req,res){
    try {
        req.body.status='pending'
        const {title,disastertype,location,area,description,supportingdocs,userid,status}=req.body;
        let cordinate={
            x:0,
            y:0
        };

        const options = {
        method: 'GET',
        url: 'https://geocoding-by-api-ninjas.p.rapidapi.com/v1/geocoding',
        params: {city: location},
        headers: {
            'X-RapidAPI-Key': 'ce90579398msh557b7208b6385dcp1d9c10jsn369f8d27807e',
            'X-RapidAPI-Host': 'geocoding-by-api-ninjas.p.rapidapi.com'
        }
        };
        await axios.request(options).then(function (response) {
            let cordinate1={
                x:response.data[0].latitude,
                y:response.data[0].longitude
            }
            cordinate=cordinate1;
        }).catch(function (error) {
            return res.status(404).json({
                message:'Cant getting the co-ordinate of given location',
                flag:false
            })
        });
        await adminalertmodel.create({title,disastertype,location,area,description,supportingdocs:supportingdocs,userid,status,cordinate})

        return res.status(200).json({
            message:'Successfully created',
            flag:true
        })

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            message:'internal server error',
            flag:false
        })
    }
}
async function getalerts(req,res){
    try {
        const result=await adminalertmodel.find({status:'pending'})
        console.log(result);
        return res.status(200).json({
            data:result,
            flag:true
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message,
            flag:false
        })
    }
}
async function postalertrescont(req,res){
    try {
        const {id,response}=req.body;
        console.log(req.body)
        const result=await adminalertmodel.findOneAndUpdate({_id:id},{status:response})
        if(response==='success'){
            const res=await emailmodel.find()
            const result2=await phonenomodel.find()
            for(let i=0;i<res.length;i++){
                sendemail({otp:false,email:res[i].email,subject:'Alert from AapdaRakshak',alertcontent:result.description})
            }
            var array=[]
            for(let i=0;i<result2.length;i++){
                array.push(result2[i].mobileno)
            }
            sendsms(array,result)
        }
        console.log(result);
        return res.status(200).json({
            message:'Updated Successfully',
            flag:true
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message,
            flag:false
        })
    }
}
module.exports={adminalertcontroller,getalerts,postalertrescont}