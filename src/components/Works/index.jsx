import { StyledContainer } from './styles';
import Work from '../Work'

const Works = ({ works }) => {
  return(
    <StyledContainer >
      <h2>Works</h2>
      <div className='work-container'>
      {
       works && works.length > 0 && works.map( work => <Work work={work} key={work.id} />)
      }
      </div>

    </StyledContainer>
  )
}
export default Works;