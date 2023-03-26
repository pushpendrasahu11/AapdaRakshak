import React, { useEffect, useState } from 'react'
import '../../styles/userprofile.scss'
import Avatar from '@mui/material/Avatar';
import dp from '../../assets/img1.jpg'
import AlertStatus from './AlertStatus';
import RaiseFundStatus from './RaiseFundStatus';
import VolunteerStatus from './VolunteerStatus';
import UserSetting from './UserSetting';

function UserProfile() {

  
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
    <div className='user-container'>
      <div className='user-left'>
        
          <li id='alert' onClick={(e)=>handleCurrent('alert')}>Sent Alert Status</li>
          <li id='raise' onClick={(e)=>handleCurrent('raise')}>Raise Fund Status</li>
          <li id='volunteer' onClick={(e)=>handleCurrent('volunteer')}>Volunteer Application Status</li>
          <li id='settings' onClick={(e)=>handleCurrent('settings')}>Settings</li>
        
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
            {(() => {
        switch (current) {
          case 'alert':
            return <AlertStatus></AlertStatus>
          case 'raise':
            return <RaiseFundStatus/>
          case 'volunteer':
            return <VolunteerStatus />
          case 'settings':
          return <UserSetting/>
          default:
            return <AlertStatus></AlertStatus>
        }
      })()}
      </div>
    </div>
  )
}

export default UserProfile