const {adminalertmodel}=require('../../models/adminalert.model')
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

module.exports={adminalertcontroller}