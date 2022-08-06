import * as React from 'react';
import "./ProductCards.css"




const ProductCards = () => {



  return (
    <div class="wrapper">
  <div class="cols">
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" >
						<div class="inner">
							<p>Product Img</p>
              <span>Product name</span>
						</div>
					</div>
					<div class="back">
						<div class="inner">
						  <p>Product Info</p>
						</div>
					</div>
				</div>
			</div>
		</div>
 </div>
    );
}

export default ProductCards