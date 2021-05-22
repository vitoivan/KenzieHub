import { StyledButton } from './styles';
import addTech from '../../assets/image/add-tech.svg';


const AddTech = () => {
  return (
    <StyledButton to='/profile/add'>
      <img src={addTech} alt="Add tech" />
    </StyledButton>
  )
}


export default AddTech;