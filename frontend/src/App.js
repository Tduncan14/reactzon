import React,{Component} from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Aside from './Components/Aside';
import {createStore} from 'redux'
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
import HomeScreen from './Components/HomeScreen';
import ProductScreen from './Components/ProductScreen';


class App extends Component {

  constructor(props){
       super(props)

      this.state={
         classChange:false
      }


  }


  openMenu = () => {

       
      this.setState({

        classChange : !this.state.classChange
      })


    console.log(this.state.classChange ,'App.js')



  }

  render(){
  return (
 <Router>
 
  <div className="grid-container">
  <Header openMenu ={this.openMenu} />
  <Aside classChange={this.state.classChange} openMenu={this.openMenu} />

  <Route path="/" exact={true} component={HomeScreen} /> 
  <Route path="/products" component={ProductsScreen} />
  <Route path="/products/:id" component={ProductScreen} /> 
 
  <Footer />

  </div>

  </Router>

  
   
  );
}
}

export default App;