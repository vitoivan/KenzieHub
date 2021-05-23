import logo from '../../assets/image/logo-mini.svg';
import { StyledContainer, Header, StyledMain } from './styles';
import ButtonLink from '../../components/ButtonLink';
import { motion } from 'framer-motion';
import { HomeAnimation, HomeTransition } from '../../assets/js/animations';

const Home = ({ auth }) => {

  return (
    <motion.div
      initial='in'
      animate='to'
      exit='out'
      variants={HomeAnimation} 
      transition={HomeTransition}
      >
       <StyledContainer>
        <Header>
          <img src={logo} alt="Kenzie Hub" />
        </Header>
        <StyledMain>
        <h1>Kenzie Academy Hub</h1>
        <p>This project was done by 
          <a href="https://www.linkedin.com/in/victor-ivan">Victor Ivan</a>
          , with the intention of imitating a social network, the Kenzie Academy Hub.
          You can follow the entire creation process 
          <a href="https://www.notion.so/Kenzie-Hub-bd7ce5eef7af4a11b8277a1531728df3">here.</a> 
          The purpose of this project is to train and practice various React techniques and libraries together.

          
          </p>     
        </StyledMain>
        {
     
          auth === false ? (
          <div className='buttons'>
            <ButtonLink to='/login'>Login</ButtonLink>
            <ButtonLink to='/singup'>Singup</ButtonLink>
          </div>
          ):(
            <ButtonLink to='/profile'>Go to profile</ButtonLink>
          )
        }
    </StyledContainer>
    </motion.div>
   
  )
}

export default Home;