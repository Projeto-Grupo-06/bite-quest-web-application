
import React from 'react'
import * as S from "./styles";

import LogoBlack from "../../assets/LogoBlack.png"
import { useNavigate } from 'react-router-dom';


import userPadrao from "../../assets/userPadrao.jpg"
import comidaChinesa from "../../assets/comidaChinesa.png"
import pizza from "../../assets/pizza.png"
import tacos from "../../assets/tacos.png"
import sushi from "../../assets/sushi.png"





function Pesquisa() {
    const navigate = useNavigate();

    return (
        <>
            <S.NavBar>
               <S.Img onClick={() => navigate('/')}  src={LogoBlack} alt="Logo Black" />
               <S.ImgPerfil onClick={() => navigate("/Perfil")} imgUrl={userPadrao}></S.ImgPerfil>
            </S.NavBar>

            <S.Container>

            <S.DivGroupUp>

                <S.DivPesquisa>
            
                </S.DivPesquisa>

                <S.DivFiltros>

                <S.ButtonFiltros>
                <S.TextFiltro>MEXICANA</S.TextFiltro>
                <S.ImgFiltro src={tacos} alt='imagem do alimento'></S.ImgFiltro>
                </S.ButtonFiltros>

                <S.ButtonFiltros>
                <S.TextFiltro>JAPONESA</S.TextFiltro>
                <S.ImgFiltro src={sushi} alt='imagem do alimento'></S.ImgFiltro>
                </S.ButtonFiltros>


                <S.ButtonFiltros>
                <S.TextFiltro>ITALIANA</S.TextFiltro>
                <S.ImgFiltro src={pizza} alt='imagem do alimento'></S.ImgFiltro>
                </S.ButtonFiltros>


                <S.ButtonFiltros>
                <S.TextFiltro>CHINESA</S.TextFiltro>
                <S.ImgFiltro src={comidaChinesa} alt='imagem do alimento'></S.ImgFiltro>
                </S.ButtonFiltros>

            
                </S.DivFiltros>


            
            
            </S.DivGroupUp>


            <S.DivGroupContainerDown>
            
            
            </S.DivGroupContainerDown>





            
            
            
            
            </S.Container>

            
        </>
    )
}

export default Pesquisa;
