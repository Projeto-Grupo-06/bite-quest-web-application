import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: ${props => props.height};
  width: ${props => props.width};
  margin: ${props => props.margin};
  background-color: #1D1E25;
  border-radius: 5%;
`

export const ImgRestaurant = styled.div`
background-image: url(${props => props.imgUrl});
width: 90%;
height: 50%;
border-radius: 5%;
background-repeat: no-repeat;
background-position: center center;
background-size: cover;
`

export const TextRestaurant = styled.div`
width: 90%;
height: 25%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`

export const Name = styled.p`
  font-size: ${props => props.fontSizeName};
  color: #e9e9e9;
`

export const Address = styled.p`
font-size: ${props => props.fontSizeAddress};
color: #e9e9e9;
`

export const Assessment = styled.div`
display: flex;
align-items: center;
width: 50%;
height: 20%;
`

export const Circle = styled.div`
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: ${props => props.colorCircle};
    margin-right: 10px;
`