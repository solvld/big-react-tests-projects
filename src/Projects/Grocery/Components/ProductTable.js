import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable(props) {
  const rows = [];
  let lastCategory = null;
  let products = props.infoObject;
  let filter = props.filterText;


  products.forEach((object) => {
    if (
      object.name.toLowerCase().indexOf(filter.toLowerCase()) === -1
    ) {
      return;
    }
    if (
      props.inStockOnly && !object.stocked
    ) {
      return;
    }
    if (object.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={object.category}
          key={object.category} />
      );
    }
    rows.push(
      <ProductRow
        product={object}
        key={object.name} />
    );
    lastCategory = object.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export default ProductTable;