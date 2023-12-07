import CardRestaurant from '../../components/CardRestaurant/cardRestaurant';
import * as S from './styles';
import './styles.css';
import SiSenor from '../../assets/siSenor.jpg'
import LogoBlack from "../../assets/LogoBlack.png"
import { useState } from 'react';
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





function Busca() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

const restaurantes = [
  {
    nome: 'Si señor',
    localidade: 'São Paulo',
    bairro: 'Vila Olímpia',
    imgUrl: R1,
    colorCircle1: 'orange',
    colorCircle2: 'orange',
    colorCircle3: 'orange',
    colorCircle4: 'orange',
    colorCircle5: 'orange',
  },
  {
    nome: 'D´Japa',
    localidade: 'São Paulo',
    bairro: 'Jabaquara',
    imgUrl: Restaurante,
    colorCircle1: 'orange',
    colorCircle2: 'orange',
    colorCircle3: 'orange',
    colorCircle4: 'orange',
    colorCircle5: 'orange',  },
  {
    nome: 'Spice Fusion',
    localidade: 'Salvador',
    bairro: 'Barra',
    imgUrl: R3,
colorCircle1: 'orange',
    colorCircle2: 'orange',
    colorCircle3: 'orange',
    colorCircle4: 'orange',
    colorCircle5: 'grey',  },
  {
    nome: 'The Green Leaf Bistro',
    localidade: 'Brasília',
    bairro: 'Asa Sul',
    imgUrl: R4,
colorCircle1: 'orange',
    colorCircle2: 'orange',
    colorCircle3: 'orange',
    colorCircle4: 'orange',
    colorCircle5: 'grey',  },
  {
    nome: 'Chez Pierre',
    localidade: 'Fortaleza',
    bairro: 'Meireles',
    imgUrl: R5,
colorCircle1: 'orange',
    colorCircle2: 'orange',
    colorCircle3: 'orange',
    colorCircle4: 'grey',
    colorCircle5: 'grey',  },
  {
    nome: 'Blue Ocean Grill',
    localidade: 'Recife',
    bairro: 'Boa Viagem',
    imgUrl: R6,
colorCircle1: 'orange',
    colorCircle2: 'grey',
    colorCircle3: 'grey',
    colorCircle4: 'grey',
    colorCircle5: 'grey',  },
  {
    nome: 'Terra Nova Taverna',
    localidade: 'Porto Alegre',
    bairro: 'Moinhos de Vento',
    imgUrl: R7,
colorCircle1: 'orange',
    colorCircle2: 'orange',
    colorCircle3: 'orange',
    colorCircle4: 'orange',
    colorCircle5: 'grey',  },
  {
    nome: 'Golden Harvest Eatery',
    localidade: 'Florianópolis',
    bairro: 'Centro',
    imgUrl: R8,
colorCircle1: 'orange',
    colorCircle2: 'orange',
    colorCircle3: 'orange',
    colorCircle4: 'grey',
    colorCircle5: 'grey',  },
  {
    nome: 'Bella Napoli Pizzeria',
    localidade: 'Natal',
    bairro: 'Ponta Negra',
    imgUrl: R9,
colorCircle1: 'orange',
    colorCircle2: 'orange',
    colorCircle3: 'orange',
    colorCircle4: 'orange',
    colorCircle5: 'orange',  },
  {
    nome: 'Fusion Junction',
    localidade: 'João Pessoa',
    bairro: 'Tambaú',
    imgUrl: R10,
colorCircle1: 'orange',
    colorCircle2: 'orange',
    colorCircle3: 'orange',
    colorCircle4: 'grey',
    colorCircle5: 'grey',  },
  {
    nome: 'Sabor Mexicano',
    localidade: 'Curitiba',
    bairro: 'Batel',
    imgUrl: R11,
colorCircle1: 'orange',
    colorCircle2: 'orange',
    colorCircle3: 'orange',
    colorCircle4: 'grey',
    colorCircle5: 'grey',  },
  {
    nome: 'The Maple Table',
    localidade: 'Belém',
    bairro: 'Umarizal',
    imgUrl: R12,
colorCircle1: 'orange',
    colorCircle2: 'orange',
    colorCircle3: 'orange',
    colorCircle4: 'grey',
    colorCircle5: 'grey',  },
  {
    nome: 'Zen Garden Sushi Bar',
    localidade: 'Manaus',
    bairro: 'Adrianópolis',
    imgUrl: R13 ,
colorCircle1: 'orange',
    colorCircle2: 'orange',
    colorCircle3: 'grey',
    colorCircle4: 'grey',
    colorCircle5: 'grey',  },
  {
    nome: 'Rustic Oak Café',
    localidade: 'Porto Velho',
    bairro: 'Centro',
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

  const filteredRestaurantes = restaurantes.filter((restaurante) => {
    const { nome, localidade, bairro } = restaurante;
    const formattedSearchTerm = searchTerm.toLowerCase();
    return (
      nome.toLowerCase().includes(formattedSearchTerm) ||
      localidade.toLowerCase().includes(formattedSearchTerm) ||
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
          {filteredRestaurantes.map((restaurante, index) => (
            <CardRestaurant
              onClick={() => navigate('/Descricao')}
              key={index}
              height="45vh"
              width="84%"
              margin="19px"
              imgUrl={restaurante.imgUrl}
              fontSizeName="1.3rem"
              fontSizeAddress="1.1rem"
              name={restaurante.nome}
              address={restaurante.localidade}
              bairro={restaurante.bairro}
              colorCircle1={restaurante.colorCircle1}
              colorCircle2={restaurante.colorCircle2}
              colorCircle3={restaurante.colorCircle3}
              colorCircle4={restaurante.colorCircle4}
              colorCircle5={restaurante.colorCircle5}
            />
          ))}
        </S.BoxRestaurante>
       
      </S.Teste>
    </>
  )
}

export default Busca