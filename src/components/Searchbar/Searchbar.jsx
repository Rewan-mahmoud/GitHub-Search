import axios from "axios";
import React, {  useState } from "react";
import searchIcon from "../../images/icon-search.svg";
import "./SearchBar.css";
export default function Searchbar(props) {
  const [value , setValue ] = useState("")
  const [error , setError] = useState("")
  
  async function getData(userName = "github") {
    
    await axios
      .get(`https://api.github.com/users/${userName}`)
      .then((res) => {
       props.saveUserData(res)
      })
      .catch((err)=> setError(err));
  }



function handleSubmit(e) {
  e.preventDefault();
  getData(value)
 
};

  return (
    <form className="search-form mt-4" onSubmit={handleSubmit}>
      <img className="search-icon" alt="" />
      <input
        type="text"
        className="username "
        placeholder="Search GitHub username"
        name="username"
        onChange={(e)=>setValue(e.target.value)}
      
      />
      {error? <span  className="error">No results</span> : " " }
      
      <button  className="search-btn">Search</button>
    </form>
  );
}
