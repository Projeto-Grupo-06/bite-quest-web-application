import React from 'react'

import * as S from "./styles"
import ButtonForm from '../../components/Form/buttons/ButtonForm/buttonform';
import InputForm from '../../components/Form/Input/inputform';
import ButtonsReplacements from '../../components/Form/buttons/ButtonsReplacement/ButtonsReplacements';


import LogoBlack from "../../assets/LogoBlack.png"


function login() {
    return (
        <>

            <S.Container>

                <S.Divleft>
                    <S.Logo src={LogoBlack} />
                </S.Divleft>

                <S.Divright>
                    <S.Form>

                     <ButtonsReplacements backgrounColorOne="#EFEFEF" textone="CADASTRO" backgrounColorTwo="#FCA311" textTwo="LOGIN" />


                        <InputForm text="NOME" />
                        <InputForm text="EMAIL" />

                        <S.Divgroup>

                            <S.Check />
                            <S.TextReference>Lembre-me</S.TextReference>

                            <S.Second>
                                <S.TextReference>Recuperar senha</S.TextReference>
                            </S.Second>

                        </S.Divgroup>
                        <ButtonForm height="58px" width="80%" text="Cadastrar" textColor="whitesmoke" backgroundColor="#FCA311" />
                    </S.Form>
                </S.Divright>

            </S.Container>

        </>
    )
}

export default login