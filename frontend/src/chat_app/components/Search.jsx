import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

function Search({ setSearch }) {
 

  return (
    
      <label className=" flex items-center gap-2 relative">
        <input
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          type="text"
          className="input  w-full"
          placeholder="search contact"
        />
      
      <BsSearch color="black" size={"18"} className="absolute right-2" />
      </label>
        
      
    
  );
}

export default Search;
