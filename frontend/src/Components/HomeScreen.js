import React from 'react';
import data from '../data';
import {Link,Route} from 'react-router-dom';
import ProductScreen from './ProductScreen';


function HomeScreen( props){


  return(
    <>
    
    <ul class="products">

    {data.products.map( (product) =>(
       <div>
            <li>
       <div class="product">
           <img class="product-image" src={product.image} alt="product"/>
           <div class="product-name">
              <Link to ={'/products/'+product.id}>
               {product.name}
              </Link>
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

</>

  )





}


export default HomeScreen;