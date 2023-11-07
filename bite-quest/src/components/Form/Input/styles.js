import styled from "styled-components";



export const Containinput = styled.div`
color: white;
font: 1.3rem;
background-color: transparent;
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
width: 80%;
margin-top: 20px;



`

export const Labelform = styled.label`
color: white;
font-size: 1.3rem;
`

export const Inputform = styled.input`
width: 100%;
border:none;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
outline: none;
border-bottom: solid 1px whitesmoke;
color: whitesmoke;
height: 40px;
background-color: transparent;
font-size: 16px;

  &:focus {
    background-color: #242020;
    transition: all 2s linear;

  }


`