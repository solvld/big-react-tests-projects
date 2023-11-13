import React from "react";

function ProductRow({product}) {
  const name = product.stosked? product.name : 
    <span style={{color: 'red'}}>
      {product.name}
    </span>

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

export default ProductRow;