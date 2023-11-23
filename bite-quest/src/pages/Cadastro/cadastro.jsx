import React, { useState } from 'react';
import api from '../../api';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import LogoBlack from '../../assets/LogoBlack.png';
import InputForm from '../../components/Form/Input/inputform';
import ButtonForm from '../../components/Form/buttons/ButtonForm/ButtonForm';
import ButtonsReplacements from '../../components/Form/buttons/ButtonsReplacement/ButtonsReplacements';

function Cadastro() {
    const navigate = useNavigate();
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    function cadastrar(e) {
        e.preventDefault();

        // Validar se as senhas coincidem
        if (senha !== confirmarSenha) {
            console.log('As senhas não coincidem.');
            // Adicione aqui a lógica para lidar com o erro, se necessário.
            return;
        }

        const usuario = {
            nome: e.target.nome.value,
            email: e.target.email.value,
            senha: e.target.senha.value,
        };

        api
            .post(`/usuarios`, usuario)
            .then((response) => {
                console.log(response);
                navigate('/Login');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <S.Container>
                <S.Divleft>
                    <S.Logo onClick={() => navigate('/')} src={LogoBlack} />
                    <S.Form onSubmit={cadastrar}>
                        <ButtonsReplacements
                            backgrounColorOne="#FCA311"
                            textone="CADASTRO"
                            backgrounColorTwo="whitesmoke"
                            textTwo="LOGIN"
                        />
                        <InputForm
                            text="NOME"
                            name="nome"
                        />
                        <InputForm
                            text="EMAIL"
                            name="email"
                        />
                        <InputForm
                            text="SENHA"
                            name="senha"
                            type="password"
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        <InputForm
                            text="CONFIRMAR SENHA"
                            type="password"
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                        />
                        <S.DivAdicionar>
                            <S.Check />
                            <S.TextReference>Desejo adicionar meu restaurante</S.TextReference>
                        </S.DivAdicionar>
                        <ButtonForm
                            type="submit"
                            height="8%"
                            width="80%"
                            text="Cadastrar"
                            colorDoText="whitesmoke"
                            fundoColor="#FCA311"
                            marginTop="40px"
                            fontSize="1.3rem"
                        />
                    </S.Form>
                </S.Divleft>
                <S.Divright></S.Divright>
            </S.Container>
        </>
    );
}

export default Cadastro;
