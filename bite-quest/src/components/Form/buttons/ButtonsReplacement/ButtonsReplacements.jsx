import React from 'react'
import * as S from "./styles"
import { useNavigate } from 'react-router-dom'

function ButtonsReplacements(props) {

    const navigate = useNavigate();

  return (
    <>
    
<S.DivReplace>

    <S.ButtonCad onClick={() => navigate('/Cadastro')} backgrounColorOne={props.backgrounColorOne}>{props.textone}</S.ButtonCad>
    <S.ButtonLog onClick={() => navigate('/Login')} backgrounColorTwo={props.backgrounColorTwo}>{props.textTwo}</S.ButtonLog>

</S.DivReplace>



  
  
    </>
  )
}

export default ButtonsReplacements