import React from 'react'
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import CardDetailContainer from './components/Containers/CardDetailContainer/CardDetailContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeroProvider } from './context/TeamContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthRequired from './components/AuthRequired/AuthRequired';


function App() { 

  return (
    <div className="App">
      <HeroProvider>
        <BrowserRouter basename="/Alkemy-Challenge-Heroes">
          <Routes>          
            {/* Public routes */}
            <Route exact path="/" element={<Login />} />
            <Route path="*" element={<NotFound />} />
            {/* Private routes  */}
            <Route element={<AuthRequired />}>
              <Route exact path="/home" element={<Home /> } />
              <Route exact path="/heroe/:id" element={<CardDetailContainer />} /> 
            </Route>               
          </Routes>
        </BrowserRouter>
      </HeroProvider>
    </div>
  );
}

export default App;

