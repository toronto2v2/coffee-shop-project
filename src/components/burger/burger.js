import { Component } from "react";
import './burger.css'

class Burger extends Component {

    state = {
        status: '',
    }

    render(){

        return(
            <div className="burger">
                <span></span>
            </div>
            
        )
    }
}

export default Burger;