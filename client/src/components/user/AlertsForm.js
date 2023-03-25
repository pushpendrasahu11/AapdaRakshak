import React, { useState } from 'react'
import '../../styles/alertsform.css'
import SelectComp from '../utility/SelectComp'
import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';
import Img from '../../assets/sideimages/sunami.jpg'
import Button from '@mui/material/Button';
import UploadDocs from '../utility/UploadDocs';

function AlertsForm() {

    const [subject,setSubject] = useState('');
    const [type,setType] = useState('');
    const [location,setLocation] = useState('');
    const [area,setArea] = useState('');
    const [desc,setDesc] = useState('');

    const handleClick = ()=>{
        console.log(type);
        console.log(subject);
    }

    return (
        
        <div className='alerts-container'>
            <div className='alerts-left'>
            <div className='formbox'>
                <h2>Please Fill the Alert Information</h2>
                <div>
                    <h5>Subject</h5>
                    <TextField size='small' id="outlined-basic" value={subject} onChange={(e)=>setSubject(e.target.value)} label="" variant="outlined" />
                </div>
                <div>
                    <h5>Type of Disaster</h5>
                    <SelectComp value={type} onChange={(e)=>setType(e.target.value)} id="outlined-basic"></SelectComp>
                </div>
                <div>
                    <h5>Location (center point) </h5>
                    <TextField size='small' id="outlined-basic" value={location} onChange={(e)=>setLocation(e.target.value)} label="" variant="outlined" />
                </div>
                <div>
                    <h5>Area Radius (in kilometers)</h5>
                    <TextField size='small' id="outlined-basic" value={area} onChange={(e)=>setArea(e.target.value)} label="" variant="outlined" required />
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
                    <TextField size='small' id="outlined-basic" label="" variant="outlined" />
                    <UploadDocs></UploadDocs>
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