import React,{useState,useEffect} from "react";

function Search({plantSearch}) {

const [search,setSearch] = useState("")


useEffect(()=>{
  plantSearch(search)

},[search])


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
