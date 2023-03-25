const {fundmodel}=require('../../models/fund.model')

async function getdonatecontroller(req,res){
    try {
        const result=await fundmodel.find();
        let len=result.length;
        let response=[]
        for(let i=0;i<len;i++){
            if(result[i].status==='success'){
                const {desc,vicName,supportingdocs,_id}=result[i];
                response.push({desc,vicName,supportingdocs,_id})
            }
        }
        console.log(result)
        return res.status(200).json({
            data:response,
            message:'suuccessfully returned',
            flag:true
        })
    } catch (error) {
        return res.status(500).json({
            message:'Internal server error',
            flag:true
        })
    }
}


module.exports={getdonatecontroller}