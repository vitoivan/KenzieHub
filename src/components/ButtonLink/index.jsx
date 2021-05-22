import { Button } from './styles';


const StyledButton = ({ children, to='/' }) => {


  return(
      <Button className='button' to={to}>{ children }</Button>
  )

}

export default StyledButton