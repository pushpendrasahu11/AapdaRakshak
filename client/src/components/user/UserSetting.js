import React from 'react'

function UserSetting() {
  return (
    <div className='admin-box'>
    <div className='top-bar'>
    <h5 style={{fontSize:'1.2rem',padding:'0.6rem 0 0 1rem',fontWeight:'400'}}>Settings</h5>
  </div>

  <div className='main-box'>
    
    

      <div className='box-child'>
      <div className='left-child'>
      <h3 style={{margin:'2rem 0px'}}>Change password</h3>
        <div style={{display:'flex',gap:'1rem',alignItems:'center'}}><h4 style={{flex:1}}>Current password</h4> <input style={{flex:1}} type="text" />  </div>
        <div style={{display:'flex',gap:'1rem',alignItems:'center',margin:'1rem 0'}}><h4 style={{flex:1}}>New password</h4> <input style={{flex:1}} type="text" />  </div>
        <div style={{display:'flex',gap:'1rem',alignItems:'center'}}><h4 style={{flex:1}}>Confirm new password</h4> <input style={{flex:1}} type="text" />  </div>
        
       
      </div>

    </div>
    
    
    
    

  </div>
  </div>
  )
}

export default UserSetting