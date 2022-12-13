import { Component } from "react";
import './overlay.css'

class Overlay extends Component {
    state = {
        active:'',
    }

    render() {
        return(
            <div className="overlay">
            </div>
        )
    }
}

export default Overlay;