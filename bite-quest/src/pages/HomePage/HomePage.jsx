import * as S from "./styles"


import LogoBlack from "../../assets/LogoBlack.png"
import ButtonForm from "../../components/Form/buttons/ButtonForm/ButtonForm"
import CardRestaurant from "../../components/CardRestaurant/cardRestaurant"
import CardParticipante from "../../components/CardParticipantes/cardParticipante"
import SiSenor from "../../assets/siSenor.jpg"
import Aguzzo from "../../assets/aguzzo.webp"
import komeMoema from "../../assets/komeMoema.webp"
import CocoBambu from "../../assets/cocoBambu.jpeg"
import promocao from "../../assets/promocao.png"
import descricaoPromotional from "../../assets/descricaoPromotional.png"
import instagram from "../../assets/instagram.png"
import twitter from "../../assets/twitter.png"
import facebook from "../../assets/facebook.png"

import samuel from '../../assets/Participantes/samuel.png'
import pavanelli from '../../assets/Participantes/pavanelli.png'
import lucas from '../../assets/Participantes/lucas.png'
import vitor from '../../assets/Participantes/vitor.png'
import vitoria from '../../assets/Participantes/vitoria.png'
import dennys from '../../assets/Participantes/dennys.png'
import { useNavigate } from 'react-router'

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
              <ButtonForm height="5.5vh" width="10vw" text="Entrar" textColor="black" backgroundColor="white" fontSize="1.6rem" onClick={() => navigate('/Login')} />
            </li>
            <li>
              <ButtonForm height="5.5vh" width="10vw" text="Cadastre-se" textColor="whitesmoke" backgroundColor="#FCA311" fontSize="1.6rem" onClick={() => navigate('/Cadastro')} />
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
          <S.PhirstP>Escolha seu favorito e cadastre-se para ter acesso a outras opções mais próximas de você.</S.PhirstP>

        </S.BoxRecommendations>

        <S.RestaurantRecomendations>

          <CardRestaurant height="95%" width="70%" imgUrl={SiSenor} fontSizeName="1.3rem" fontSizeAddress="1.1rem" name="si señor" address="São Paulo - Moema" colorCircle1="orange" colorCircle2="orange" colorCircle3="orange" colorCircle4="orange" colorCircle5="grey" />

          <CardRestaurant height="95%" width="70%" imgUrl={Aguzzo} fontSizeName="1.3rem" fontSizeAddress="1.1rem" name="Aguzzo Cucina Italiana" address="São Paulo - Moema" colorCircle1="orange" colorCircle2="orange" colorCircle3="orange" colorCircle4="orange" colorCircle5="grey" />

          <CardRestaurant height="95%" width="70%" imgUrl={komeMoema} fontSizeName="1.3rem" fontSizeAddress="1.1rem" name="Kome Moema" address="São Paulo - Moema" colorCircle1="orange" colorCircle2="orange" colorCircle3="orange" colorCircle4="orange" colorCircle5="grey" />

          <CardRestaurant height="95%" width="70%" imgUrl={CocoBambu} fontSizeName="1.3rem" fontSizeAddress="1.1rem" name="Coco Bambu" address="São Paulo - Moema" colorCircle1="orange" colorCircle2="orange" colorCircle3="orange" colorCircle4="orange" colorCircle5="grey" />

        </S.RestaurantRecomendations>


      </S.Recommendations>


      <S.sectionPromotional>

        <S.sectionPromotionalcontainer>

          <S.imagesTextPromotional src={descricaoPromotional} alt="imagem contendo descrição da promoção" />
          <S.imgpromocional src={promocao} alt="imagem promocional" />

        </S.sectionPromotionalcontainer>


      </S.sectionPromotional>

      <S.sectionParticipants>
        <S.divParticipantsdesc>
          <S.descPart>
            Bem-vindo ao BiteQuest, onde a busca pelo sabor ganha vida! Somos uma equipe apaixonada por sabores e aventuras culinárias, determinados a ajudá-lo a encontrar os melhores restaurantes da região.<br></br><br></br>
            Nossa missão é simples: conectar você com experiências gastronômicas excepcionais. Combinamos paixão pela comida com a emoção da exploração, tudo em um único lugar.
          </S.descPart>

        </S.divParticipantsdesc>


        <S.divParticipantsimg>
          <CardParticipante imgUrl={vitoria} />
          <CardParticipante imgUrl={pavanelli} />
          <CardParticipante imgUrl={lucas} />
          <CardParticipante imgUrl={vitor} />
          <CardParticipante imgUrl={samuel} />
          <CardParticipante imgUrl={dennys} />

        </S.divParticipantsimg>

      </S.sectionParticipants>


      <S.sectionFooter>

        <S.divFootercenter>
          <S.textFooter>© 2023 BtieQuest. Todos os direitos</S.textFooter>
          <S.textFooter>suporte@bitequest.com</S.textFooter>
          <S.infosdesc>
            <S.li><linkTag href="#">Política de privacidade</linkTag></S.li>
            <S.li>cnpj: 88.343.309/0001-25</S.li>
            <S.li><linkTag href="#">Termos de uso</linkTag></S.li>
          </S.infosdesc>


          <S.infosdescimg>
            <S.li><linkTag href="#"><S.descimg src={instagram} alt="" /></linkTag></S.li>
            <S.li><linkTag href="#"><S.descimg src={facebook} alt="" /></linkTag></S.li>
            <S.li><linkTag href="#"><S.descimg src={twitter} alt="" /></linkTag></S.li>
          </S.infosdescimg>

        </S.divFootercenter>

      </S.sectionFooter>

    </>
  )

}

export default HomePage