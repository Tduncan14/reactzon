import React,{Component} from 'react';
import image from '../images/d1.jpg';
import data from '../data';
import{BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import HomeScreen from './HomeScreen';
import ProductScreen from './ProductScreen';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';

class Main extends Component {




  render(){


    return(
  
      <div className="grid-container">
          <Route exact path to="/" component={HomeScreen} />
          
      </div>
   
    )
  }
}


export default Main