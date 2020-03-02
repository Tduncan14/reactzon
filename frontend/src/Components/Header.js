import React from 'react'



const Header = () => {






    return(

        <header  className="header">
        <div className="brand">
            <button onClick="openMenu()">
                &#9776;
            </button>
         <a href="index.html">Amazon</a>
        </div>

        <div className="header-links">
            <a href="signin.html">Sign in</a>
            <a href="cart.html"> Cart</a>

        </div>
    </header>

    )
}


export default Header;