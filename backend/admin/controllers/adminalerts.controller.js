const {adminalertmodel}=require('../../models/adminalert.model')
async function adminalertcontroller(req,res){
    try {
        req.body.status='pending'
        const {title,disastertype,location,area,description,supportingdocs,userid,status}=req.body;
        await adminalertmodel.create({title,disastertype,location,area,description,supportingdocs:supportingdocs,userid,status})
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

module.exports={adminalertcontroller}