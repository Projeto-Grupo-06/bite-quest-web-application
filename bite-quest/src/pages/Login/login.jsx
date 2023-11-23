import * as S from "./styles";
import { useState } from 'react';
import ButtonForm from '../../components/Form/buttons/ButtonForm/ButtonForm';
import InputForm from '../../components/Form/Input/inputform';
import ButtonsReplacements from '../../components/Form/buttons/ButtonsReplacement/ButtonsReplacements';


import LogoBlack from "../../assets/LogoBlack.png"
import api from '../../api';
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    function login(e) {
        e.preventDefault();

        // Verifica se o email é válido e a senha tem pelo menos 8 caracteres
        if (email && senha.length >= 8) {
            // Faz a chamada para a API para autenticar o usuário
            api.post('/usuarios', { email, senha })
                .then((response) => {
                    console.log('Usuário autenticado:', response.data);
                    // Redireciona para a próxima página após o login
                    navigate("/");
                })
                .catch((error) => {
                    console.log('Erro ao fazer login:', error.response.data);
                    // Lógica para lidar com erros de login, se necessário
                });
        } else {
            console.log('Por favor, insira um email válido e uma senha com pelo menos 8 caracteres.');
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


                        <InputForm text="EMAIL" name="email" onChange={e => setEmail(e.target.value)} />
                        <InputForm text="SENHA" name="senha" onChange={e => setSenha(e.target.value)} />

                        <S.Divgroup>

                            <S.Check />
                            <S.TextReference>Lembre-me</S.TextReference>

                            <S.Second>
                                <S.TextReference>Recuperar senha</S.TextReference>
                            </S.Second>

                        </S.Divgroup>
                        <ButtonForm onClick={login} height="58px" width="80%" text="Entrar" colorDoText="whitesmoke" marginTop="40px" fundoColor="#FCA311" fontSize="1.2rem" />
                    </S.Form>
                </S.Divright>

            </S.Container>

        </>
    )

}
export default Login