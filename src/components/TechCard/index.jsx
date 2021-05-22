import { StyledContainer } from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const TechCard = ({ percentage=0, title=''}) => {




  return(
    <StyledContainer percent={percentage} className='tech' >
      <h3>{ title }</h3>
      <CircularProgress variant={!!percentage ? 'determinate' : 'indeterminate'} thickness={5} value={percentage} size={80}/>
      <p>{ percentage <= 25 ? "Noob"  : percentage <= 50 ? 'Ok' : 'God'}</p>
    </StyledContainer>
  )
}

export default TechCard;