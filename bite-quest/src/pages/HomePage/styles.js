import styled from "styled-components";
import BannerBiteQuest from "../../assets/Bitequest-banner.png"
import ImgRecommendations from "../../assets/recomendacoes.png"

export const NavBar = styled.nav`
display: flex;
justify-content: space-around;
align-items: center;
box-sizing: border-box; /* Amassa os elementos para dentro */
top: 0;
height: 10vh;
font-size: 1.6rem;
padding: 0 30px;
background-color: black;
color: white;
`

export const Img = styled.img`
  height: 90%;
`

export const Menu = styled.div`
display: flex;
align-items: center;
color: white;
`

export const MenuUl = styled.ul`
display: flex;
align-items: center;
list-style-type: none;
column-gap: 40px;
text-decoration: underline;
 `

export const Wrapper = styled.div`
 display: flex;
align-items: center;
color: #c1c0a3;
 `

export const WrapperUl = styled.ul`
 display: flex;
list-style-type: none;
column-gap: 40px;
 `

export const Li = styled.li`
 align-items: center;
 `

export const Banner = styled.section`
height: 90vh;
background-color: black;
background-image: url(${BannerBiteQuest});
background-repeat: no-repeat;
background-position: center center;
background-size: cover;
display: flex;
align-items: center;
justify-content: flex-end;
 `

export const Text = styled.div`
height: 50%;
width: 34%;
font-size: 2.6rem;
color: white;
display: flex;
align-items: center;
justify-content: center;
margin-right: 10%;
`
export const Recommendations = styled.section`
height: 100vh;
background-color: black;
background-image: url(${ImgRecommendations});
background-repeat: no-repeat;
background-position: center center;
background-size: cover;
display: flex;
align-items: center;
`
export const TextRecommendations = styled.div`
  height: 80%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.h1`
color: white;
text-decoration: underline;
font-size: 5rem;
font-weight: 100;
`

export const PhirstP = styled.p`
color: white;
font-size: 2rem;
`

export const SecondP = styled.p`
color: white;
font-size: 2rem;
`

export const RestaurantRecomendations = styled.div`
height: 80%;
width: 50%;
display: grid;
grid-template-rows: repeat(2, 1fr);
grid-template-columns: repeat(2, 1fr);
gap: 10px; 
justify-content: center; 
align-content: center; 
`

