import React, { useState } from 'react';
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
    const [emailError, setEmailError] = useState(false);
    const [senhaError, setSenhaError] = useState(false);
   

    const onSubmit = (data) => {

        console.log(errors.email)

        api.post('/usuarios', data)
            .then((response) => {
                if (response.data && response.data.id) {
                    
                    localStorage.setItem('usuario', JSON.stringify(response.data))

                    console.log('Usuário autenticado:', response.data);
                    navigate("/Login");
                } else {
                    alert.log('Resposta inválida do servidor');
                }
            })
            .catch((error) => {
                alert('Erro ao fazer cadastro:', error.response.data);
            });
    };


    const inputSemEspaco = (e) => {
        const value = e.target.value;
        if (!value.includes('@')) {
          setEmailError(true);
        } else {
          setEmailError(false);
        }
      };
      const insenha = (e) => {
        const value = e.target.value;
        const senhaRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!senhaRegex.test(value)) {
          setSenhaError(true);
        } else {
          setSenhaError(false);
        }
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
                            className={errors.email || emailError ? "classdeErro" : "classeNormal"}
                            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                            
                        />
                         {emailError && <span className="error-message">O email deve conter um '@'.</span>}

                        

                        </S.Group>
                        <S.Group>
                        <label htmlFor="">Senha</label>
                        <input
                            name="senha"
                            onInput={insenha}
                            type="password"
                            className={errors.senha || senhaError ? "classdeErro" : "classeNormal"}
                            {...register('senha', { required: true, pattern:  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message: "A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um dígito e um caractere especial"})}
                        />
                        {senhaError && <span className="error-message">minimo de 8 caracteres, letras maiusculas, numeros e caracteres especiais</span>}

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
