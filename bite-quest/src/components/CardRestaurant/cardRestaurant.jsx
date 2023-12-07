import React from 'react'
import * as S from "./styles"

function cardRestaurant(props) {
  return (
    <>
      <S.Wrapper
        height={props.height}
        width={props.width}
        margin={props.margin}
      >
        <S.ImgRestaurant imgUrl={props.imgUrl} />
        <S.TextRestaurant>
          <S.Name fontSizeName={props.fontSizeName}>{props.name}</S.Name>
          <S.Address fontSizeAddress={props.fontSizeAddress}>{props.address} - {props.bairro}</S.Address>
          <S.Assessment>
            <S.Circle colorCircle={props.colorCircle1} />
            <S.Circle colorCircle={props.colorCircle2} />
            <S.Circle colorCircle={props.colorCircle3} />
            <S.Circle colorCircle={props.colorCircle4} />
            <S.Circle colorCircle={props.colorCircle5} />
          </S.Assessment>
        </S.TextRestaurant>
      </S.Wrapper>
    </>
  )
}

export default cardRestaurant