import { StyledContainer } from './styles';
import Tech from '../TechCard'

const Techs = () => {

  return(
    <StyledContainer >
      <h2>Technologies</h2>
      <div className='tech-container'>
        <Tech percentage={ 100 } title='Node'/>
        <Tech percentage={ 25 } title='JavaScript'/>
        <Tech percentage={ 50 } title='JavaScript'/>
        <Tech percentage={ 25 } title='JavaScript'/>
        <Tech percentage={ 100 } title='JavaScript'/>
        <Tech percentage={ 50 } title='JavaScript'/>
        <Tech percentage={ 100 } title='JavaScript'/>
        <Tech percentage={ 100 } title='JavaScript'/>
        <Tech percentage={ 100 } title='JavaScript'/>
        <Tech percentage={ 100 } title='JavaScript'/>
        <Tech percentage={ 100 } title='JavaScript'/>
        <Tech percentage={ 100 } title='JavaScript'/>
        <Tech percentage={ 100 } title='JavaScript'/>
      </div>
    </StyledContainer>

  )
}

export default Techs;