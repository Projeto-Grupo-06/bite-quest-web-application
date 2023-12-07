import styled from "styled-components";

export const containerComentario = styled.div` 
  min-width: 40%;
  height: 120px;
  background-color: transparent;
`

export const headerComentario = styled.div` 
  width: 100%;
  height: 50px;
  background-color: transparent;
  display: flex;
`


export const headerImageComentario = styled.div` 
  width: 50px;
  height: 50px;
  background-image: yellow;
  background-image: url(${props => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
`

export const headerTextComentario = styled.div` 
  width: 80%;
  height: 100%;
  background-color: transparent;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const nameUserTextComentario = styled.p` 
  
  
  background-color: transparent;
  color: whitesmoke;
  font-size: 13px;
`


export const dateUserTextComentario = styled.p` 
  color: #7D7D7D;
  font-size: 13px;
`









export const textComentario = styled.p` 
  margin-top: 10px;
  width: 80%;
  background-color: transparent;
  color: whitesmoke;
  font-size: 13px;
  font-family: 'Montserrat', sans-serif;
`



