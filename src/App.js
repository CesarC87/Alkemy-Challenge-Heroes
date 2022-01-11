
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import CardDetailContainer from './components/CardDetailContainer/CardDetailContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter /*basename="/AlkemyChallenge"*/>             
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/Home" element={<Home/>} />
          <Route exact path="/Heroe/:id" element={<CardDetailContainer/>} />
        </Routes>        
      </BrowserRouter>      
    </div>
  );
}

export default App;
