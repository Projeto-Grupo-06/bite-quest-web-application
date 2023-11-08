/* eslint-disable no-irregular-whitespace */
import * as S from "./styles"
import { useNavigate } from 'react-router-dom';
import LogoBlack from "../../assets/LogoBlack.png"
import ButtonForm from "../../components/Form/buttons/ButtonForm/ButtonForm"

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
              <ButtonForm onClick={() => navigate('/Login')} height="5.5vh" width="10vw" text="Entrar" colorDoText="black" fundoColor="white" marginTop="0px" fontSize="1rem" />
            </li>
            <li>
              <ButtonForm onClick={() => navigate('/Cadastro')} height="5.5vh" width="10vw" text="Cadastre-se" colorDoText="whitesmoke" fundoColor="#FCA311" marginTop="0px" fontSize="1rem" />
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