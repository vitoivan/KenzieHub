import { StyledContainer } from './styles'

const Work = ({work}) => {

  return(
    <StyledContainer>
      <h3>{work.title}</h3>
      <p>{work.description}</p>
    </StyledContainer>
  )
}

export default Work;