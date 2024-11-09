import React,{useState,useEffect} from "react";
import PlantCard from "./PlantCard";

function PlantList({plantData}) {

  const[plants,setPlants] = useState([])
  useEffect(()=>{
    setPlants(plantData)
  },[plantData])
  //console.log(plants)
  //console.log(plantData)
  if(plantData.length === 0  ) return <h1>Loading...</h1>
  return (
    <ul className="cards">{plantData.map(plant =>{ return <PlantCard key={plant.id} plantName={plant.name} plantImage={plant.image} plantPrice={plant.price} />})}</ul>
   
    
  );
}

export default PlantList;
