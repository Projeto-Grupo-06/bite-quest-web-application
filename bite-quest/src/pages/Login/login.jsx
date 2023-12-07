import * as S from "./styles";
import { useForm } from 'react-hook-form';
import ButtonForm from '../../components/Form/buttons/ButtonForm/ButtonForm';

import LogoBlack from "../../assets/LogoBlack.png"
import api from '../../api';
import { useNavigate } from 'react-router-dom';
import ButtonsReplacements from "../../components/Form/buttons/ButtonsReplacement/ButtonsReplacements";

function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const email = data.email;
        const senha = data.senha;

        // Recuperar os dados armazenados no localStorage
        const storedEmail = localStorage.getItem('email');
        const storedSenha = localStorage.getItem('senha');

        if (email === storedEmail && senha === storedSenha) {
            console.log('Usuário autenticado');
            navigate("/");
        } else {
            console.log('Credenciais inválidas');
        }
    };

    return (
        <>
            <S.Container>
                <S.Divleft>
                    <S.Logo onClick={() => navigate('/')} src={LogoBlack} />
                </S.Divleft>

                <S.Divright>
                    <S.Form onSubmit={handleSubmit(onSubmit)}>
                        <ButtonsReplacements backgrounColorOne="#EFEFEF" textone="CADASTRO" backgrounColorTwo="#FCA311" textTwo="LOGIN" />

                        <input
                            name="email"
                            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        />

                        <input
                            name="senha"
                            {...register('senha', { required: true, minLength: 8 })}
                        />

                        <S.Divgroup>
                            <S.Check />
                            <S.TextReference>Lembre-me</S.TextReference>
                            <S.Second>
                                <S.TextReference>Recuperar senha</S.TextReference>
                            </S.Second>
                        </S.Divgroup>

                        <ButtonForm type="submit" height="58px" width="80%" text="Entrar" colorDoText="whitesmoke" marginTop="40px" fundoColor="#FCA311" fontSize="1.2rem" />
                    </S.Form>
                </S.Divright>
            </S.Container>
        </>
    )
}

export default Login;
