import React from 'react'
import * as S from "./styles"

import ButtonForm from '../../components/Form/buttons/ButtonForm/buttonform';
import InputForm from '../../components/Form/Input/inputform';
import ButtonsReplacements from '../../components/Form/buttons/ButtonsReplacement/ButtonsReplacements';

import LogoBlack from "../../assets/LogoBlack.png"





function cadastro() {
    return (

        <>
            <S.Container>
                <S.Divleft>

                <S.Logo src={LogoBlack} />

                    <S.Form>
                     <ButtonsReplacements backgrounColorOne="#FCA311" textone="CADASTRO" backgrounColorTwo="whitesmoke" textTwo="LOGIN" />

                        <InputForm text="NOME" />
                        <InputForm text="EMAIL" />
                        <InputForm text="SENHA" />
                        <InputForm text="CONFORMAÇÃO DE SENHA" />

                        <S.DivAdicionar>
                            <S.Check />
                            <S.TextReference>Desejo adicionar meu restaurante</S.TextReference>
                        </S.DivAdicionar>





                        <ButtonForm height="58px" width="80%" text="Cadastrar" textColor="whitesmoke"  backgroundColor="#FCA311" />
                    </S.Form>
                </S.Divleft>
                <S.Divright></S.Divright>
            </S.Container>
        </>

    )
}

export default cadastro;