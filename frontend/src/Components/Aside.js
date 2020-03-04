import React ,{Component} from 'react';



class Aside extends Component {

     constructor(props){
         super(props)

         this.state={
        //   class:this.props.classChange === false ? 'sidebar close':' sidebar open',
          update:this.props.classChange
         }
     }


     componentDidUpdate(prevProps){

        if(this.props.classChange !== prevProps.classChange){

            this.setState({update : !this.state.update})
        }
     }

 closeMenu = () => {


    this.setState({
      update:false
    })

    console.log(this.state.update,'console.log heyy')
 }


    render(){




       return(

        <aside className={ this.state.update === false ? 'sidebar close' : 'sidebar open'}>
             <button onClick={this.closeMenu}>
                 X
             </button>
             <h3>Shopping Categories</h3>
             <ul>
                <li>
                    <a href="#">
                        pants
                    </a>
                </li> 
                <li>
                    <a href="#">
                        shirts
                    </a>
                </li> <li>
                    <a href="#">
                        shoes
                    </a>
                </li> 

             </ul>

         </aside>

       )
    }
}


export default Aside;