import styled from "styled-components";
import BannerBiteQuest from "../../assets/Bitequest-banner.png"
import ImgRecommendations from "../../assets/recomendacoes.png"
import texturaPromotional from "../../assets/texturaPromotional.png"
import backgroundParticipantes from "../../assets/backgroundparticipantes.png"
import backgroundfooter from "../../assets/backgroundfooter.png"

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
justify-content: space-evenly;
`
export const BoxRecommendations = styled.div`
    height: 65%;
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`

export const Title = styled.h1`
color: white;
text-decoration: underline;
font-size: 5rem;
font-weight: 100;
`

export const PhirstP = styled.div`
color: white;
font-size: 2rem;
width: 70%;
`

export const RestaurantRecomendations = styled.div`
height: 80%;
    width: 45%;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    align-items: center;
    justify-items: center;
`




export const sectionPromotional = styled.section`
height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
    background-image: url(${texturaPromotional});
`


export const sectionPromotionalcontainer = styled.div`
    height: 75vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: transparent;
`

export const imagesTextPromotional = styled.img`
width: 40%;
`

export const imgpromocional = styled.img`
height: 100%;
`






export const sectionParticipants = styled.section`
    height: 130vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
    background-image: url(${backgroundParticipantes});
    background-size: cover;
`

export const divParticipantsdesc = styled.div`
    margin-top: 16%;
    height: 60vh;
    width: 100%;
    display: flex;
    align-items: center;
   justify-content: center;
    background-color: transparent;
`

export const descPart = styled.p`
    color: whitesmoke;
    width: 80%;
    font-size: 1.6rem;
    background-color: transparent;
`

export const divParticipantsimg = styled.div`
    margin-top: 16%;
    height: 60vh;
    width: 100%;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    background-color: transparent;
`


export const sectionFooter = styled.footer`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    background-image: url(${backgroundfooter});
    background-size: cover;
`
export const divFootercenter = styled.div`
    margin-top: 5%;
    height: 60vh;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    background-color: transparent;
`

export const textFooter = styled.p`
    color: whitesmoke;
    font-size: 1.4rem;
    margin-top: 6%; 
`
export const infosdesc = styled.ul`
color: whitesmoke;
margin-top: 8%;
width: 76%;
display: flex;
justify-content: space-around;
align-items: center;
list-style: none;
background-color: transparent;
border-bottom: solid 1px whitesmoke;
`

export const linkTag = styled.a`
color: whitesmoke;
width: 100%;
height: 100%;
background-color: transparent;

`

export const infosdescimg = styled.ul`
color: whitesmoke;
margin-top: 4%;
width: 20%;
display: flex;
justify-content: space-evenly;
align-items: center;
list-style: none;
background-color: transparent;
`

export const li = styled.li`

text-align: center;
font-size: 1.4rem;
background-color: transparent;
width: 33%;
`



export const descimg = styled.img`
background-color: transparent;
width: 50%;
cursor: pointer;
`




