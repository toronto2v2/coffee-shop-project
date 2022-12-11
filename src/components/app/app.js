import {Component} from 'react'
import './app.css'
import '../../fonsts/font.css'
import MainSection from '../main-section/main-section';

class App extends Component{
    state = {
        seedsDivider: {
            lineColor: ''
        }
    }

    render(){

        return(
            <>
                <MainSection/>

            </>
        )

    }

}

export default App;