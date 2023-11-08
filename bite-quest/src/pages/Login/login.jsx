import React from 'react'
import * as S from "./styles";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonForm from '../../components/Form/buttons/ButtonForm/ButtonForm';
import InputForm from '../../components/Form/Input/inputform';
import ButtonsReplacements from '../../components/Form/buttons/ButtonsReplacement/ButtonsReplacements';


import LogoBlack from "../../assets/LogoBlack.png"


function login() {


    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //validação regex

    const validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


//funcao do botão de login => sem validação com o banco

    const logar = () => {

        if (!validateEmail(email) && password.length < 8) {

            console.log("se fodeu");

        } else {
            console.log("pdp vc entrou na plataforma, vc é foda!!");
        }

    }





    return (
        <>

            <S.Container>

                <S.Divleft>
                    <S.Logo onClick={() => navigate('/')} src={LogoBlack} />
                </S.Divleft>

                <S.Divright>
                    <S.Form>

                        <ButtonsReplacements backgrounColorOne="#EFEFEF" textone="CADASTRO" backgrounColorTwo="#FCA311" textTwo="LOGIN" />


                        <InputForm text="EMAIL" onChange={e => setEmail(e.target.value)} />
                        <InputForm text="SENHA" onChange={e => setPassword(e.target.value)} />

                        <S.Divgroup>

                            <S.Check />
                            <S.TextReference>Lembre-me</S.TextReference>

                            <S.Second>
                                <S.TextReference>Recuperar senha</S.TextReference>
                            </S.Second>

                        </S.Divgroup>
                        <ButtonForm onClick={logar} height="58px" width="80%" text="Entrar" colorDoText="whitesmoke" marginTop="40px" fundoColor="#FCA311" fontSize="1.2rem" />
                    </S.Form>
                </S.Divright>

            </S.Container>

        </>
    )

}
export default login