
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import CardDetailContainer from './components/Containers/CardDetailContainer/CardDetailContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeroProvider } from './context/TeamContext'
import AddedHeroes from './components/AddedHeroes/AddedHeroes';


function App() {
  return (
    <div className="App">
      <HeroProvider>
        <BrowserRouter /*basename="/AlkemyChallenge"*/>             
          <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/Home" element={<Home/>} />
            <Route exact path="/Team" element={<AddedHeroes/>} />
            <Route exact path="/Heroe/:id" element={<CardDetailContainer/>} />
          </Routes>        
        </BrowserRouter>      
      </HeroProvider>
    </div>
  );
}

export default App;
