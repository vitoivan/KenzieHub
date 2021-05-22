import logo from '../../assets/image/logo-mini.svg';
import { StyledContainer, StyledTextArea } from './styles';
import StyledInput from '../../components/Input';
import ButtonLink from '../../components/ButtonLink';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SingupAnimation, SingupTransition } from '../../assets/js/animations'


const Singup = () => {
  return (
    <motion.div
    initial='in'
    animate='to'
    exit='out'
    variants={SingupAnimation} 
    transition={SingupTransition}
    >
      <StyledContainer>
      <header>
        <Link to='/'><img src={logo} alt="Kenzie Hubs" /></Link>
      </header>

      <main>
        <form>
          <StyledInput 
            placeholder='Name'
            error={true}
            helperTxt='Name is required'/>
          <StyledInput 
            placeholder='Email'
            helperTxt='Name is required'/>
          <StyledInput 
            placeholder='Password'
            helperTxt='Name is required'/>
          <StyledInput 
            placeholder='Social media / contact'
            helperTxt='Name is required'/>
          <StyledInput 
            placeholder='Your module (quarter)'
            helperTxt='Name is required'/>
          <StyledTextArea cols={25} rows={4} maxLength={200} placeholder='Bio'/>

          <div className="haveAcc">
          <p>Already have an account? login <Link to='/login'>here</Link></p>
          </div>
          <ButtonLink to='/login'>Sing up</ButtonLink>
        </form>
      </main>
    </StyledContainer>

    </motion.div>
  )
}

export default Singup;