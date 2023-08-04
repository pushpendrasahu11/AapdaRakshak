import React, { useState } from 'react'
import '../../styles/alertsform.css'
import SelectComp from '../utility/SelectComp'
import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';
import Img from '../../assets/sideimages/sunami.jpg'
import Button from '@mui/material/Button';
import UploadDocs from '../utility/UploadDocs';
import axios from 'axios'
import swal from 'sweetalert'
import {  Cookies } from 'react-cookie'
var URL='http://localhost:5000/admin/createadminalert'
function AlertsForm() {
    const cookie=new Cookies();
    const [image,setImage] = useState([]);
    const [title,setTitle] = useState('');
    const [type,setType] = useState('');
    const [location,setLocation] = useState('');
    const [area,setArea] = useState('');
    const [desc,setDesc] = useState('');

    const handleClick = async ()=>{
        try {
            let token=cookie.get('userid')
            console.log(image,title,type,location,area,desc)
            if(!image.length||!title||!type||!location||!area||!desc){
                return swal({
                    title:'All fields are required',
                    icon:'info'
                })
            }
            await axios.post(URL,{
                title,disastertype:type,location,area,description:desc,supportingdocs:image,token
            })
            return swal({
                title:'Successfully submitted',
                icon:'success'
            })
        } catch (error) {
            swal({
                title:error.response.data.message,
                icon:'error'
            })
        }
    }

    return (
        
        <div className='alerts-container'>
            <div className='alerts-left'>
            <div className='formbox'>
                <h2>Please Fill the Alert Information</h2>
                <div>
                    <h5>Title</h5>
                    <TextField size='small' id="outlined-basic"  value={title} onChange={(e)=>setTitle(e.target.value)} label="" variant="outlined" />
                </div>
                <div>
                    <h5>Type of Disaster</h5>
                    <SelectComp type={type} setType={setType}  id="outlined-basic"></SelectComp>
                </div>
                <div>
                    <h5>Location (center point) </h5>
                    <TextField size='small' id="outlined-basic"  value={location} onChange={(e)=>setLocation(e.target.value)} label="" variant="outlined" />
                </div>
                <div>
                    <h5>Area Radius (in kilometers)</h5>
                    <TextField size='small' id="outlined-basic"  value={area} onChange={(e)=>setArea(e.target.value)} label="" variant="outlined" required />
                </div>
                <div>
                    <h5>Description</h5>
                    <Textarea 
                    value={desc}
                    onChange={(e)=>setDesc(e.target.value)}
                    sx={{ width: 348 }}
                    id='outlined-basic'
                        placeholder=""
                    
                        minRows={2}
                        maxRows={5}
                    />
                </div>
                <div>
                    <h5>Add Supporting Documents</h5>
                    <TextField   size='small' id="outlined-basic" label="" variant="outlined" />
                    <UploadDocs setImage={setImage} image={image}></UploadDocs>
                </div>
                <div>
                <h5></h5>
                <Button onClick={handleClick} variant="contained" sx={{width:348,backgroundColor:'var(--col1)'}}>Submit</Button>
                </div>
                </div>
            </div>
            <div className='alerts-right'>
                <img src={Img} alt="" />
            </div>
        </div>
    )
}

export default AlertsForm