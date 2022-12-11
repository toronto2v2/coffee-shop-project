import { Component } from "react";
import styled from "styled-components";
import './nav-bar.css'

const NavBarWrapper = styled.div`
    display: flex;
    gap: 40px;
        &::before{
            content: url(${props => props.img});
            position: absolute;
            left: -35px;
            bottom: -10px;
            
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
        }

`

class NavBar extends Component{
    
    render(){
        const {img, color} = this.props;
        return(
            <nav className="navBarWrapper">
                <NavBarWrapper img = {img} color = {color}>
                    <a className="navBar__item" href ='google.com'>Coffee house</a>
                    <a className="navBar__item" href ='google.com'>Our coffee</a>
                    <a className="navBar__item" href ='google.com'>For your pleasure</a>
                </NavBarWrapper>
            </nav>

        )
    }
}
export default NavBar;