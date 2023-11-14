import React from "react";
import './Grocery.css'
import { info } from './ProductsInfo.js'
import SearchBar from "./Components/SearchBar";
import ProductTable from "./Components/ProductTable";

export default function GroceryApp() {
console.log(info) //object!

  return (
    <div>
      <h1>Grocery List</h1>
      <SearchBar />
      <ProductTable infoObject={info} />
    </div>
  )
}

