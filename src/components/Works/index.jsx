import { StyledContainer } from './styles';
import Work from '../Work'

const Works = ({ works }) => {
  return(
    <StyledContainer >
      <h2>Works</h2>
      <div className='work-container'>
      {
       works && works.length > 0 && works.map( (work,index) => {
        
          return <Work work={work} key={index} />
        
       })
      }
      </div>

    </StyledContainer>
  )
}
export default Works;