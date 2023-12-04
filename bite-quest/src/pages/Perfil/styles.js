import styled from "styled-components";
import background from "../../assets/backgrey.png"



export const Container = styled.div`
height: 100vh;
width: 100vw;
background-image: url(${background});
color: white;
display: flex;
align-items: center;
justify-content: center;
`


export const DivAreaPerfil = styled.div`
height: 80vh;
width: 30vw;
background-color: #171717;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 20px;
position: relative;
`


export const DivImagePerfil = styled.div`
height: 100px;
width: 100px;
background-image: url(${(props) => props.imgUrl});
background-repeat: no-repeat;
background-size: cover;
display: flex;
border-radius: 20px;
margin-top: 10%;
`


export const Form = styled.form`
height: 40%;
width: 80%;
background-color: transparent;
display: flex;
align-items: center;
flex-direction: column;
border-radius: 20px;
margin-top: 20px;

`

export const BlocoInput = styled.div`
height: 50%;
width: 90%;
background-color: transparent;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 5px;
`







export const Divgroup = styled.div`
width: 70%;
background-color: transparent;
cursor: pointer;
display: flex;
align-items: center;
position: relative;

`

export const TextReference = styled.span`
color: #0090C3;
font-size: 12px;
font-weight: bold;
font-family: 'Montserrat', sans-serif;
text-decoration: underline;
transition: all 1s linear;
`
















export const DivReplace = styled.div`
background-color: whitesmoke;
height:40px;
width: 70%;
border-radius: 40px;
overflow: hidden;
cursor: pointer;
margin-top: 10%;
`

export const ButtonCad = styled.button`
height: 100%;
width: 50%;
color: blue;
background-color: ${props => props.backgrounColorOne};
border-radius: 40px;
color: ${props => props.backgrounColorOne === '#FCA311' ? 'whitesmoke' : 'black'};;
font-weight: 100;
font-size: 18px;
cursor: pointer;
`


export const ButtonLog = styled.button`
height: 100%;
width: 50%;
background-color: ${props => props.backgrounColorTwo};
border-radius: 40px;
color: ${props => props.backgrounColorTwo === 'whitesmoke' ? 'black' : "whitesmoke"};
font-weight: 100;
font-size: 18px;
cursor: pointer;

&:hover{
transition: all 0.6s linear;
background-color: #E69410;

}

`














export const ButtonExit = styled.button`
height: 40px;
width: 13%;
background-color: #FCA311;
font-size: 18px;
color: whitesmoke;
border-radius: 40px;
position: absolute;
bottom: 5%;
right: 2%;
cursor: pointer;

&:hover{
transition: all 0.6s linear;
background-color: #E69410;

}

`







export const DivConfirmacao = styled.div`
height: 40%;
width: 30%;
background-color: #171717;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: absolute;
border-radius: 20px;

`



export const TextConfirm = styled.p`
font-size: 25px;
`

export const BlockConfirm = styled.div`
height: 20%;
width: 80%;
background-color: transparent;
display: flex;
align-items: center;
justify-content: space-around;
font-size: 18px;
margin-top: 40px;
`


export const Buttom = styled.button`
height: 100%;
width: 35%;
font-size: 18px;
background-color:${(props) => props.backcolor};
color:${(props) => props.textcolor} ;
border-radius: 50px;
cursor: pointer;


&:hover{
transition: all 0.6s linear;
background-color:${(props) => props.colorhover} ;

}

`
