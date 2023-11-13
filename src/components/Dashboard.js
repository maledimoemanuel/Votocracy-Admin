import React from 'react'
import './style.css'

function Dashboard() {
  return (
    <div className='container p-3'>
      <div className='p-2 justify-content-center align-items-center'>
          <img className='user-img' src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png' alt='user-img'/>
          <p>Noah</p>
      </div>
      <div className='number-of-users'>
        <div>
          <p>256</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
