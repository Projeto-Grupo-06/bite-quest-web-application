import React from 'react'
import * as S from "./styles"

import userPadrao from "../../assets/userPadrao.jpg"

function cardComentarios(props) {
  return (
    <>

       <S.containerComentario>
         <S.headerComentario>
           <S.headerImageComentario imgUrl={userPadrao}></S.headerImageComentario>
            <S.headerTextComentario>
             <S.nameUserTextComentario >{props.nameUser}</S.nameUserTextComentario>
             <S.dateUserTextComentario>{props.dateText}</S.dateUserTextComentario>
            </S.headerTextComentario>
         </S.headerComentario>
            <S.textComentario >
               {props.text}
            </S.textComentario>
       </S.containerComentario>



    </>
  )
}

export default cardComentarios