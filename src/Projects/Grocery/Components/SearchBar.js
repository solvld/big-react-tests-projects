import React from "react";

function SearchBar() {
  return (
    <form className="SearchBar">
      <input type="text" placeholder="search..." />
      <button type="submit">search</button>
      <label>
        <input type="checkbox" />
        {' '}
        Only show product in stock
      </label>
    </form>    
  )
};

export default SearchBar;