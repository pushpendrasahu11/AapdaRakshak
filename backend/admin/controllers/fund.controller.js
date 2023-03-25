const {fundmodel}=require('../../models/fund.model')
async function fundcontroller(req,res){
    try {
        req.body.status='pending'
        console.log(req.body)
        const {accNumber,accHolder,ifsc,amount,vicName,supportingdocs,userid,status,desc}=req.body;
        await fundmodel.create({accNumber,accHolder,ifsc,amount,vicName,supportingdocs,userid,status,desc})
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

// const getdetails = async (e) => {
//     try {
//       const result= await axios.get('http://localhost:5000/user/getdonate')
//       details=result.data.data
//       console.log(details)
//       return 
//     } catch (error) {
//       return swal({
//         title:'Something went wrong',
//         icon:'error'
//       })
//     }
//   };

module.exports={fundcontroller}