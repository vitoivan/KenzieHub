import StyledInput from '../../components/Input';
import ButtonLink from '../../components/ButtonLink';
import { StyledContainer } from './styles';
import logo from '../../assets/image/Logo-login.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LoginAnimation, LoginTransition } from '../../assets/js/animations';

const Login = () => {
  return(

    <motion.div
      initial='in'
      animate='to'
      exit='out'
      variants={LoginAnimation}
      transition={LoginTransition} 
    >
      <StyledContainer>
          <Link to='/'><img className='logo' src={logo} alt="Kenzie Hub" /></Link>
          <form>
              <StyledInput
              helperTxt='Email is required'
              placeholder='Email'/>

              <StyledInput
              error={true}
              helperTxt='Password is required'
              placeholder='Password'/>

              <p>
              Dont’t have an account? Sing up <Link to='/singup'>here</Link>
              </p>
              <ButtonLink to='/profile'>Login</ButtonLink>
          </form>
      </StyledContainer>
    </motion.div>
    
  )
}
export default Login;