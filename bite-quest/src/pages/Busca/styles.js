import styled from 'styled-components';

export const Nav = styled.nav`
height: 10vh;
background-color: black;
display: flex;
align-items: center;
justify-content: space-between;
`

export const Img = styled.img`
  margin-left: 66px;
  height: 90%;
`

export const BoxInput = styled.nav`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 36px;
  margin-bottom: 50px;
`

export const Teste = styled.div`
  width: 100%;
    min-height: 100vh;
    margin: auto;
    background-color: tomato;
    display: flex;
    justify-content: flex-start;
    background-color: #0c0c27;
    flex-direction: column;
    align-items: center;
`

export const BoxRestaurante = styled.div`
  padding-top: 25px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  justify-items: center;
  width: 70%;
  margin-bottom: 50px; /* Adiciona um espaço entre o BoxRestaurante e o fundo */
  max-width: 1080px; /* Define uma largura máxima para manter o tamanho do conteúdo */
`;


export const CardWrapper = styled.div`
  flex-basis: calc(33.33% - 20px); /* Ajusta o tamanho dos restaurantes para a largura do BoxRestaurante */
  margin-bottom: 20px;
`;
