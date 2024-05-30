import styled from "styled-components";
import BackgroundImage from '../../assets/backgrounimage.png';



export const Container = styled.main`
height: 100vh;
width: 100vw;
background-color: black;
color: white;
display: flex;

`

export const Divleft = styled.div`
height: 100vh;
width: 55vw;
background-color: #201D1D;
display: flex;
align-items: center;
justify-content: center;
`

export const Logo = styled.img`
position: absolute;
left: 1%;
top: 3%;
z-index: 1000px;
width: 6%;
cursor: pointer;

`

export const Divright = styled.div`
height: 100vh;
width: 45vw;
background-image: url(${BackgroundImage});
background-repeat: no-repeat;
background-size: cover;
`

export const Form = styled.form`
height: 80vh;
width: 25vw;
background-color: transparent;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`


export const DivAdicionar = styled.div`
width: 80%;
background-color: transparent;
margin-top: 10px;
cursor: pointer;
display: flex;
align-items: center;

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
font-family: 'Montserrat', sans-serif;

  &:hover {
    text-decoration: underline;
  }


`

export const Textsuport = styled.span`
color: #0090C3;
font-size: 12px;
font-weight: bold;
font-family: 'Montserrat', sans-serif;
`


export const Group = styled.div`
width: 80%;
background-color: transparent;
display: flex;
flex-direction: column;
font-size: 1.2rem;
margin-top: 15px;


`
