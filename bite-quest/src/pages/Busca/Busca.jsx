import CardRestaurant from '../../components/CardRestaurant/cardRestaurant';
import * as S from './styles';
import './styles.css';
import SiSenor from '../../assets/siSenor.jpg'
import LogoBlack from "../../assets/LogoBlack.png"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Busca() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const restaurantes = [
    {
      nome: 'Si señor',
      localidade: 'São Paulo',
      bairro: 'Vila Olímpia',
      imgUrl: SiSenor,
      colorCircle1: 'orange',
      colorCircle2: 'orange',
      colorCircle3: 'orange',
      colorCircle4: 'orange',
      colorCircle5: 'grey',
    },
    {
      nome: 'Restaurante B',
      localidade: 'Localidade B',
      bairro: 'Bairro B',
      imgUrl: '../../assets/siSenor.jpg',
      colorCircle1: 'orange',
      colorCircle2: 'grey',
      colorCircle3: 'orange',
      colorCircle4: 'orange',
      colorCircle5: 'orange',
    },
    {
      nome: 'Restaurante B',
      localidade: 'Localidade B',
      bairro: 'Bairro B',
      imgUrl: '../../assets/siSenor.jpg',
      colorCircle1: 'orange',
      colorCircle2: 'grey',
      colorCircle3: 'orange',
      colorCircle4: 'orange',
      colorCircle5: 'orange',
    },
    {
      nome: 'Restaurante B',
      localidade: 'Localidade B',
      bairro: 'Bairro B',
      imgUrl: '../../assets/siSenor.jpg',
      colorCircle1: 'orange',
      colorCircle2: 'grey',
      colorCircle3: 'orange',
      colorCircle4: 'orange',
      colorCircle5: 'orange',
    },
    {
      nome: 'Restaurante B',
      localidade: 'Localidade B',
      bairro: 'Bairro B',
      imgUrl: '../../assets/siSenor.jpg',
      colorCircle1: 'orange',
      colorCircle2: 'grey',
      colorCircle3: 'orange',
      colorCircle4: 'orange',
      colorCircle5: 'orange',
    },
    {
      nome: 'Vittor',
      localidade: 'Localidade B',
      bairro: 'Bairro B',
      imgUrl: '../../assets/siSenor.jpg',
      colorCircle1: 'orange',
      colorCircle2: 'grey',
      colorCircle3: 'orange',
      colorCircle4: 'orange',
      colorCircle5: 'orange',
    },
    {
      nome: 'Restaurante B',
      localidade: 'Localidade B',
      bairro: 'Bairro B',
      imgUrl: '../../assets/siSenor.jpg',
      colorCircle1: 'orange',
      colorCircle2: 'grey',
      colorCircle3: 'orange',
      colorCircle4: 'orange',
      colorCircle5: 'orange',
    },
    {
      nome: 'Restaurante B',
      localidade: 'Localidade B',
      bairro: 'Bairro B',
      imgUrl: '../../assets/siSenor.jpg',
      colorCircle1: 'orange',
      colorCircle2: 'grey',
      colorCircle3: 'orange',
      colorCircle4: 'orange',
      colorCircle5: 'orange',
    },
    {
      nome: 'Restaurante B',
      localidade: 'Localidade B',
      bairro: 'Bairro B',
      imgUrl: '../../assets/siSenor.jpg',
      colorCircle1: 'orange',
      colorCircle2: 'grey',
      colorCircle3: 'orange',
      colorCircle4: 'orange',
      colorCircle5: 'orange',
    },
    {
      nome: 'Restaurante B',
      localidade: 'Localidade B',
      bairro: 'Bairro B',
      imgUrl: '../../assets/siSenor.jpg',
      colorCircle1: 'orange',
      colorCircle2: 'grey',
      colorCircle3: 'orange',
      colorCircle4: 'orange',
      colorCircle5: 'orange',
    },
    {
      nome: 'Restaurante B',
      localidade: 'Localidade B',
      bairro: 'Bairro B',
      imgUrl: '../../assets/siSenor.jpg',
      colorCircle1: 'orange',
      colorCircle2: 'grey',
      colorCircle3: 'orange',
      colorCircle4: 'orange',
      colorCircle5: 'orange',
    },
    {
      nome: 'Restaurante B',
      localidade: 'Localidade B',
      bairro: 'Bairro B',
      imgUrl: '../../assets/siSenor.jpg',
      colorCircle1: 'orange',
      colorCircle2: 'grey',
      colorCircle3: 'orange',
      colorCircle4: 'orange',
      colorCircle5: 'orange',
    },
    {
      nome: 'Restaurante B',
      localidade: 'Localidade B',
      bairro: 'Bairro B',
      imgUrl: '../../assets/siSenor.jpg',
      colorCircle1: 'orange',
      colorCircle2: 'grey',
      colorCircle3: 'orange',
      colorCircle4: 'orange',
      colorCircle5: 'orange',
    },
    {
      nome: 'Restaurante B',
      localidade: 'Localidade B',
      bairro: 'Bairro B',
      imgUrl: '../../assets/siSenor.jpg',
      colorCircle1: 'orange',
      colorCircle2: 'grey',
      colorCircle3: 'orange',
      colorCircle4: 'orange',
      colorCircle5: 'orange',
    },
    {
      nome: 'Restaurante B',
      localidade: 'Localidade B',
      bairro: 'Bairro B',
      imgUrl: '../../assets/siSenor.jpg',
      colorCircle1: 'orange',
      colorCircle2: 'grey',
      colorCircle3: 'orange',
      colorCircle4: 'orange',
      colorCircle5: 'orange',
    },
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
        <S.Img onClick={() => navigate('/')} src={LogoBlack} />
      </S.Nav>
      <S.Teste>
        <S.BoxInput>
          <input
            placeholder="Pesquisar"
            className="input"
            type="text"
            value={searchTerm}
            onChange={handleSearch}
          />
        </S.BoxInput>
        <S.BoxRestaurante>
          {filteredRestaurantes.map((restaurante, index) => (
            <CardRestaurant
              onClick={() => navigate('/')}
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