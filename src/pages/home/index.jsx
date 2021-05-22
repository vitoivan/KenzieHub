import UserCard from '../../components/UserCard'
import Select from '../../components/Select'
import logo from '../../assets/image/logo-mini.svg';
import { homeSelectOptions } from '../../assets/js/selects'
import { StyledContainer, Header, StyledMain } from './styles';
import ButtonLink from '../../components/ButtonLink';
import { motion } from 'framer-motion';
import { HomeAnimation, HomeTransition } from '../../assets/js/animations';
import { useState } from 'react';

const Home = () => {

  const [ selectValue, setSelectValue ] = useState('all');
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
          <div>
            <span>Filter by</span>
            <Select options={homeSelectOptions} value={ selectValue } setValue={ setSelectValue } />
          </div>
        </Header>
        <StyledMain>
        <h1>Our users</h1>
        <div>
          <UserCard quarter='2' name='Victor Ivan'/>
          <UserCard quarter='3' name='User 1'/>
          <UserCard quarter='4' name='Bla  Bla'/>
          <UserCard quarter='1' name='Testando'/>
          <UserCard quarter='2' name='Diff Name'/>
        </div>     
        </StyledMain>
        <div className='buttons'>
          <ButtonLink to='/login'>Login</ButtonLink>
          <ButtonLink to='/singup'>Singup</ButtonLink>
        </div>
    </StyledContainer>
    </motion.div>
   
  )
}

export default Home;