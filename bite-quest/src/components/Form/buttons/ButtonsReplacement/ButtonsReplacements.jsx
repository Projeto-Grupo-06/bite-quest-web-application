import React from 'react'
import * as S from "./styles"

function ButtonsReplacements(props) {
  return (
    <>
    
<S.DivReplace>

    <S.ButtonCad backgrounColorOne={props.backgrounColorOne}>{props.textone}</S.ButtonCad>
    <S.ButtonLog backgrounColorTwo={props.backgrounColorTwo}>{props.textTwo}</S.ButtonLog>

</S.DivReplace>



  
  
    </>
  )
}

export default ButtonsReplacements