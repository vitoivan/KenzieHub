import { StyledContainer } from './styles';
import Tech from '../TechCard'
import { Link } from 'react-router-dom';

const Techs = ({ techs }) => {

  return(
    <StyledContainer >
      <Link to='/profile/techs' >Technologies</Link>
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