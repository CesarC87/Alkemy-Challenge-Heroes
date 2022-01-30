import React, { useContext } from 'react'
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import CardDetailContainer from './components/Containers/CardDetailContainer/CardDetailContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeroProvider } from './context/TeamContext'
import { AuthContext } from './context/AuthContext'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const { isLoggedIn } = useContext(AuthContext)

  return (
    <div className="App">
      <HeroProvider>
        <BrowserRouter basename="/Alkemy-Challenge-Heroes">
          <Routes>          
            {isLoggedIn ? (              
              <Route exact path="/home" element={<Home /> } />,
              <Route exact path="/heroe/:id" element={<CardDetailContainer />} />  ,  
              <Route exact path="*" element={<NotFound />} />     
              ) : <Route exact path="/" element={<Login />} />
            }
               
          </Routes>
        </BrowserRouter>
      </HeroProvider>
    </div>
  );
}

export default App;
