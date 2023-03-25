import React,{useState}from 'react'
import '../../styles/volunteerform.css'
import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';
import Img from '../../assets/sideimages/volunteerform.jpg'
import Button from '@mui/material/Button';
import UploadDocs from '../utility/UploadDocs';

function VolunteerForm() {
  
    const [name,setName] = useState('');
    const [number,setNumber] = useState('');
    const [type,setType] = useState('');
    const [location,setLocation] = useState('');
    const [desc,setDesc] = useState('');

    const handleClick = ()=>{
        
    }

    return (
        
        <div className='volun-container'>
            <div className='volun-left'>
            <div className='formbox'>
                <h2>Please Fill Vounteer Form</h2>
                <div>
                    <h5>Name</h5>
                    <TextField size='small' id="outlined-basic" value={name} onChange={(e)=>setName(e.target.value)} label="" variant="outlined" />
                </div>
                
                <div>
                    <h5>Contact Number</h5>
                    <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} className='inputbox' />
                </div>
                <div>
                    <h5>Types of Volunteering</h5>
                    <TextField size='small' id="outlined-basic" value={type} onChange={(e)=>setType(e.target.value)} label="" variant="outlined" required />
                </div>
                <div>
                    <h5>Location (Area) for Volunteering</h5>
                    <TextField size='small' id="outlined-basic" value={location} onChange={(e)=>setLocation(e.target.value)} label="" variant="outlined" required />
                </div>
                <div>
                    <h5>Describe why you want to be a volunteer and what will you do as a volunteer</h5>
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
            <div className='volun-right'>
                <img src={Img} alt="" />
            </div>
        </div>
    )
}

export default VolunteerForm