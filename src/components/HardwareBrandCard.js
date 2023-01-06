import * as React from 'react';
import "./BrandCards.css"
import EjuiceBrandCard from './EjuiceBrandCard';




const HardwareBrandCards = ({brand, setProducts}) => {



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
					<div class="back">
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