import * as React from 'react';
import "./BrandCards.css"
// import EjuiceBrandCard from './EjuiceBrandCard';
import { useNavigate } from "react-router-dom";




const HardwareBrandCards = ({brand, setProducts, setImage}) => {

	let navigate = useNavigate()
	const routeChange = async () =>{
		let path = '/products' 
		setImage(brand.name)
		await setProducts(brand.products)
		navigate(path)
	}

  return (
    <div class="wrapper">
  <div class="cols">
			<div class="col" onTouchStart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" >
						<div class="inner">
						<img class="logo" src={brand.logo}/>
							<br/>
              					<span>{brand.name}</span>
						</div>
					</div>
					<div class="back" onClick={routeChange}>
						<div class="inner">
						  <p>{brand.info}</p>
							<h5>Click to view products</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
 </div>
    );
}

export default HardwareBrandCards