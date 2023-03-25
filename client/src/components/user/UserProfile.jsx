import React from 'react'
import '../../styles/userprofile.scss'
import Avatar from '@mui/material/Avatar';
import dp from '../../assets/img1.jpg'


function UserProfile() {
  return (
    <div className='user-container'>
      <div className='user-left'>
        
          <li>Sent Alert Status</li>
          <li>Raise Fund Status</li>
          <li>Volunteer Application Status</li>
          <li>Settings</li>
        
      </div>
      <div className='user-right'>
            <div className='user-top'>
            <Avatar
        alt="avatar"
        src={dp}
        sx={{ width: 150, height: 150,boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}
      />
      <h2>User</h2>
      
            </div>
            <div className='admin-box'>
              <div className='top-bar'>
              <h5 style={{fontSize:'1.2rem',padding:'0.6rem 0 0 1rem',fontWeight:'400'}}>Review Alert Requests</h5>
            </div>
            </div>
      </div>
    </div>
  )
}

export default UserProfile