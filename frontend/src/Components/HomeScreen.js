import React from 'react';
import data from '../data';


function HomeScreen( props){


  return(
    <ul class="products">

    {data.products.map( (product) =>(
       <div>
            <li>
       <div class="product">
           <img class="product-image" src={product.image} alt="product"/>
           <div class="product-name">
              <a href="#">
               {product.name}
              </a>
           </div>
           <div class="product-brand">
               {product.brand}
           </div>
           <div class="product-price">
               {product.price}
           </div>
           <div class="product-rating">
           {product.rating} Stars {product.numReviews} reviews
        </div>
        </div>
    </li>
       </div>

    ))}
   
    </ul>



  )





}


export default HomeScreen;