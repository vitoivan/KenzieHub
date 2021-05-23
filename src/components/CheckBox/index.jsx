import img from '../../assets/image/mark.svg';
import { StyledContainer } from './styles';

const CheckBox = ({ check, setCheck }) => {

  return(
    <StyledContainer onClick={ () => setCheck(!check) } >
      <input type="checkbox" id='check' checked={check} readOnly />
      { check &&(<img src={img} alt="Mark" />) }
    </StyledContainer>
  )
}

export default CheckBox;