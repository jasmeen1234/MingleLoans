import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import LatestProduct from './components/LatestProduct';
import EditProduct from './components/EditProduct';
import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute component
import './App.css'
import Home from './components/Home';
let userInfo = {
  email: "",
  username: "",
  firstName: "",
  profileImage: "",
  token: "",
  refreshToken: ""
};

const App = () => {
  const [user, setUser] = useState(userInfo);
  
  return (
    <div className='appname'>
      <Router>
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login setUser={setUser} />} />
          <Route 
            path='/dashboard/*' 
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} setUser={setUser} />
              </ProtectedRoute>
            }
          />
          <Route path="/edit-product/:productId" element={<EditProduct  />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;