import React from 'react'
import images from '../../product-images/productImages'

const ProductsPage = ({products, image}) => {

  

  const renderProducts = () =>{
    return products.map(product => <li key={product.id}> {product.name} </li>)
  }


    
  return (
    <div class= "main">
      <img class= "image" src={images[image]}></img>
      {renderProducts()}
    </div>
  )
}

export default ProductsPage