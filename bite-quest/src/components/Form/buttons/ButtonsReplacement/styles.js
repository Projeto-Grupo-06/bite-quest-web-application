import styled from "styled-components";


export const DivReplace = styled.div`
background-color: whitesmoke;
height:40px;
width: 80%;
border-radius: 40px;
overflow: hidden;
cursor: pointer;
margin-bottom: 10%;
`


export const ButtonCad = styled.button`
height: 100%;
width: 50%;
color: blue;
background-color: ${props => props.backgrounColorOne};
border-radius: 40px;
color: ${props => props.backgrounColorOne === '#FCA311' ? 'whitesmoke' : 'black'};;
font-weight: bold;
font-size: 18px;
cursor: pointer;

  &:hover {
    font-size: 19px;
        transition: all 1s linear;

  }

`


export const ButtonLog = styled.button`
height: 100%;
width: 50%;
background-color: ${props => props.backgrounColorTwo};
border-radius: 40px;
color: ${props => props.backgrounColorTwo === 'whitesmoke' ? 'black' : "whitesmoke"};
font-weight: bold;
font-size: 18px;
cursor: pointer;

  &:hover {
    font-size: 19px;
     transition: all 1s linear;

  }


`

