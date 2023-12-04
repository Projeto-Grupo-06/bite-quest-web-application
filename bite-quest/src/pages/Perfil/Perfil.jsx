import { useState } from 'react';
import * as S from './styles';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import userPadrao from '../../assets/userPadrao.jpg';
import { useForm } from 'react-hook-form';
import ButtonForm from '../../components/Form/buttons/ButtonForm/ButtonForm';
import LogoBlack from '../../assets/LogoBlack.png';
import ButtonsReplacements from '../../components/Form/buttons/ButtonsReplacement/ButtonsReplacements';
import lixo from "../../assets/lixoo.png"

function Perfil() {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const [showBlur, setShowBlur] = useState(false);




  function atualizarPerfil() {
    // Função para atualizar o perfil
  }


  function sairDaConta() {  //função para sair da conta 
    
    
    
    setShowConfirm(false);  //ocultar div de confirmação
    navigate("/")
  }



  function excluirConta(){     //excluir conta




  setShowBlur(false);
  navigate("/")
  }




  function handleExit() {    
    setShowConfirm(true);
  }

  function handleCancel() {
    setShowConfirm(false);
  }

  function handleImgExcluirClick() {
    setShowBlur(true);
  }

  function handleDivBlurButtonClick() {
    setShowBlur(false);
  }


  return (
    <>
      <S.Container>
        {showConfirm ? (

          <S.DivConfirmacao>
            <S.TextConfirm>Deseja sair da conta?</S.TextConfirm>
            <S.BlockConfirm>
                <S.Buttom backcolor="#FCA311" textcolor="whitesmoke" colorhover="#E69410" onClick={handleCancel}>Não</S.Buttom>
                <S.Buttom backcolor="#E8E8E8" textcolor="#383838"colorhover="#DBDBDB" onClick={sairDaConta}>Sim</S.Buttom>
            </S.BlockConfirm>
          </S.DivConfirmacao>

        ) : (
          <S.DivAreaPerfil>
            <S.DivImagePerfil imgUrl={userPadrao}></S.DivImagePerfil>
            <S.ImgExcluir src={lixo} alt='lixeira'  onClick={handleImgExcluirClick}></S.ImgExcluir>


            <S.Form>
              <S.BlocoInput>
                <label htmlFor="">Nome</label>
                <input className="inputtext" type="text" />
              </S.BlocoInput>
              <S.BlocoInput>
                <label htmlFor="">Email</label>
                <input className="inputtext" type="email" />
              </S.BlocoInput>
            </S.Form>

            <S.Divgroup>
              <S.TextReference onClick={() => navigate('/CadastroRestaurante')}>
                Atualizar restaurante
              </S.TextReference>
            </S.Divgroup>

            <S.DivReplace>
              <S.ButtonCad type="button" onClick={() => navigate('/Descricao')} backgrounColorOne="#EFEFEF">
                VOLTAR
              </S.ButtonCad>
              <S.ButtonLog type="submit" onClick={atualizarPerfil} backgrounColorTwo="#FCA311">
                ATUALIZAR
              </S.ButtonLog>
            </S.DivReplace>

            
          </S.DivAreaPerfil>
        )}





        <S.ButtonExit onClick={handleExit}>Sair</S.ButtonExit>





       {showBlur && (
          <S.DivBlur>
            <S.DivBlockExclusao>
              <S.TextConfirm>Deseja excluir sua conta?</S.TextConfirm>
              <S.BlockConfirm>
                <S.Buttom backcolor="#FCA311" textcolor="whitesmoke" colorhover="#E69410" onClick={handleDivBlurButtonClick}>Não</S.Buttom>
                <S.Buttom backcolor="#E8E8E8" textcolor="#383838"colorhover="#DBDBDB" onClick={excluirConta}>Sim</S.Buttom>
              </S.BlockConfirm>
            </S.DivBlockExclusao>
          </S.DivBlur>
        )}



      </S.Container>
    </>
  );
}

export default Perfil;

