import React from 'react'
import * as S from "./styles"
import "./styles.css"

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import StarRating from '../../components/Avaliacoes/avaliacoes';


import Restaurante from "../../assets/Restaurante.png"
import LogoBlack from "../../assets/LogoBlack.png"
import iconDownload from "../../assets/iconDownload.png"
import sair from "../../assets/x.png"


import HorariosRestaurante from '../../components/HorariosRestaurantes/HorariosRestaurante'
import CardComentarios from '../../components/CardComentarios/cardComentarios'
import userPadrao from "../../assets/userPadrao.jpg"


function Descricao() {
  const navigate = useNavigate();
  const [exibirDivBlur, setExibirDivBlur] = useState(false);

  //abrir a tela de avaliação
  const mostrarDivBlur = () => {
    setExibirDivBlur(true);
  };

  const esconderDivBlur = () => {
    setExibirDivBlur(false);
  };

  //avaliações componentde estrelas

  const initialValueFromDatabase = 3; // Supondo que o valor venha do banco de dados

  const handleRatingChange = (value) => {
    console.log(value);
    // Faça o que for necessário com a nova avaliação
  };


  return (
    <>


      <S.NavBar>
        <S.Img onClick={() => navigate('/')} src={LogoBlack} alt="Logo Black" />
        <S.ImgPerfil onClick={() => navigate("/Perfil")} imgUrl={userPadrao}></S.ImgPerfil>
      </S.NavBar>
      <S.Container>
        <S.DivUp>

          <S.DivImagePrincipal imgUrl={Restaurante} >
            <S.NomeRestaurante>{"restaurante"}</S.NomeRestaurante>
          </S.DivImagePrincipal>

          <S.DivInformacoes>

            <S.iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.380519662609!2d-46.64323442533835!3d-23.66234636530869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5ad2f2b78c05%3A0xb61ea425f8fd04f9!2sAv.%20Muzambinho%20-%20Jabaquara%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004334-040%2C%20Brasil!5e0!3m2!1spt-BR!2slt!4v1701127509474!5m2!1spt-BR!2slt"></S.iframe>

            <S.DivAlinInformations>

              <S.TittleDescricao>Descrição</S.TittleDescricao>
              <S.TextoDescricao>Na "Noite de Sabores Culturais", convidamos você a embarcar em uma jornada gastronômica emocionante, explorando pratos autênticos cuidadosamente selecionados de diferentes partes do mundo.</S.TextoDescricao>

              <S.TittleDescricao>Região </S.TittleDescricao>
              <S.TextoDescricao>Avenida Muzambinho - Jabaquara, São Paulo - State of São Paulo</S.TextoDescricao>

              <S.TittleDescricao>Faixa de Preço</S.TittleDescricao>
              <S.TextoDescricao>R$ 70 - R$ 120</S.TextoDescricao>

              <S.TittleDescricao>MENU</S.TittleDescricao>
              <S.img src={iconDownload}></S.img>



            </S.DivAlinInformations>


          </S.DivInformacoes>

        </S.DivUp>




        <S.DivDown>

          <S.DivComentarios>


            <S.DivUpComentario>


              <S.TittleAvaliacao>AVALIAÇÕES</S.TittleAvaliacao>
              <S.BotaoAvaliacao onClick={mostrarDivBlur}>FAÇA UMA AVALIAÇÃO</S.BotaoAvaliacao>


            </S.DivUpComentario>

            <S.DivDownComentario>

              <CardComentarios nameUser={"samuel bryan"} dateText={"abril - 2023"} text={"salve esse restaurante ai é muito boms mesm. show de bola, recomendo!!!!"}>
              </CardComentarios>


            </S.DivDownComentario>
          </S.DivComentarios>




          <S.DivHorarios>

            <S.TittleHorarios>Horarios</S.TittleHorarios>
            <S.DivDownHorarios>

              <HorariosRestaurante textday={'segunda-feira'} texthrs={'11:30 - 15:30, 18:00 - 00:00'}></HorariosRestaurante>
              <HorariosRestaurante textday={'terça-feira'} texthrs={'11:30 - 00:00'}></HorariosRestaurante>
              <HorariosRestaurante textday={'quarta-feira'} texthrs={'11:30 - 23:30'}></HorariosRestaurante>
              <HorariosRestaurante textday={'quinta-feira'} texthrs={'11:30 - 15:00, 18:00 - 23:00'}></HorariosRestaurante>
              <HorariosRestaurante textday={'sexta-feira'} texthrs={'11:30 - 15:00, 18:00 - 23:00'}></HorariosRestaurante>
              <HorariosRestaurante textday={'sabado'} texthrs={'11:30 - 15:00, 18:00 - 23:00'}></HorariosRestaurante>
              <HorariosRestaurante textday={'domingo'} texthrs={'11:30 - 15:00, 18:00 - 23:00'}></HorariosRestaurante>

            </S.DivDownHorarios>
          </S.DivHorarios>


        </S.DivDown>











      </S.Container>



      <S.DivBlurAvaliacao style={{ display: exibirDivBlur ? 'flex' : 'none' }}>

        <S.DivAvaliacao>

          <S.DivUpAvaliacao>
            <S.DivUpAvaliacaoContainer>
              <S.TittleDivUpAvaliacao>avaliação</S.TittleDivUpAvaliacao>
              <S.DivContainerBollAvaliacao>
                <StarRating initialValue={initialValueFromDatabase == null ? 0 : initialValueFromDatabase} onChange={handleRatingChange} readOnly={true} />
              </S.DivContainerBollAvaliacao>
            </S.DivUpAvaliacaoContainer>

            <S.ImgExitAvaliacao onClick={esconderDivBlur} src={sair}></S.ImgExitAvaliacao>
          </S.DivUpAvaliacao>

          <S.DivDownAvaliacao>
            <S.TittleDivDownAvaliacao>Adicionar comentário</S.TittleDivDownAvaliacao>
            <textarea className='textAvaliacao' name="" id="" cols="30" rows="10"></textarea>
            <S.ButtonAvaliacao type='submit' >publicar</S.ButtonAvaliacao>

          </S.DivDownAvaliacao>

        </S.DivAvaliacao>



      </S.DivBlurAvaliacao>






    </>
  )
}

export default Descricao