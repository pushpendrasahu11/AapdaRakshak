import React, { useEffect, useState } from 'react'
import Popup from './Popup';
function AlertBox() {

  const [show,setShow] = useState(false);
  const [data,setData] = useState([
    {
      a:'Title',
      b:'type',
      c:'location',
      d:'area',
      desc:'desc',
      img:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHXA14c0roOUnYcw-bcaFiof0Lezw6fzi-_w&usqp=CAU','https://cdn1.i-scmp.com/sites/default/files/styles/1200x800/public/images/methode/2018/12/23/8adf4e08-0649-11e9-b0d2-cf4a0f50367e_image_hires_232313.JPG?itok=dGr0h6ww&v=1545578598','https://images.unsplash.com/photo-1522770179533-24471fcdba45']
    }
  ])
  const [att,setAtt] = useState([
    {
      a:'Title',
      b:'Type',
      c:'Location',
      d:'Area',
    }
  ])




  const handlePopup=()=>{
      setShow(true);
      console.log('making true');
  }

  return (
    <div className='admin-box'>
    <div className='top-bar'>
    <h5 style={{fontSize:'1.2rem',padding:'0.6rem 0 0 1rem',fontWeight:'400'}}>Review Alert Requests</h5>
  </div>

  <div className='main-box'>

  {
    <div onClick={handlePopup} className='box-child' style={{display:'flex',justifyContent:'space-between'}}>
      <div className='left-child'>
        <h3>Title of the disaster</h3>
        <h3>Type</h3>
        <h3>Location</h3>
      </div>
      <div className='right-child'>
        <h3>username</h3>
        <h3>Email@gmail.com</h3>
        <h3>phonenumber</h3>
        {show && <Popup heading={'Alert request'} data={data}  att={att}/>}
      </div>
    </div>
    
  }
 
   

  </div></div>
  )
}

export default AlertBox