import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantData,deletePlant,changePrice}) {

 if(plantData.length === 0  ) return <h1>Loading...</h1>
  return (
    <ul className="cards">{plantData.map(plant =>{ return <PlantCard key={plant.id} plantName={plant.name} plantImage={plant.image} plantPrice={plant.price} id={plant.id} deletePlant={deletePlant} changePrice={changePrice}/>})}</ul>
   
    
  );
}

export default PlantList;
