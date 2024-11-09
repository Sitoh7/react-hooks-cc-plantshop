import React,{useEffect,useState} from "react";

function NewPlantForm({addPlant}) {

  const[plantName,setPlantName] = useState("")
  const[plantImage,setPlantImage] = useState("")
  const[plantPrice,setPlantPrice] = useState(" ")
  
  return (
    <div className="new-plant-form" onSubmit={(e)=>{e.preventDefault() 
    addPlant(plantName,plantImage,plantPrice)}}>
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" value={plantName} onChange={(e)=>setPlantName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL"  value={plantImage} onChange={(e)=>setPlantImage(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price"  value={plantPrice} onChange={(e)=>setPlantPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
