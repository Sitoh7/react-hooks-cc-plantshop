import React,{useEffect,useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";



function PlantPage() {
  const [plants,setPlants] = useState([])

useEffect(fetchPlants,[])
  

function fetchPlants(){
  fetch("http://localhost:6001/plants")
  .then(res=>res.json())
  .then(plants=>setPlants(plants))
}


function plantSearch(search){

  if(search){
    const searchedPlants = plants.filter(plant=>{return plant.name.toLowerCase().includes(search.toLowerCase())})
    setPlants(searchedPlants)
    
  }
  
 else{
  fetchPlants()
 }


}

function addPlant(plantName,plantImage,plantPrice){
    
  const newPlant = {name:plantName,image:plantImage,price:plantPrice}
  fetch("http://localhost:6001/plants",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(newPlant)
  })
  .then(()=>fetchPlants())
  
}




  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search plantSearch={plantSearch} />
      <PlantList plantData={plants} />
    </main>
  );
}

export default PlantPage;
