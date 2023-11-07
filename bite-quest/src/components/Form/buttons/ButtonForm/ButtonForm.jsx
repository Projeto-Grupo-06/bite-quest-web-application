import React from 'react'
import * as S from './styles'

function ButtonForm(props) {


  return (
    <>
      <S.Buttonformsubmit
        height={props.height}
        width={props.width}
        textColor={props.textColor}
        backgroundColor={props.backgroundColor}
        fontSize={props.fontSize}
      >
        {props.text}
      </S.Buttonformsubmit>

    </>
  )
}

export default ButtonForm