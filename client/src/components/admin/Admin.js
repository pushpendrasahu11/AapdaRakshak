import React from 'react'
import '../../styles/admin.css'
import Avatar from '@mui/material/Avatar';
import dp from '../../assets/img1.jpg'
import AlertBox from './AlertBox';

function Admin() {
  return (
    <div className='admin-container'>
      <div className='admin-left'>
        
          <li>Review Alert requests</li>
          <li>Review Raising Funds</li>
          <li>Review Volunteer application</li>
          <li>Settings</li>
        
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
            <AlertBox></AlertBox>
      </div>
    </div>
  )
}

export default Admin