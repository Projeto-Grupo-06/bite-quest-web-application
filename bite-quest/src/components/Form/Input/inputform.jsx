
import * as S from './inputform';

export const InputForm = (props) => {
 

  return (
    <>

      <S.Containinput>
        <S.Labelform>{props.texto}</S.Labelform>
        <S.Inputform/>
      </S.Containinput>


    </>
  );
};

export default InputForm;


