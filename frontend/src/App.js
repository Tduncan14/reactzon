import React,{Component} from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Aside from './Components/Aside';
import {createStore} from 'redux'


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
  <div className="grid-container">
  <Header openMenu ={this.openMenu} />
  <Aside classChange={this.state.classChange} openMenu={this.openMenu} />
  <Main />
  <Footer />

  </div>

  
   
  );
}
}

export default App;
