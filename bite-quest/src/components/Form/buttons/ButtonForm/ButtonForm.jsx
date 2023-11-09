import React from 'react'
import * as S from './styles'

function ButtonForm(props) {


  return (
    <>
      <S.Buttonformsubmit
        onClick={props.onClick}
        height={props.height}
        width={props.width}
        colorDoText={props.colorDoText}
        fundoColor={props.fundoColor}
         marginTop={props.marginTop}
        fontSize={props.fontSize}
      >

        {props.text}
      </S.Buttonformsubmit>

    </>
  )
}

export default ButtonForm