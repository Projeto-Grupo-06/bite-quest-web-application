import React from 'react'
import * as S from "./styles"

function horariosRestaurante(props) {

  return (
    <>
      <S.DivContainerHorarios>
       <S.Day>{props.textday}</S.Day>

       <S.DivHrs>
       <S.Hrs>{props.texthrs}</S.Hrs>
       </S.DivHrs>
      
      </S.DivContainerHorarios>


    </>
  )
}

export default horariosRestaurante

