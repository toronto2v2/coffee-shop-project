import { Component } from "react";
import './seeds-divider.css'
import './img/seeds.png'
import styled from 'styled-components'

const SeedDivider = styled.div`
    margin-top: 20px;
`
const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
        &::before{
            content: '';
            position: absolute;
            left: 290px;
            top: 15px;
            width: 60px;
            height: 0px;
        
            border: 1px solid ${props => props.color }
        }
        &::after{
            content: '';
            position: absolute;
            right: 290px;
            top: 15px;
            width: 60px;
            height: 0px;
        
            border: 1px solid ${props => props.color }
        }
`
class SeedsDivider extends Component{
    // constructor(props){
    //     super(props)
    // }
    render( ) {
        const{color} = this.props
        return(
            <SeedDivider>
                <ImgWrapper color = {color} >
                    <img src= {this.props.img} alt="Three small seeds" />
                </ImgWrapper>
            </SeedDivider>
        )
    }

}

export default SeedsDivider;