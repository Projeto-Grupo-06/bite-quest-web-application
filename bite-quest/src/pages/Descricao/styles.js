import styled from "styled-components";



//header
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






//div container 
export const Container = styled.div`
  //DIV GERAL
  margin-top: 10vh;
  height: 110vh;
  width: 100vw;
  background-color: #0b0b0b;
  box-sizing: border-box;
  padding-top: 10px;
  position: relative;
  
`;





export const DivUp = styled.div`
  //DIV DE CIMA
  height: 70vh;
  width: 100vw;
  background-color: #0b0b0b;
  display: flex;
`;


//imagem do restaurante
export const DivImagePrincipal = styled.div`
  //DIV DA IMAGEM
  margin-left: 20px;
  height: 100%;
  width: 70%;
  background-color: #0b0b0b;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const NomeRestaurante = styled.h1`
  margin-top: 10px;
  margin-left: 20px;
  color: whitesmoke;
  font-weight: 100;
`;









//div informações do restaurantes
export const DivInformacoes = styled.div`
  //DIV COM AS INFORMAÇÕES
  height: 100%;
  width: 28.8%;
  background-color: #151515;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;


export const iframe = styled.iframe`
  height: 30%;
  width: 80%;
  border-radius: 8px;
  margin-top: 20px;
`;

export const DivAlinInformations = styled.div`
  height: 60%;
  width: 80%;
  background-color: transparent;
`;



export const TittleDescricao = styled.p`
  margin-top: 18px;
  color: whitesmoke;
  background-color: transparent;
  font-size: 1rem;

`;


export const TextoDescricao = styled.p`
  width: 100%;
  color: whitesmoke;
  background-color: transparent;
  font-size: 0.7em;
  font-family: 'Montserrat', sans-serif;
`;


export const img = styled.img`
  height: 10%;
  cursor: pointer;
`;







































export const DivDown = styled.div`
  //DIV DE BAIXO
  height: 35%;
  width: 100vw;
  background-color: transparent;
  display: flex;
`;





//div comentarios
export const DivComentarios = styled.div`
  margin-top: 15px;
  margin-left: 20px;
  height: 85%;
  width: 68.5%;
  background-color: #151515;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  padding-left: 20px;
`;

export const DivUpComentario = styled.div`
  height: 30%;
  width: 97%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 0.3px #383838;
`;



export const TittleAvaliacao = styled.h3`
  margin-top: 20px;
  height: 100%;
  background-color: transparent;
  display: flex;
  font-size: 25px;
  color: whitesmoke;
  font-weight: 100;
`;

export const BotaoAvaliacao = styled.button`
  height: 60%;
  width: 17%;
  background-color: #fca311;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: whitesmoke;
  font-size: 1.2rem;
  cursor: pointer;
`;




export const DivDownComentario = styled.div`
  margin-top: 10px;
  height: 62%;
  width: 97%;
  background-color: transparent;
  grid-template-columns: 50% 50%; /* Duas colunas de largura automática */
  gap: 20px; /* Espaçamento entre os itens */
  border-radius: 10px;
  overflow-y: auto;
  

  &::-webkit-scrollbar{
    background-color: #242424 ;
    border-radius: 10px;
    width: 8px;


  }



  &::-webkit-scrollbar-thumb{
     background-color: #E09010 ;
     border-radius: 10px;
  }

`;




















//div horarios 
export const DivHorarios = styled.div`
  margin-top: 15px;
  margin-left: 30px;
  height: 85%;
  width: 24%;
  background-color: #151515;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  overflow: hidden;

  
`;


export const TittleHorarios = styled.p`
  margin-top: 20px;
  margin-left: 15px;
  color: whitesmoke;
  background-color: transparent;
  font-size: 25px;
`;

export const DivDownHorarios = styled.div`
  height: 70%;
  width: 90%;
  background-color: transparent;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  overflow: hidden;

`;





















//avaliação

export const DivBlurAvaliacao = styled.div`
  position: fixed;
  top: 10vh;

  height: 90vh;
  width: 100%;
  background-color: transparent;
  backdrop-filter: blur(3px);
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

`;


export const DivAvaliacao = styled.div`
  height: 50%;
  width: 35%;
  background-color: #383838;
  border-radius: 10px;
  box-shadow: 0px 0px 50px 10px black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const DivUpAvaliacao = styled.div`
  height: 30%;
  width: 100%;
  border-bottom: solid 1px whitesmoke;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TittleDivUpAvaliacao = styled.p`
color: whitesmoke;
margin-top: 5px;
font-size:20px ;
background-color: transparent;
`;


export const DivUpAvaliacaoContainer = styled.div`
background-color: transparent;
height: 80%;
width: 80%;
`;

export const DivContainerBollAvaliacao = styled.div`
background-color: transparent;
height:50%;
width: 80%;
`;


export const Estrelas = styled.img`
width: 80%;
`;








export const ImgExitAvaliacao = styled.img`
  
  width: 5%;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  
`


export const DivDownAvaliacao = styled.form` 
  box-sizing: border-box;
  height: 70%;
  width: 80%;
  background-color: #383838;
  display: flex;
  flex-direction: column;
  align-items: start;
`;


export const TittleDivDownAvaliacao = styled.p`
color: whitesmoke;
margin-top: 20px;
font-size:20px ;
background-color: transparent;
`;




export const ButtonAvaliacao = styled.button`
  margin:  auto;
  height: 20%;
  width: 50%;
  background-color: #fca311;
  border-radius: 10px;
  color: #14213D;
  font-size:1.6rem ;
  cursor: pointer;
  
  
`;







