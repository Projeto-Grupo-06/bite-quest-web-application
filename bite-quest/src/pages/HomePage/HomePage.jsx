/* eslint-disable no-irregular-whitespace */
import * as S from "./styles"
import LogoBlack from "../../assets/LogoBlack.png"
import ButtonForm from "../../components/Form/buttons/ButtonForm/ButtonForm"

function HomePage() {
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
        <S.TextRecommendations>
          <S.Title>Recomendações</S.Title>
          <S.PhirstP>
            Nossa equipe separou alguns dos melhores restaurantes baseados em recomendações, avaliações e sugestões dos clientes!
          </S.PhirstP>
          <S.SecondP>
           Escolha seu favorito e cadastre-se para ter acesso a outras opções mais próximas de você.
          </S.SecondP>
        </S.TextRecommendations>
        <S.RestaurantRecomendations>

        </S.RestaurantRecomendations>
      </S.Recommendations>
    </>
  )
}

export default HomePage