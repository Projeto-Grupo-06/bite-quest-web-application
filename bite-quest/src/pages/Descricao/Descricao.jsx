import React, { useEffect } from "react";
import * as S from "./styles";
import "./styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import StarRating from "../../components/Avaliacoes/avaliacoes";
import Restaurante from "../../assets/Restaurante.png";
import LogoBlack from "../../assets/LogoBlack.png";
import iconDownload from "../../assets/iconDownload.png";
import sair from "../../assets/x.png";
import HorariosRestaurante from "../../components/HorariosRestaurantes/HorariosRestaurante";
import CardComentarios from "../../components/CardComentarios/cardComentarios";
import userPadrao from "../../assets/user.png";
import api from "../../api";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Descricao() {
  const navigate = useNavigate();
  const [exibirDivBlur, setExibirDivBlur] = useState(false);
  const { id } = useParams();
  const [restaurante, setRestaurante] = useState(null);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [comments, setComments] = useState([]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchRestauranteById = () => {
      api
        .get(`/restaurantes/${id}`)
        .then((response) => {
          console.log(response.data);
          setRestaurante(response.data);
          setLoading(false);
          const usuario = JSON.parse(localStorage.getItem("usuario"))
          setUserName(usuario.nome)
        })
        .catch((error) => {
          console.error("Erro ao buscar restaurante:", error);
        });
    };

    fetchRestauranteById();
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }
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

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const displayMessage = (event) => {
    event.preventDefault();
    setComments([...comments, inputValue]);
    setInputValue("");
    esconderDivBlur();
  };

  return (
    <>
      <S.NavBar>
        <S.Img onClick={() => navigate("/")} src={LogoBlack} alt="Logo Black" />
        <S.ImgPerfil
          onClick={() => navigate(`/Perfil/${id}`)}
          imgUrl={userPadrao}
        ></S.ImgPerfil>
      </S.NavBar>
      <S.Container>
        <S.DivUp>
          <S.DivImagePrincipal imgUrl={Restaurante}>
            <S.NomeRestaurante>{restaurante.nome}</S.NomeRestaurante>
          </S.DivImagePrincipal>

          <S.DivInformacoes>
  <S.iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.3803817482803!2d-46.6406595!3d-23.662351299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5ad2f2b78c05%3A0xb61ea425f8fd04f9!2sAv.%20Muzambinho%20-%20Jabaquara%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004334-040!5e0!3m2!1spt-BR!2sbr!4v1701970809759!5m2!1spt-BR!2sbr"></S.iframe>

  <S.DivAlinInformations>
    <S.TittleDescricao>Descrição</S.TittleDescricao>
    <S.TextoDescricao>{restaurante.descricao}</S.TextoDescricao>

    <S.TittleDescricao>Região </S.TittleDescricao>
    <S.TextoDescricao>{restaurante.endereco}</S.TextoDescricao>

    <S.TittleDescricao>Faixa de Preço</S.TittleDescricao>
    <S.TextoDescricao>R$ 70 - R$ 120</S.TextoDescricao>

    <S.TittleDescricao>MENU</S.TittleDescricao>
    <S.img src={iconDownload}></S.img>

    <a href={`https://www.instagram.com/komemoema`}>
  <FaInstagram size={32} />
</a>
<a href={`https://wa.me/11986167005`}>
  <FaWhatsapp size={32} />
</a>

  </S.DivAlinInformations>
</S.DivInformacoes>
        </S.DivUp>

        <S.DivDown>
          <S.DivComentarios>
            <S.DivUpComentario>
              <S.TittleAvaliacao>AVALIAÇÕES</S.TittleAvaliacao>
              <S.BotaoAvaliacao onClick={mostrarDivBlur}>
                FAÇA UMA AVALIAÇÃO
              </S.BotaoAvaliacao>
            </S.DivUpComentario>

            <S.DivDownComentario>
              {comments.map((comment, index) => (
                <CardComentarios
                key={index}
                nameUser={userName}
                dateText={new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
                text={comment}
              />
              ))}
            </S.DivDownComentario>
          </S.DivComentarios>

          <S.DivHorarios>
            <S.TittleHorarios>Horarios</S.TittleHorarios>
            <S.DivDownHorarios>
              {Object.entries(restaurante.horariosDeFuncionamento).map(
                ([dia, horario]) => (
                  <HorariosRestaurante
                    key={dia}
                    textday={dia}
                    texthrs={horario}
                  ></HorariosRestaurante>
                )
              )}
            </S.DivDownHorarios>
          </S.DivHorarios>
        </S.DivDown>
      </S.Container>

      <S.DivBlurAvaliacao style={{ display: exibirDivBlur ? "flex" : "none" }}>
        <S.DivAvaliacao>
          <S.DivUpAvaliacao>
            <S.DivUpAvaliacaoContainer>
              <S.TittleDivUpAvaliacao>avaliação</S.TittleDivUpAvaliacao>
              <S.DivContainerBollAvaliacao>
                <StarRating
                  initialValue={
                    initialValueFromDatabase == null
                      ? 0
                      : initialValueFromDatabase
                  }
                  onChange={handleRatingChange}
                  readOnly={true}
                />
              </S.DivContainerBollAvaliacao>
            </S.DivUpAvaliacaoContainer>

            <S.ImgExitAvaliacao
              onClick={esconderDivBlur}
              src={sair}
            ></S.ImgExitAvaliacao>
          </S.DivUpAvaliacao>

          <S.DivDownAvaliacao>
            <S.TittleDivDownAvaliacao>
              Adicionar comentário
            </S.TittleDivDownAvaliacao>
            <textarea
              className="textAvaliacao"
              value={inputValue}
              onChange={handleInputChange}
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <S.ButtonAvaliacao type="submit" onClick={displayMessage}>
              publicar
            </S.ButtonAvaliacao>
          </S.DivDownAvaliacao>
        </S.DivAvaliacao>
      </S.DivBlurAvaliacao>
    </>
  );
}

export default Descricao;
