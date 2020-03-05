import React,{Component} from 'react';
import image from '../images/d1.jpg';
import data from '../data';
import{BrowserRouter as Router,Route,Link} from 'react-router-dom';
import HomeScreen from './HomeScreen';
import ProductScreen from './ProductScreen';

class Main extends Component {




  render(){


    return(
        <Router>
        <main class="main">

        <div class="content">
            <Route exact true path ="/" component={HomeScreen} />
            <Route exact true path ="/products/:id" component={ProductScreen}/>
          
           </div>
        </main>
        </Router>
    )
  }
}


export default Main