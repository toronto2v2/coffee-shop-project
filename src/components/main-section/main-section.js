
import {Component} from 'react'
import './main-section.css'
import seedsImageWhite from '../seeds-divider/img/seeds.png'
import seedsNavWhite from './img/seedsNav.png'
import SeedsDivider from '../seeds-divider/seeds-divider';
import NavBar from '../nav-bar/nav-bar';

class MainSection extends Component {


    render() {

        return(
            <section className='mainSection'>
                <NavBar color = 'white'
                        img = {seedsNavWhite}/>
                <div className="container">
                    <h1 className='mainSection__header'>Everything You Love About Coffee</h1>
                    <SeedsDivider img = {seedsImageWhite}
                                  color = 'white'> 
                                  </SeedsDivider>

                    <div className="mainSection__subHeader">
                        We makes every day full of energy and taste<br/>
                        Want to try our beans?
                    </div>
                    <button className='mainSection__btn'>More</button>
                </div>
            </section>
        )
    }

}

export default MainSection;