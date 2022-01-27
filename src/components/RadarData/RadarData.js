import React, { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
  RadialLinearScale,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import "./RadarData.css";
import { HeroContext } from "../../context/TeamContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
  RadialLinearScale
);

const RadarData = () => {
  const { totalIntelligence,totalStrength,totalSpeed,totalDurability,totalPower,totalCombat } = useContext(HeroContext);
  

  const data = {
    labels: [
      "intelligence",
      "strength",
      "speed",
      "durability",
      "power",
      "combat",
    ],
    datasets: [
      {
        data: [totalIntelligence(),totalStrength(),totalSpeed(),totalDurability(),totalPower(),totalCombat()],
        label: "Team Stats",
        borderColor: "white",
        backgroundColor: "#b1e3daad",
        pointBackgroundColor: "black",
        pointRadius: 6,
      },
    ],
  };
  const options = {
    responsive: true, 
    filler: true,
    plugins: {
      legend: {
        display: false,        
      },
    },    
    scales: {
      r: {
        grid: {
          color: "white",
        },
        pointLabels: {
          color: "white",
          font:{
              size:14,
              family: 'Quicksand',
              weight: 'bold'
          }
        },
        angleLines: {
            color: 'white'
          }
      },
    },
  };
  return (
    <div className="radar">
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarData;
