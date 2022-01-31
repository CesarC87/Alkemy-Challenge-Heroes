import { createContext } from "react";
import { useState, useEffect } from "react";

// Creamos el contexto
export const HeroContext = createContext();

// Creamos el provider
export const HeroProvider = ({ children }) => {
  // Pasamos como parámetro a children,
  // que va a ser todo lo que esté dentro de provider.
  const [team, setTeam] = useState([]);
  const [MaxReached, setMaxReached] = useState(false);
  const [maxGoodreached, setMaxGoodReached] = useState(false);
  const [maxBadreached, setMaxBadReached] = useState(false);
  
  const addHero = (selectedHero) => {
    const goodAlignmentMax = team.filter((x) => x.biography.alignment === "good");
    const badAlignmentMax = team.filter((x) => x.biography.alignment === "bad");
    const duplicate = team.find((x) => x.id === selectedHero.id);
    const alignment = selectedHero.biography.alignment;    
    if (duplicate) {
      setTeam(team.map((x) => (x.id === duplicate.id ? selectedHero : x)));
    } else {
      if (team.length < 6) {
        if (alignment === "good") {
          goodAlignmentMax.length < 3 ? setTeam([...team, selectedHero]) : setMaxGoodReached(true);
        }
        if (alignment === "bad") {
          badAlignmentMax.length < 3 ? setTeam([...team, selectedHero]) : setMaxBadReached(true);
        }
      } else {
        setMaxReached(true);
        setMaxBadReached(false);
        setMaxGoodReached(false);
      }
    }
  };

  const deleteHero = (id) => {
    setTeam(team.filter((x) => x.id !== id));
    setMaxReached(false);   
  };  
    
  const totalIntelligence = () => {
    const intelligence = team.map(x=>x.powerstats.intelligence)
      return intelligence.reduce((accumulator, number) => {
          return Number(number) + Number(accumulator);
      },0)
  }
  const totalStrength = () => {
    const strength = team.map(x=>x.powerstats.strength)
      return strength.reduce((accumulator, number) => {
          return Number(number) + Number(accumulator);
      },0)
  }
  const totalSpeed = () => {
    const speed = team.map(x=>x.powerstats.speed)
      return speed.reduce((accumulator, number) => {
          return Number(number) + Number(accumulator);
      },0)
  }
  const totalDurability = () => {
    const durability = team.map(x=>x.powerstats.durability)
      return durability.reduce((accumulator, number) => {
          return Number(number) + Number(accumulator);
      },0)
  }
  const totalPower = () => {
    const power = team.map(x=>x.powerstats.power)
      return power.reduce((accumulator, number) => {
          return Number(number) + Number(accumulator);
      },0)
  }
  const totalCombat = () => {
    const combat = team.map(x=>x.powerstats.combat)
      return combat.reduce((accumulator, number) => {
          return Number(number) + Number(accumulator);
      },0)
  }
  const totalWeight = () => { 
    const reg = /\d+/g;
    const weight = team.map(x=>x.appearance.weight[1])    
    const parsedWeight = weight.map(x=>x.match(reg))     
    const pesoTotal = parsedWeight.reduce((acc, el) => acc.concat(el), [])   
    const fullWeight = pesoTotal.reduce((acc,el) => {
        return Number(acc) + Number(el)
    },0)   
    return fullWeight
  }
  const totalHeight = () => {
    const reg = /\d+/g;
    const height = team.map(x=>x.appearance.height[1])    
    const parsedHeight = height.map(x=>x.match(reg))     
    const pesoTotal = parsedHeight.reduce((acc, el) => acc.concat(el), [])   
    const fullHeight = pesoTotal.reduce((acc,el) => {
        return Number(acc) + Number(el)
    },0)   
    return fullHeight
  }

  const stats = [totalPower(),totalCombat(),totalSpeed(),totalDurability(),totalIntelligence(),totalStrength()]
  const Max = Math.max(...stats)
  const teamStats = {
      Power: totalPower(),
      Combat: totalCombat(),
      Speed: totalSpeed(),
      Durability: totalDurability(),
      Intelligence: totalIntelligence(),
      Strength: totalStrength()
  }
  
  const MaxStats = Object.keys(teamStats).find(key => teamStats[key] === Max ) 
  
  useEffect(() => {
    const goodHeroRemaining = team.filter((x) => x.biography.alignment === "good");
    const badHeroRemaining = team.filter((x) => x.biography.alignment === "bad");
    goodHeroRemaining.length < 3 ? setMaxGoodReached(false) : setMaxGoodReached(true);
    badHeroRemaining.length < 3 ? setMaxBadReached(false) : setMaxBadReached(true);    
    if(team.length === 6){
        setMaxGoodReached(false)
        setMaxBadReached(false)
        setMaxReached(true)
    }      
  }, [team])

  const clearTeam = () => {
    setTeam([]);
  };

  return (
    <HeroContext.Provider
      value={{ team, 
        addHero, 
        deleteHero, 
        clearTeam, 
        MaxReached , 
        maxGoodreached, 
        maxBadreached,
        totalIntelligence,
        totalStrength,
        totalSpeed,
        totalCombat,
        totalDurability,
        totalPower,
        totalWeight,
        totalHeight,
        MaxStats        
    }}
    >
      {children}
    </HeroContext.Provider>
  );
};
