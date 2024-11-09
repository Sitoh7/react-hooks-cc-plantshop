import React,{useEffect,useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";



function PlantPage() {
  const [plants,setPlants] = useState([])

function fetchPlants(){
  fetch("http://localhost:6001/plants")
  .then(res=>res.json())
  .then(plants=>setPlants(plants))
}

useEffect(fetchPlants,[])


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
    
  const newPlant = {
    name:plantName,
    image:plantImage,
    price:plantPrice
  }
  fetch("http://localhost:6001/plants",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(newPlant)
  })
  .then(()=>fetchPlants())
  
}

function deletePlant(id){
  console.log(id)
  fetch(`http://localhost:6001/plants/${id}`,{
    method:"DELETE"
  })
  .then(()=>fetchPlants())
}


function changePrice(id){
  const newPrice = Number(window.prompt("Enter new price"))
 console.log(newPrice) 
 fetch(`http://localhost:6001/plants/${id}`,{
   method:"PATCH",
   headers:{
     "Content-Type":"application/json"
   },
   body:JSON.stringify({price:newPrice})
 })
 .then(()=>fetchPlants())
}

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search plantSearch={plantSearch} />
      <PlantList plantData={plants} deletePlant={deletePlant} changePrice={changePrice}/>
    </main>
  );
}

export default PlantPage;
