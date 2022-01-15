import { createContext }  from "react";
import { useState } from "react";

// Creamos el contexto
export const HeroContext = createContext();

// Creamos el provider
export const HeroProvider = ({children}) => { // Pasamos como parámetro a children, 
    // que va a ser todo lo que esté dentro de provider.
const [team, setTeam] = useState([]);
const [MaxReached, setMaxReached] = useState(false)

const addHero = (hero) => {

const duplicate = team.find(x => x.id === hero.id)
if (duplicate){
setTeam(team.map(x => x.id === duplicate.id
? (hero) : x))
}else {
    if(team.length < 6){
        setTeam([...team , hero] )
    }
    else{
        setMaxReached(true)
    }
}        
}

const deleteHero = (id) => {
setTeam(team.filter(x => x.id !== id))
setMaxReached(false)
}

const clearTeam = () => {
setTeam([])
}

return <HeroContext.Provider value={{team, addHero, deleteHero, clearTeam, MaxReached}}>
{children}
</HeroContext.Provider>
}