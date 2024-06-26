import * as S from "./styles"
import { useNavigate } from 'react-router-dom'

function ButtonsReplacements(props) {

  const navigate = useNavigate();

  return (
    <>

      <S.DivReplace>

        <S.ButtonCad type='button' onClick={() => navigate(props.caminho)} backgrounColorOne={props.backgrounColorOne}>{props.textone}</S.ButtonCad>
        <S.ButtonLog type='button' onClick={() => navigate(props.caminhodois)} backgrounColorTwo={props.backgrounColorTwo}>{props.textTwo}</S.ButtonLog>

      </S.DivReplace>





    </>
  )
}

export default ButtonsReplacements