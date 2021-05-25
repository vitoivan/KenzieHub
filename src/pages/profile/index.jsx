import { StyledContainer } from './styles';
import User from '../../components/UserProfilePage';
import Techs from '../../components/Techs';
import logo from '../../assets/image/logo-mini.svg';
import logout from '../../assets/image/logout-icon.svg';
import config from '../../assets/image/config-icon.svg';
import AddTechBtn from '../../components/Addtech'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
import { ProfileAnimation, ProfileTransition } from '../../assets/js/animations';
import { Redirect, useHistory } from 'react-router-dom';
import Works from '../../components/Works';
import EditBtn from '../../components/EditBtn'

const Profile = ({ auth, setAuth, setUser, user }) => {

  const history = useHistory();

  if(!auth){
    return  <Redirect to='/login' />
  }
  const buttonClick = () => {
    setAuth(false);
    setUser(null);
    localStorage.removeItem('@KenzieHub token');
    localStorage.removeItem('@KenzieHub user');
    history.push('/login');
  }

  return (
    <>
    <motion.div
    initial='in'
    animate='to'
    exit='out'
    variants={ProfileAnimation} 
    transition={ProfileTransition}
    >
      <StyledContainer>
      <header>
        <Link to='/profile/config'> <img src={config} alt="User settings" /></Link>
        <Link to='/'><img src={logo} alt="Kenzie Hub" /></Link>
        <button onClick={buttonClick} ><img src={logout} alt="Logout" /></button>

      </header>
      <main>
        <User user={user}/>
        <Techs techs={user.techs} />
        <Works works={user.works} />
      </main>
    </StyledContainer>
    </motion.div>
      <AddTechBtn />
      <EditBtn />
        </>
  )
}

export default Profile;