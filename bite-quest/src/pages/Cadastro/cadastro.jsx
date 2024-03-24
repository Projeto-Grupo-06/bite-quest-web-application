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
                    
                    localStorage.setItem('usuario', JSON.stringify(response.data))

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
                        caminho="/Cadastro"
                            backgrounColorOne="#FCA311"
                            textone="CADASTRO"
                            caminhodois="/Login"
                            backgrounColorTwo="whitesmoke"
                            textTwo="LOGIN"
                        />
                        <S.Group>
                        <label htmlFor="">Nome</label>
                        <input
                            name="nome"
                            onInput={inputSomenteTexto}
                            type="text"
                            className={errors.nome ? "classdeErro" : "classeNormal"}
                            {...register('nome', { required: true })}
                        />
                        </S.Group>
                        <S.Group>
                        <label htmlFor="">Email</label>
                        <input
                            name="email"
                            onInput={inputSemEspaco}
                            className={errors.email ? "classdeErro" : "classeNormal"}
                            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        />
                        </S.Group>
                        <S.Group>
                        <label htmlFor="">Senha</label>
                        <input
                            name="senha"
                            type="password"
                            className={errors.senha ? "classdeErro" : "classeNormal"}
                            {...register('senha', { required: true, minLength: 8 })}
                        />
                        </S.Group>
                        <S.Group>
                        <label htmlFor="">Confirmar senha</label>
                        <input
                            type="password"
                            className={errors.senha ? "classdeErro" : "classeNormal"}
                            {...register('confirmarSenha', {
                                required: true,
                                validate: (value) => value === watch('senha'),
                            })}
                        />
                        </S.Group>
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
