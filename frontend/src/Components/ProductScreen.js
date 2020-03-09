import React from 'react';
import data from '../data';


function ProductScreen(props){

 
   console.log(props.match.params.id)

  const product = data.products.find(pro => pro.id === props.match.params.id)

    return(
      
      <> 
      <div>{product.id}</div>
      </>
      
    )
}


export default ProductScreen;