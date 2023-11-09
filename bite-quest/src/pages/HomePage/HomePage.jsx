/* eslint-disable no-irregular-whitespace */
import * as S from "./styles"
import LogoBlack from "../../assets/LogoBlack.png"
import ButtonForm from "../../components/Form/buttons/ButtonForm/ButtonForm"
import CardRestaurant from "../../components/CardRestaurant/cardRestaurant"
import SiSenor from "../../assets/siSenor.jpg"
import Aguzzo from "../../assets/aguzzo.webp"
import komeMoema from "../../assets/komeMoema.webp"
import CocoBambu from "../../assets/cocoBambu.jpeg"
import { useNavigate } from "react-router"

function HomePage() {
  const navigate = useNavigate();


  return (
    <>
      <S.NavBar>
        <S.Img src={LogoBlack} alt="Logo Black" />
        <S.Menu>
          <S.MenuUl>
            <li>Recomendações</li>
            <li>Sobre</li>
            <li>Novidades</li>
          </S.MenuUl>
        </S.Menu>

        <S.Wrapper>
          <S.WrapperUl>
            <li>
              <ButtonForm height="5.5vh" width="10vw" text="Entrar" textColor="black" backgroundColor="white" fontSize="1.6rem" />
            </li>
            <li>
              <ButtonForm height="5.5vh" width="10vw" text="Cadastre-se" textColor="whitesmoke" backgroundColor="#FCA311" fontSize="1.6rem" />
            </li>
          </S.WrapperUl>
        </S.Wrapper>
      </S.NavBar>
      <S.Banner>
        <S.Text>
          BiteQuest é ideal para apaixonados por gastronomias diversas, ajudando a encontrar seu novo restaurante favorito mais próximo de você.
        </S.Text>
      </S.Banner>

      <S.Recommendations>
        <S.BoxRecommendations>
          <S.Title>Recomendações</S.Title>
          <S.PhirstP>
            Nossa equipe separou alguns dos melhores restaurantes baseados em recomendações, avaliações e sugestões dos clientes!
          </S.PhirstP>
          <S.PhirstP>
        Escolha seu favorito e cadastre-se para ter acesso a outras opções mais próximas de você.
            </S.PhirstP>
            <ButtonForm onClick={() => navigate('/Cadastro')} height="11%" width="30%" text="Cadastrar" textColor="whitesmoke" backgroundColor="#FCA311" fontSize="1.7rem" />
          </S.BoxRecommendations>
          <S.RestaurantRecomendations>
        <CardRestaurant height="95%" width="70%" imgUrl={SiSenor} fontSizeName="1.3rem" fontSizeAddress="1.1rem" name="si señor" address="São Paulo - Moema" colorCircle1="orange" colorCircle2="orange" colorCircle3="orange" colorCircle4="orange" colorCircle5="grey" />

        <CardRestaurant height="95%" width="70%" imgUrl={Aguzzo} fontSizeName="1.3rem" fontSizeAddress="1.1rem" name="Aguzzo Cucina Italiana" address="São Paulo - Moema" colorCircle1="orange" colorCircle2="orange" colorCircle3="orange" colorCircle4="orange" colorCircle5="grey" />

        <CardRestaurant height="95%" width="70%" imgUrl={komeMoema} fontSizeName="1.3rem" fontSizeAddress="1.1rem" name="Kome Moema" address="São Paulo - Moema" colorCircle1="orange" colorCircle2="orange" colorCircle3="orange" colorCircle4="orange" colorCircle5="grey" />

        <CardRestaurant height="95%" width="70%" imgUrl={CocoBambu} fontSizeName="1.3rem" fontSizeAddress="1.1rem" name="Coco Bambu" address="São Paulo - Moema" colorCircle1="orange" colorCircle2="orange" colorCircle3="orange" colorCircle4="orange" colorCircle5="grey" />
      </S.RestaurantRecomendations>
      </S.Recommendations >
          </> 
          )
}

export default HomePage