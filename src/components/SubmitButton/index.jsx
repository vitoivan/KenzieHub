import { StyledButton } from './styles';

const SubmitButton = ({ children }) => {

  return(
    <StyledButton type='submit'>{ children }</StyledButton>
  )
}

export default SubmitButton;