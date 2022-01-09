
import './App.css';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from 'axios'

function App() {
  return (
    <div className="App">
      <BrowserRouter /*basename="/AlkemyChallenge"*/>             
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/Home" element={<Home/>} />
        </Routes>
        {/* <Cards/> */}
      </BrowserRouter>
      
    </div>
  );
}

export default App;
