import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable(props) {
  const rows = [];
  let lastCategory = null;
  let products = props.infoObject

  products.forEach((object) => {
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