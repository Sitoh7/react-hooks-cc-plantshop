import React,{useState} from "react";

function PlantCard({plantName,plantPrice,plantImage}) { 
  const[plantStock,setPlantStock] = useState(true)


  return (
    <li className="card" data-testid="plant-item">
      <img src={plantImage} alt={plantName} />
      <h4>{plantName}</h4>
      <p>Price: {plantPrice}</p>
      {plantStock ? (
        <button className="primary" onClick={()=>setPlantStock(prev=>!prev)}>In Stock</button>
      ) : (
        <button onClick={()=>setPlantStock(prev=>!prev)}>Out of Stock</button>
      )}
      <button onClick={deletePlant()}>Delete</button>
    </li>
  );
}

export default PlantCard;
