import { StyledContainer } from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const TechCard = ({ status, title='', }) => {

    let percentage = 20;
    if(status === 'Intermediário'){
      percentage = 45;
    }
    if(status === 'Avançado'){
      percentage = 90 ;
    }

  return(
    <StyledContainer percent={percentage} className='tech' >
      <h3>{ title }</h3>
      <div>
      <CircularProgress variant={!!percentage ? 'determinate' : 'indeterminate'} thickness={5} value={percentage} size={80}/>
      <p>{ percentage <= 25 ? "Noob"  : percentage <= 50 ? 'Ok' : 'God'}</p>
      </div>
    </StyledContainer>
  )
}

export default TechCard;