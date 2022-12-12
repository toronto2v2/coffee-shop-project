import { Component } from "react";
import styled from "styled-components";
import './nav-bar.css'
import './nav-bar-media.css'


const NavBarWrapper = styled.ul`
    display: flex;
    gap: 40px;
        &::before{
            content: url(${props => props.img});
            position: absolute;
            left: -35px;
            bottom: -10px;
            
        }
        li{
            list-style-type: none;
        }
        a{
            text-decoration: none;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: ${props => props.color};
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            transition: .1s all linear;
                    &:hover{
            transform: scale(1.07)
        }
    @media (max-width: 824px){
        display: none;
    }

`

class NavBar extends Component{
    
    render(){
        const {img, color} = this.props;
        return(
            <nav className="navBarWrapper">
                <NavBarWrapper img = {img} color = {color}>
                    <li><a className="navBar__item" href ='google.com'>Coffee house</a></li>
                    <li><a className="navBar__item" href ='google.com'>Our coffee</a></li>
                    <li><a className="navBar__item" href ='google.com'>For your pleasure</a></li>
                </NavBarWrapper>
            </nav>

        )
    }
}
export default NavBar;