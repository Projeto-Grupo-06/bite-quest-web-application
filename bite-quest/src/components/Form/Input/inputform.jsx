
import * as S from './styles';

export const InputForm = (props) => {

  return (
    <>

      <S.Containinput>
        <S.Labelform>{props.text}</S.Labelform>
        <S.Inputform name={props.name} onChange={props.onChange} />
      </S.Containinput>


    </>
  );
};

export default InputForm;


