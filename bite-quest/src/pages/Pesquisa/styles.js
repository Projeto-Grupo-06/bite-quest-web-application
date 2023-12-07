import styled from "styled-components";
import fundo from "../../assets/fundoPesquisa.png"

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box; /* Amassa os elementos para dentro */
  top: 0;
  height: 10vh;
  width: 100vw;
  font-size: 1.6rem;
  padding: 0 30px;
  background-color: black;
  color: white;
  position: fixed;
  z-index: 5;
`;

export const Img = styled.img`
  height: 90%;
  cursor: pointer;
`;



export const ImgPerfil = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: white;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover; 
  cursor: pointer;

`;


export const Container = styled.div`
height: 1400px;
width: 100vw;
background-image: url(${fundo});
background-repeat: no-repeat;
background-size: cover;
filter: brightness(70%);
display: flex;
flex-direction:column ;
align-items: center;
`

export const DivGroupUp = styled.div`
margin-top: 10vh;
height: 15%;
width: 100vw;
background-color: transparent;
color: white;
display: flex;
flex-direction:column ;
align-items: center;
justify-content: space-around;
`


export const DivPesquisa = styled.div`
height: 50px;
width: 40vw;
background-color: grey;
display: flex;

`


export const DivFiltros = styled.div`
height: 50px;
width: 60vw;
background-color: transparent;
display: flex;
align-items: center;
justify-content: space-between;

`

export const ButtonFiltros = styled.button`
height: 100%;
width: 20%;
background-color: #161616;
display: flex;
align-items: center;
justify-content: space-around;
border-radius: 10px;
cursor: pointer;
`


export const TextFiltro = styled.p`
color: whitesmoke;
font-size:24px ;
`

export const ImgFiltro = styled.img`
height:70% ;
`






































export const DivGroupContainerDown = styled.div`
height: 80%;
width: 95vw;
background-color: yellow;
display: flex;

`
