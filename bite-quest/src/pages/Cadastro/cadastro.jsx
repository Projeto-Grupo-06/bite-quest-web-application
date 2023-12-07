import { useForm } from 'react-hook-form';
import api from '../../api';
import * as S from './styles';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import LogoBlack from '../../assets/LogoBlack.png';
import { inputSomenteTexto, inputSemEspaco } from '../../utils/formatadores';
import ButtonForm from '../../components/Form/buttons/ButtonForm/ButtonForm';
import ButtonsReplacements from '../../components/Form/buttons/ButtonsReplacement/ButtonsReplacements';

function Cadastro() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const onSubmit = (data) => {
        api.post('/usuarios', data)
            .then((response) => {
                if (response.data && response.data.id) {
                    const { id, nome, email, senha } = response.data;

                    // Armazenar os dados no localStorage após o registro bem-sucedido
                    localStorage.setItem('id', id);
                    localStorage.setItem('nome', nome);
                    localStorage.setItem('email', email);
                    localStorage.setItem('senha', senha);

                    console.log('Usuário autenticado:', response.data);
                    navigate("/Login");
                } else {
                    console.log('Resposta inválida do servidor');
                }
            })
            .catch((error) => {
                console.log('Erro ao fazer login:', error.response.data);
            });
    };


    return (
        <>
            <S.Container>
                <S.Divleft>
                    <S.Logo onClick={() => navigate('/')} src={LogoBlack} />
                    <S.Form onSubmit={handleSubmit(onSubmit)}>
                        <ButtonsReplacements
                            backgrounColorOne="#FCA311"
                            textone="CADASTRO"
                            backgrounColorTwo="whitesmoke"
                            textTwo="LOGIN"
                        />
                        <input
                            name="nome"
                            onInput={inputSomenteTexto}
                            type="text"
                            className={errors.nome ? "classdeErro" : "classeNormal"}
                            {...register('nome', { required: true })}
                        />
                        {errors && errors.nome && (
                            <p style={{ color: "white" }}>Ta dando erro, precisa ser obrigatorio</p>
                        )}
                        <input
                            name="email"
                            onInput={inputSemEspaco}
                            className={errors.email ? "classdeErro" : "classeNormal"}
                            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        />
                        {errors && errors.email && (
                            <p style={{ color: "white" }}>Ta dando erro, precisa ser obrigatorio</p>
                        )}
                        <input
                            name="senha"
                            type="password"
                            className={errors.senha ? "classdeErro" : "classeNormal"}
                            {...register('senha', { required: true, minLength: 8 })}
                        />
                        {errors && errors.senha && (
                            <p style={{ color: "white" }}>Ta dando erro, precisa ser obrigatorio</p>
                        )}
                        <input
                            type="password"
                            className={errors.senha ? "classdeErro" : "classeNormal"}
                            {...register('confirmarSenha', {
                                required: true,
                                validate: (value) => value === watch('senha'),
                            })}
                        />
                        {errors && errors.senha && (
                            <p style={{ color: "white" }}>Ta dando erro, precisa ser obrigatorio</p>
                        )}
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
