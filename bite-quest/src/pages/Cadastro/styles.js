import styled from "styled-components";
import BackgroundImage from '../../assets/backgrounimage.png';


export const Container = styled.div`
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

export const Divright = styled.div`
height: 100vh;
width: 45vw;
background-image: url(${BackgroundImage});
background-repeat: no-repeat;
background-size: cover;
`


export const Form = styled.div`
height: 80vh;
width: 25vw;
background-color: transparent;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
