import * as React from 'react';
import "./BrandCards.css"




const HardwareBrandCards = () => {



  return (
    <div class="wrapper">
  <div class="cols">
			<div class="col" onTouchStart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" >
						<div class="inner">
							<p>Brand Image</p>
							<br/>
              					<span>Brand name</span>
						</div>
					</div>
					<div class="back">
						<div class="inner">
						  <p>Brand Info</p>
						  <br/>
						  <br/>
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