import {Component} from 'react'
import './app.css'
import '../../fonsts/font.css'
import MainSection from '../main-section/main-section';
import Burger from '../burger/burger';
import Overlay from '../overlay/overlay';

class App extends Component{
    state = {
        seedsDivider: {
            lineColor: ''
        }
    }

    render(){

        return(
            <>
                <Overlay/>
                <Burger/>
                <MainSection/>

            </>
        )

    }

}

export default App;