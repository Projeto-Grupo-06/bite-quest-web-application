import React from 'react'
import * as S from "./styles"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonForm from '../../components/Form/buttons/ButtonForm/ButtonForm';
import InputForm from '../../components/Form/Input/inputform';
import ButtonsReplacements from '../../components/Form/buttons/ButtonsReplacement/ButtonsReplacements';

import LogoBlack from "../../assets/LogoBlack.png"





function Cadastro() {

    //usando state

    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');



    //criterios de validação

    const validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validateSenha = (senha) => {
        var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        return re.test(senha);
    }


    //validando os inputs

    const cadastrar = () => {
        if (nome.length === 0) {
            console.log("digite um nome");
            return;
        }
        if (!validateEmail(email)) {
            console.log("Invalid email");
            return;
        }
        if (!validateSenha(senha)) {
            console.log("senha invalida");
            return;
        }
        if (senha !== confirmSenha) {
            console.log("errou a senha");
            return;
        }
        console.log("cadastrado");
        navigate('/Login');
    };




    return (

        <>
            <S.Container>
                <S.Divleft>

                    <S.Logo onClick={() => navigate('/')} src={LogoBlack} />

                    <S.Form>
                        <ButtonsReplacements backgrounColorOne="#FCA311" textone="CADASTRO" backgrounColorTwo="whitesmoke" textTwo="LOGIN" />

                        <InputForm text="NOME" onChange={e => setNome(e.target.value)} />
                        <InputForm text="EMAIL" onChange={e => setEmail(e.target.value)} />
                        <InputForm text="SENHA" onChange={e => setSenha(e.target.value)} />
                        <InputForm text="CONFIRMAR SENHA" onChange={e => setConfirmSenha(e.target.value)} />

                        <S.DivAdicionar>
                            <S.Check />
                            <S.TextReference>Desejo adicionar meu restaurante</S.TextReference>
                        </S.DivAdicionar>




                        <ButtonForm onClick={cadastrar} height="8%" width="80%" text="Cadastrar" colorDoText="whitesmoke" fundoColor="#FCA311" marginTop="40px" fontSize="1.3rem" />



                    </S.Form>
                </S.Divleft>
                <S.Divright></S.Divright>
            </S.Container>
        </>
    )
}

export default Cadastro;