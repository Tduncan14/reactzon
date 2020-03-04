import React,{Component} from 'react';
import image from '../images/d1.jpg';
import data from '../data';
class Main extends Component {




  render(){


    return(
        <main class="main">

        <div class="content">
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
           </div>
        </main>
    )
  }
}


export default Main