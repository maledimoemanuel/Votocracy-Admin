import logo from './logo.svg';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import AdminDashboard from './components/AdminDashboard';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<AdminDashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
