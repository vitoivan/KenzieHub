import { StyledContainer } from './styles';
import Tech from '../TechCard'

const Techs = ({ techs }) => {

  return(
    <StyledContainer >
      <h2>Technologies</h2>
      <div className='tech-container'>
        {
          techs.length > 0 && (
            techs.map( (tech) => {
              return <Tech key={tech.id} status={ tech.status } title={tech.title}/>
            })
          )
        }
      </div>
    </StyledContainer>

  )
}

export default Techs;