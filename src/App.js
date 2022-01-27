import React, { useContext, useEffect } from 'react'
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import CardDetailContainer from './components/Containers/CardDetailContainer/CardDetailContainer';
import { BrowserRouter, Route, Routes, Navigate, useLocation, useNavigate } from "react-router-dom";
import { HeroProvider } from './context/TeamContext'
import { AuthContext } from './context/AuthContext'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const { isLoggedIn } = useContext(AuthContext)    
  const location = useLocation()
    
  return (
    <div className="App">      
      <HeroProvider>                   
          <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/Home" element={isLoggedIn ? <Home/> : <Navigate to='/' replace state={{from: location}}/>  } />            
            <Route exact path="/Heroe/:id" element={isLoggedIn ? <CardDetailContainer/> : <Navigate to='/' replace state={{from: location}}/> } />
          </Routes>                     
      </HeroProvider>      
    </div>
  );
}

export default App;
