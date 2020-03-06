import React,{Component} from 'react';
import {BrowserRouter as Router, Link,Switch,Route} from 'react-router-dom';
import HomeScreen from './HomeScreen';
import ProductScreen from './ProductScreen';



class Header extends Component {

  constructor(props){
      super(props)

      this.state={
          
      }
  }


render(){

    return(

   
        <header  className="header">
        <div className="brand">
            <button onClick={this.props.openMenu}>
                &#9776;
            </button>
         <Link to="/">Treekster</Link>
        </div>

        <div className="header-links">
            <a href="signin.html">Sign in</a>
            <a href="cart.html"> Cart</a>

        </div>

    </header>
  

    

    )

}
}


export default Header;