import React from 'react'
import * as S from './styles'

function ButtonForm({ colorDoText, fundoColor, marginTop, fontSize, ...props }) {
  return (
    <>
      <S.Buttonformsubmit
        colorDoText={colorDoText}
        fundoColor={fundoColor}
        marginTop={marginTop}
        fontSize={fontSize}
        {...props}
      >
        {props.text}
      </S.Buttonformsubmit>
    </>
  )
}

export default ButtonForm