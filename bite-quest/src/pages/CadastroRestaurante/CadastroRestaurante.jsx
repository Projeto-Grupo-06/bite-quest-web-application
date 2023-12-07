import * as S from './styles';
import axios from 'axios';
import "./styles.css"
import CardRestaurant from "../../components/CardRestaurant/cardRestaurant"
import SiSenor from "../../assets/siSenor.jpg"
import Cardapio from "../../assets/cardapio.png"
import { inputSomenteTexto, inputSemEspaco, inputSomenteNumero } from '../../utils/formatadores';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';


function CadastroRestaurante() {

  const navigate = useNavigate();
  const { register, handleSubmit, setValue, setFocus, formState: { errors }, setError } = useForm();
  const [highlightError, setHighlightError] = useState(false);
  const [restaurantName, setRestaurantName] = useState(''); // Estado local para armazenar o nome do restaurante
  const [addressData, setAddressData] = useState({});

  const handleNameChange = (e) => {
    setRestaurantName(e.target.value);
  };

  const handleCEPChange = async (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    if (cep.length === 8) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        setAddressData(response.data);
        setValue('endereco', response.data.logradouro);
        setFocus('numero')
        console.log(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do CEP:', error);
      }
    }
  };

  const onSubmit = (data) => {
    // const hasErrors = Object.keys(errors).length > 0;

    // if (hasErrors) {
    //   Object.keys(errors).forEach((field) => {
    //     setError(field, {
    //       type: 'manual',
    //       message: errors[field]?.message || 'Erro de validação',
    //     });
    //     setHighlightError((prevState) => ({
    //       ...prevState,
    //       [field]: true,
    //     }));
    //   });
    // } else {
    //   Object.keys(data).forEach((field) => {
    //     localStorage.setItem(field, data[field]);
    //     navigate('/Busca');
    //   });
    //   console.log(data);
    // }

    const hasErrors = Object.keys(errors).length > 0;

    if (hasErrors) {
      setHighlightError(true);
    } else {
      Object.keys(data).forEach((field) => {
        localStorage.setItem(field, data[field]);
        navigate('/Busca');
      });
      console.log(data);
    }



    // const hasErrors = Object.keys(errors).length > 0;
    // if (hasErrors) {
    //   setHighlightError(true);
    // } else {
    //   Object.keys(data).forEach((field) => {
    //     localStorage.setItem(field, data[field]);
    //     navigate('/Busca');
    //   });
    //   console.log(data);
    // }

    // api.post(`/restaurantes`, data)
    //   .then((response) => {
    //     console.log(response);
    //     const { nome, cnpj, cep, endereco, numero, complemento, descricao, entradaSegunda, entradaTerca, entradaQuarta, entradaQuinta, entradaSexta, entradaSabado, entradaDomingo, saidaSegunda, saidaTerca, saidaQuarta, saidaQuinta, saidaSexta, saidaSabado, saidaDomingo } = response.data;

    //     localStorage.setItem('nome', nome);
    //     localStorage.setItem('cnpj', cnpj);
    //     localStorage.setItem('cep', cep);
    //     localStorage.setItem('endereco', endereco);
    //     localStorage.setItem('numero', numero);
    //     localStorage.setItem('complemento', complemento);
    //     localStorage.setItem('descricao', descricao);

    //     const timeFields = [
    //       'entradaSegunda',
    //       'entradaTerca',
    //       'entradaQuarta',
    //       'entradaQuinta',
    //       'entradaSexta',
    //       'entradaSabado',
    //       'entradaDomingo',
    //       'saidaSegunda',
    //       'saidaTerca',
    //       'saidaQuarta',
    //       'saidaQuinta',
    //       'saidaSexta',
    //       'saidaSabado',
    //       'saidaDomingo',
    //     ];

    //     // Iterar sobre os campos de tempo e converter os valores para strings
    //     timeFields.forEach((field) => {
    //       if (data[field]) {
    //         data[field] = data[field].toString(); // Convertendo para string antes de salvar no localStorage
    //         localStorage.setItem(field, data[field]);
    //       }
    //     });

    //     // navigate('/Login');
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       const backendErrors = error.response.data.errors;
    //       Object.keys(backendErrors).forEach((fieldName) => {
    //         setError(fieldName, {
    //           type: 'text',
    //           message: backendErrors[fieldName],
    //         });
    //       });
    //     }
    //   });


    // api.post(`/restaurantes`, data)
    //   .then((response) => {
    //     console.log(response);
    //     navigate('/Login');
    //   })
    //   .catch((error) => {
    //     console.log("error");
    //     console.log(error);
    //   });
  };

  return (
    <>
      <S.Container onSubmit={handleSubmit(onSubmit)}>
        <S.WrapperForm>
          <S.H1>
            Cadastrar Restaurante
          </S.H1>
          <S.Form>
            <S.WrapperInput>
              <S.Label>
                Nome do Restaurante
              </S.Label>
              <input
                name="nomeRestaurante"
                type="text"
                className={`inputRestaurante ${highlightError && errors.nomeRestaurante ? 'error' : ''}`}
                {...register('nomeRestaurante')}
                onChange={handleNameChange}
              />
            </S.WrapperInput>
            <S.WrapperInput>
              <S.Label>
                Cnpj
              </S.Label>
              <input
                name="cnpj"
                type="text"
                className={highlightError && errors.cnpj ? "inputRestaurante error" : "inputRestaurante"}
                {...register('cnpj', { required: true })}
                onFocus={() => setHighlightError(true)}
                onBlur={() => setHighlightError(false)}
              />
            </S.WrapperInput>
            <S.WrapperInput>
              <S.Label>
                cep
              </S.Label>
              <input
                name="cep"
                type="text"
                className={highlightError && errors.cep ? "inputRestaurante error" : "inputRestaurante"}
                {...register('cep', { required: true })}
                onChange={handleCEPChange}
              />
            </S.WrapperInput>
            <S.WrapperInputEnderecoNumero>
              <S.Endereco>
                <S.Label>
                  endereco
                </S.Label>
                <input
                  name="endereco"
                  type="text"
                  onInput={inputSomenteTexto}
                  className={highlightError && errors.endereco ? "inputRestaurante error" : "inputRestaurante"}
                  {...register('endereco', { required: true })}
                  onFocus={() => setHighlightError(true)}
                  onBlur={() => setHighlightError(false)}
                />
              </S.Endereco>
              <S.Numero>
                <S.Label>
                  numero
                </S.Label>
                <input
                  name="numero"
                  type="text"
                  onInput={inputSomenteNumero}
                  className={highlightError && errors.numero ? "inputRestaurante error" : "inputRestaurante"}
                  {...register('numero', { required: true })}
                  onFocus={() => setHighlightError(true)}
                  onBlur={() => setHighlightError(false)}
                />
              </S.Numero>
            </S.WrapperInputEnderecoNumero>
            <S.WrapperInput>
              <S.Label>
                complemento
              </S.Label>
              <input
                name="complemento"
                type="text"
                className={highlightError && errors.complemento ? "inputRestaurante error" : "inputRestaurante"}
                {...register('complemento', { required: true })}
                onFocus={() => setHighlightError(true)}
                onBlur={() => setHighlightError(false)}
              />
            </S.WrapperInput>
          </S.Form>
          <S.Horario>
            <S.WrapperDate>
              <S.BoxH1>
                Horário
              </S.BoxH1>
              <S.Date>
                sexta-feira
              </S.Date>
              <S.Date>
                sábado
              </S.Date>
              <S.Date>
                domingo
              </S.Date>
              <S.Date>
                segunda-feira
              </S.Date>
              <S.Date>
                terça-feira
              </S.Date>
              <S.Date>
                quarta-feira
              </S.Date>
              <S.Date>
                quinta-feira
              </S.Date>
            </S.WrapperDate>
            <S.BoxEntradaSaida>
              <S.EntradaSaida>
                <S.BoxH2>
                  Entrada
                </S.BoxH2>
                <S.Date>
                  <input
                    name='entradaSexta'
                    className='time'
                    type="time"
                    {...register('entradaSexta')}
                  />
                </S.Date>
                <S.Date>
                  <input
                    name='entradaSabado'
                    className='time'
                    type="time"
                    {...register('entradaSabado')}
                  />
                </S.Date>
                <S.Date>
                  <input
                    name='entradaDomingo'
                    className='time'
                    type="time"
                    {...register('entradaDomingo')}
                  />
                </S.Date>
                <S.Date>
                  <input
                    name='entradaSegunda'
                    className='time'
                    type="time"
                    {...register('entradaSegunda')}
                  />
                </S.Date>
                <S.Date>
                  <input
                    name='entradaTerca'
                    className='time'
                    type="time"
                    {...register('entradaTerca')}
                  />
                </S.Date>
                <S.Date>
                  <input
                    name='entradaQuarta'
                    className='time'
                    type="time"
                    {...register('entradaQuarta')}
                  />
                </S.Date>
                <S.Date>
                  <input
                    name='entradaQuinta'
                    className='time'
                    type="time"
                    {...register('entradaQuinta')}
                  />
                </S.Date>
              </S.EntradaSaida>
              <S.EntradaSaida>
                <S.BoxH2>
                  Saída
                </S.BoxH2>
                <S.Date>
                  <input
                    name='saidaSexta'
                    className='time'
                    type="time"
                    {...register('saidaSexta')}
                  />
                </S.Date>
                <S.Date>
                  <input
                    name='saidaSabado'
                    className='time'
                    type="time"
                    {...register('saidaSabado')}
                  />
                </S.Date>
                <S.Date>
                  <input
                    name='saidaDomingo'
                    className='time'
                    type="time"
                    {...register('saidaDomingo')}
                  />
                </S.Date>
                <S.Date>
                  <input
                    name='saidaSegunda'
                    className='time'
                    type="time"
                    {...register('saidaSegunda')}
                  />
                </S.Date>
                <S.Date>
                  <input
                    name='saidaTerca'
                    className='time'
                    type="time"
                    {...register('saidaTerca')}
                  />
                </S.Date>
                <S.Date>
                  <input
                    name='saidaQuarta'
                    className='time'
                    type="time"
                    {...register('saidaQuarta')}
                  />
                </S.Date>
                <S.Date>
                  <input
                    name='saidaQuinta'
                    className='time'
                    type="time"
                    {...register('saidaQuinta')}
                  />
                </S.Date>
              </S.EntradaSaida>
            </S.BoxEntradaSaida>
          </S.Horario>
        </S.WrapperForm>
        <S.DivRight>
          <S.BoxRestaurante>
            <CardRestaurant height="95%" width="55%" imgUrl={SiSenor} fontSizeName="1.3rem" fontSizeAddress="1.1rem" name={restaurantName} address={addressData.localidade || ''} bairro={addressData.bairro} colorCircle1="orange" colorCircle2="orange" colorCircle3="orange" colorCircle4="orange" colorCircle5="grey" />
          </S.BoxRestaurante>
          <S.BoxDescricao>
            <S.Descricao>
              <S.LabelDescricao>
                Descrição
              </S.LabelDescricao>
              <textarea className='descricao' name="descricao" cols="30" rows="10" {...register('descricao')} />
            </S.Descricao>
            <S.WrapperButtons>
              <S.LabelDescricao>
                Menu
              </S.LabelDescricao>
              <S.Buttons>
                <S.ButtonDescricao backgorundColor='#D9D9D9' color='black' imgUrl={Cardapio} />

                <S.ButtonDescricao backgorundColor='#FCA311' color='white'>Salvar</S.ButtonDescricao>
              </S.Buttons>
            </S.WrapperButtons>
          </S.BoxDescricao>
        </S.DivRight>
      </S.Container>
    </>
  )
}

export default CadastroRestaurante