import { StyledContainer } from './styles';
import User from '../../components/UserProfilePage';
import Techs from '../../components/Techs';
import logo from '../../assets/image/logo-mini.svg';
import logout from '../../assets/image/logout-icon.svg';
import config from '../../assets/image/config-icon.svg';
import { testUser } from '../../assets/js/selects';
import AddTechBtn from '../../components/Addtech'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
import { ProfileAnimation, ProfileTransition } from '../../assets/js/animations';


const Profile = () => {
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
        <Link to='/profile/config'>  <img src={config} alt="User settings" /></Link>
        <Link to='/'><img src={logo} alt="Kenzie Hub" /></Link>
        <Link to='/login'><img src={logout} alt="Logout" /></Link>

      </header>
      <main>
        <User user={testUser}/>
        <Techs />
      </main>
    </StyledContainer>
    </motion.div>
      <AddTechBtn />
        </>
  )
}

export default Profile;