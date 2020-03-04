import React,{Component} from 'react'



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
         <a href="index.html">Treekster</a>
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