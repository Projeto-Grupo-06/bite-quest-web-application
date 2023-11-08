import styled from "styled-components";
import BackgroundImage from '../../assets/backgrounimagelogin.png';



export const Container = styled.div`
height: 100vh;
width: 100vw;
background-color: black;
color: white;
display: flex;

`

export const Divleft = styled.div`
position: relative;
height: 100vh;
width:45vw;
display: flex;
align-items: center;
justify-content: center;
background-image: url(${BackgroundImage});
background-size: cover;
`

export const Logo = styled.img`
position: absolute;
right: 1%;
top: 3%;
z-index: 1000px;
width: 14%;
cursor: pointer;
`

export const Divright = styled.div`
height: 100vh;
width:65vw;
display: flex;
align-items: center;
justify-content: center;
background-color: #1a1a1a;
;
`


export const Form = styled.div`
height: 90vh;
width: 30vw;
background-color: transparent;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`


export const Divgroup = styled.div`
width: 80%;
background-color: transparent;
margin-top: 10px;
cursor: pointer;
display: flex;
align-items: center;
position: relative;

`

export const Second = styled.div`
height: 100%;
background-color: transparent;
cursor: pointer;
display: flex;
align-items: center;
position: absolute;
right: 0%;


`



export const Check = styled.input.attrs({ type: 'checkbox' })`
width: 18px;
height: 17px;
background-color: #201D1D;
border: solid 3px whitesmoke;
border-radius: 4px;
outline: none;
cursor: pointer;

`

export const TextReference = styled.span`
color: #0090C3;
font-size: 12px;
font-weight: bold;
margin-left:10px ;

  &:hover {
    text-decoration: underline;
    transition: all 1s linear;
  }


`