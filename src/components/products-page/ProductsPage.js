import React from 'react'
import images from '../../product-images/productImages'
import "./ProductsPage.css"

const ProductsPage = ({products, image}) => {

  

  const renderProducts = () =>{
    return products.map(product => <li key={product.id}> {product.name} </li>)
  }


    
  return (
    <div id="main">
        <br/>
        <img class= "image" src={images[image]} alt=''></img>
        <br/>
        <br/>
        {renderProducts()}
  
    </div>
  )
}

export default ProductsPage