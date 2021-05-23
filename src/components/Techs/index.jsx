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
              let percentage = 25;
              if(tech.status === 'Intermediário'){
                percentage = 50;
              }
              if(tech.status === 'Avançado'){
                percentage = 100;
              }
              return <Tech key={tech.id} percentage={ percentage } title={tech.title}/>
            })
          )
        }
      </div>
    </StyledContainer>

  )
}

export default Techs;