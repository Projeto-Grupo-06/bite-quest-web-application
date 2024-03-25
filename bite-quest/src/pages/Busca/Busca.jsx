import CardRestaurant from '../../components/CardRestaurant/cardRestaurant';
import * as S from './styles';
import './styles.css';
import SiSenor from '../../assets/siSenor.jpg'
import LogoBlack from "../../assets/LogoBlack.png"
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userPadrao from "../../assets/user.png"
import lupa from "../../assets/lupa.png"

import Restaurante from "../../assets/Restaurante.png"

import R1 from "../../assets/r1.jpg"
import R2 from "../../assets/r2.jpg"
import R3 from "../../assets/r3.jpg"
import R4 from "../../assets/r4.jpg"
import R5 from "../../assets/r5.jpg"
import R6 from "../../assets/r6.jpg"
import R7 from "../../assets/r7.jpg"
import R8 from "../../assets/r8.jpg"
import R9 from "../../assets/r9.jpg"
import R10 from "../../assets/r10.jpg"
import R11 from "../../assets/r11.jpg"
import R12 from "../../assets/r12.jpg"
import R13 from "../../assets/r13.jpg"
import R14 from "../../assets/r14.jpg"
import api from '../../api';





function Busca() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [restaurantes, setRestaurantes] = useState([]);
  

  useEffect(() => {
    const fetchRestaurantes = () => {
      api.get('/restaurantes')
        .then(response => {
          console.log(response.data); 
          setRestaurantes(response.data);
        })
        .catch(error => {
          console.error('Erro ao buscar restaurantes:', error);
        });
    };
  
    fetchRestaurantes();
  }, []);
  

const imagens = [
  {
    imgUrl: R1,
    colorCircle1: 'orange',
    colorCircle2: 'orange',
    colorCircle3: 'orange',
    colorCircle4: 'orange',
    colorCircle5: 'orange',
  },
  {
    imgUrl: Restaurante,
    colorCircle1: 'orange',
    colorCircle2: 'orange',
    colorCircle3: 'orange',
    colorCircle4: 'orange',
    colorCircle5: 'grey',  },
  {
    imgUrl: R3,
colorCircle1: 'orange',
    colorCircle2: 'orange',
    colorCircle3: 'orange',
    colorCircle4: 'orange',
    colorCircle5: 'grey',  },
  {
    imgUrl: R4,
colorCircle1: 'orange',
    colorCircle2: 'orange',
    colorCircle3: 'orange',
    colorCircle4: 'orange',
    colorCircle5: 'grey',  },
  {
    imgUrl: R5,
colorCircle1: 'orange',
    colorCircle2: 'orange',
    colorCircle3: 'orange',
    colorCircle4: 'grey',
    colorCircle5: 'grey',  },
  {
    imgUrl: R6,
colorCircle1: 'orange',
    colorCircle2: 'grey',
    colorCircle3: 'grey',
    colorCircle4: 'grey',
    colorCircle5: 'grey',  },
  {
    imgUrl: R7,
colorCircle1: 'orange',
    colorCircle2: 'orange',
    colorCircle3: 'orange',
    colorCircle4: 'orange',
    colorCircle5: 'grey',  },
  {
    imgUrl: R8,
colorCircle1: 'orange',
    colorCircle2: 'orange',
    colorCircle3: 'orange',
    colorCircle4: 'grey',
    colorCircle5: 'grey',  },
  {

    imgUrl: R9,
colorCircle1: 'orange',
    colorCircle2: 'orange',
    colorCircle3: 'orange',
    colorCircle4: 'orange',
    colorCircle5: 'orange',  },
  {

    imgUrl: R10,
colorCircle1: 'orange',
    colorCircle2: 'orange',
    colorCircle3: 'orange',
    colorCircle4: 'grey',
    colorCircle5: 'grey',  },
  {

    imgUrl: R11,
colorCircle1: 'orange',
    colorCircle2: 'orange',
    colorCircle3: 'orange',
    colorCircle4: 'grey',
    colorCircle5: 'grey',  },
  {

    imgUrl: R12,
colorCircle1: 'orange',
    colorCircle2: 'orange',
    colorCircle3: 'orange',
    colorCircle4: 'grey',
    colorCircle5: 'grey',  },
  {

    imgUrl: R13 ,
colorCircle1: 'orange',
    colorCircle2: 'orange',
    colorCircle3: 'grey',
    colorCircle4: 'grey',
    colorCircle5: 'grey',  },
  {

    imgUrl: R14,
colorCircle1: 'orange',
    colorCircle2: 'grey',
    colorCircle3: 'grey',
    colorCircle4: 'grey',
    colorCircle5: 'grey',  },
];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // for (let index = 0; index < restaurantes.length; index++) {
  //   const element = restaurantes[index];
  //   element.
  // }

  const filteredRestaurantes = restaurantes.filter((restaurante) => {
    const { nome, endereco, bairro } = restaurante;
    const formattedSearchTerm = searchTerm.toLowerCase();
    return (
      nome.toLowerCase().includes(formattedSearchTerm) ||
      endereco.toLowerCase().includes(formattedSearchTerm) ||
      bairro.toLowerCase().includes(formattedSearchTerm) 
    );
  });

  return (
    <>
      <S.Nav>
        <S.Img onClick={() => navigate('/')} src={LogoBlack} />
        <S.ImgPerfil onClick={() => navigate("/Perfil")} imgUrl={userPadrao}></S.ImgPerfil>
      </S.Nav>
      <S.Teste>

      <S.blur> </S.blur>
        <S.BoxInput>
          <input
            placeholder="Pesquisar"
            className="input"
            type="text"
            value={searchTerm}
            onChange={handleSearch}
          />
          <S.Img src={lupa} />
        </S.BoxInput>


        <S.BoxRestaurante>
        {filteredRestaurantes.map((restaurantes, index) => (
        <CardRestaurant
          key={restaurantes.id}
          onClick={() => navigate(`/Descricao/${restaurantes.id}`)} // Aqui você pode passar o ID do restaurantes como parâmetro para a rota
          height="45vh"
          width="84%"
          margin="19px"
          imgUrl={imagens[index % imagens.length].imgUrl}
          fontSizeName="1.3rem"
          fontSizeAddress="1.1rem"
          name={restaurantes.nome}  
          address={restaurantes.endereco}
          colorCircle1={imagens[index % imagens.length].colorCircle1} 
          colorCircle2={imagens[index % imagens.length].colorCircle2} 
          colorCircle3={imagens[index % imagens.length].colorCircle3} 
          colorCircle4={imagens[index % imagens.length].colorCircle4} 
          colorCircle5={imagens[index % imagens.length].colorCircle5}
        />
      ))}
        </S.BoxRestaurante>
       
      </S.Teste>
    </>
  )
}

export default Busca