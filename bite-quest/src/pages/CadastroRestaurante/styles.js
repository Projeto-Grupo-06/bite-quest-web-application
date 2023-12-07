import styled from "styled-components";
import BackgroundImage from "../../assets/backgrey.png"


export const Container = styled.form`

  background-color: black;
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const WrapperForm = styled.div`
  width: 50%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const H1 = styled.p`
  color: white;
  font-size: 2.5rem;
  font-weight: 100;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  height: 45%;
  justify-content: space-around;
`

export const Label = styled.label`
  font-size: 1.3rem;
  color: white;
  font-weight: 100;
`

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  height: 17%;
`

export const WrapperInputEnderecoNumero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65%;
  height: 17%;
`

export const Endereco = styled.div`
  width: 77.5%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Numero = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Horario = styled.div`
  width: 68.82%;
  height: 45%;
  display: flex;
  justify-content: space-between;
`

export const BoxH1 = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  font-size: 2.5rem;
  color: white;
`

export const WrapperDate = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const Date = styled.div`
  width: 100%;
  height: 10%;
  font-size: 1.3rem;
  color: white;
  display: flex;
  align-items: flex-end;
`

export const BoxH2 = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: flex-end;
  font-size: 2rem;
  color: white;
`

export const BoxEntradaSaida = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`

export const EntradaSaida = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const DivRight = styled.div`
  width: 40%;
  height: 85%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #000000a6;
  padding-bottom: 64.5px;
  padding-top: 64.5px;
`

export const BoxRestaurante = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BoxDescricao = styled.div`
  width: 54.5%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Descricao = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
`

export const LabelDescricao = styled.label`
  font-size: 1.3rem;
  color: white;
`

export const WrapperButtons = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const Buttons = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

export const ButtonDescricao = styled.button`
  width: 40%;
  height: 100%;
  font-size: 1.5rem;
  background-color: ${props => props.backgorundColor};
  background-image: url(${props => props.imgUrl});
  background-repeat: no-repeat;
  background-position: center center;
  color: ${props => props.color};
  border-radius: 5px;
  background-size: 25%;
  cursor: pointer;
`