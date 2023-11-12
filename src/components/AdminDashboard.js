import React from 'react'
import Sidebar from './Sidebar'
import Home from './Home'

function AdminDashboard() {
  return (
    <div className='container-fluid bg-secondary min-vh-100'>
      <div className='row justify-content-between'>
        <div className='col-2 bg-white vh-100'>
          <Sidebar/>
        </div>
        <div className='col-auto'>
          <Home/>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard