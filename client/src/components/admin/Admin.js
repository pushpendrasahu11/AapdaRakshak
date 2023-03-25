import React, { useEffect, useState } from 'react'
import '../../styles/admin.css'
import Avatar from '@mui/material/Avatar';
import dp from '../../assets/img1.jpg'
import AlertBox from './AlertBox';
import RaiseFundBox from './RaiseFundBox'
import VolunteerBox from './VolunteerBox'

function Admin() {

  const [current,setCurrent] = useState('alert');

  useEffect(()=>{
    handleBack();
  },[current])

  const handleCurrent = (val) =>{
    document.getElementById(current).style.background = '#ffffff';
    setCurrent(val);
  }

  const handleBack = () => {
    document.getElementById(current).style.background = '#e0e0e0';
  }

  return (
    <div className='admin-container'>
      <div className='admin-left'>
        
          <li id='alert' onClick={(e)=>handleCurrent('alert')}>Review Alert requests</li>
          <li id='raise' onClick={(e)=>handleCurrent('raise')}>Review Raising Funds</li>
          <li id='volunteer' onClick={(e)=>handleCurrent('volunteer')}>Review Volunteer Application</li>
         
      </div>
      <div className='admin-right'>
            <div className='admin-top'>
            <Avatar
        alt="avatar"
        src={dp}
        sx={{ width: 150, height: 150,boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}
      />
      <h2>Admin</h2>
      
            </div>
            {(() => {
        switch (current) {
          case 'alert':
            return <AlertBox></AlertBox>
          case 'raise':
            return <RaiseFundBox/>
          case 'volunteer':
            return <VolunteerBox />
          default:
            return <AlertBox></AlertBox>
        }
      })()}
      </div>
    </div>
  )
}

export default Admin