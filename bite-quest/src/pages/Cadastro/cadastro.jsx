import React from 'react'
import * as S from "./styles"

import { Buttonformsubmit } from '../../components/Form/ButtonForm/buttonform';
import { Inputform } from '../../components/Form/Input/inputform';
import { Labelform } from '../../components/Form/Input/inputform';
import { Containinput } from '../../components/Form/Input/inputform';


function cadastro() {
    return (

        <>
            <S.Container>
                <S.Divleft>
                    <S.Form>
                        <Containinput>
                            <Labelform >Nome:</Labelform>
                            <Inputform ></Inputform>
                        </Containinput>
                        <Buttonformsubmit>Cadastrar</Buttonformsubmit>
                    </S.Form>
                </S.Divleft>
                <S.Divright></S.Divright>
            </S.Container>
        </>

    )
}

export default cadastro;