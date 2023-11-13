import React, {useState} from 'react'
import Sidebar from './Sidebar'
import Home from './Home'
import Dashboard from './Dashboard';
import Events from './Events';
import Nav from './Nav';
import OngoingEvents from './OngoingEvents';
import Create from './Create'
import Users from './Users';

function AdminDashboard() {
  const [selectedLink, setSelectedLink] = useState('');

  const renderContent = () => {
    switch (selectedLink) {
      case 'dashboard':
        return <Dashboard />;
      case 'home':
        return <Home/>;
      case 'events':
        return <Events/>;
      case 'ongoingevents':
        return <OngoingEvents/>;
      case 'create':
        return <Create/>;
      case 'users':
        return <Users/>;
      default:
        return null;
    }
  };
  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };
  return (
    <div className='container-fluid bg-secondary min-vh-100'>
      <div className='row justify-content-between'>
        <div className='col-2 bg-white vh-100'>
          <Sidebar onLinkClick={handleLinkClick}/>
        </div>
        <div className='col-auto'>
          {/*<Home/>*/}
          <Nav>{renderContent()}</Nav>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard