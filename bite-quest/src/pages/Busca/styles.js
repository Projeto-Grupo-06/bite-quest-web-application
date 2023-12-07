import styled from 'styled-components';
import veg from "../../assets/veg.jpg"


export const Nav = styled.nav`
height: 10vh;
width: 100vw;
background-color: black;
display: flex;
align-items: center;
justify-content: space-between;
position: fixed;
top: 0%;
z-index: 10;
`

export const ImgPerfil = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: white;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover; 
  margin-right: 20px;
  cursor: pointer;

`;

export const Img = styled.img`
  margin-left: 66px;
  height: 90%;
  cursor: pointer;
`

export const BoxInput = styled.nav`
  width: 35%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 36px;
  margin-bottom: 50px;
  background-color:rgb(233, 233, 233);
  border-radius: 50px;
    z-index: 2;
    overflow: hidden;
    padding-right: 5px;



  &:hover{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 36px;
  margin-bottom: 50px;
  border-radius: 50px;

  }
`

  




export const Teste = styled.div`
  width: 100%;
    min-height: 100vh;
    margin-top: 10vh;
    background-image: url(${veg});
    background-repeat: no-repeat;
    background-size: cover; 
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    position: relative;
`

export const blur = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
  backdrop-filter: brightness(0.5) blur(2px);    
  z-index: 2;

  
`;




export const BoxRestaurante = styled.div`
  padding-top: 25px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  justify-items: center;
  width: 70%;
  margin-bottom: 50px; /* Adiciona um espaço entre o BoxRestaurante e o fundo */
  max-width: 1080px; /* Define uma largura máxima para manter o tamanho do conteúdo */
  z-index: 2;
`;


export const CardWrapper = styled.div`
  flex-basis: calc(33.33% - 20px); /* Ajusta o tamanho dos restaurantes para a largura do BoxRestaurante */
  margin-bottom: 20px;
    z-index: 2;

`;
