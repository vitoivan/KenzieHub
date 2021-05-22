import StyledInput from '../../components/Input';
import { StyledContainer, BG } from './styles.js';
import { motion } from 'framer-motion';
import CheckBox from '../../components/CheckBox'
import { useState } from 'react';
import { SettingsAnimation, SettingsTransition } from '../../assets/js/animations';
import BackArrow from '../../assets/image/back-arrow.svg';
import { Link } from 'react-router-dom';
import Button from '../../components/ButtonLink';

const Settigs = () => {

const [check, setCheck] = useState(false);

return (
  <>
    <BG />
    <motion.div
      initial='in'
      animate='to'
      exit='out'
      variants={SettingsAnimation}
      transition={SettingsTransition} 
    >
      <StyledContainer>

      <Link to='/profile'><img src={BackArrow} alt="Back" /></Link>
      <form>
        <h1>User settings</h1>
        <StyledInput 
          placeholder='Profile Name'
          />
        <StyledInput 
          placeholder='Profile image url'
          />
        <StyledInput 
          placeholder='Email'
          />
        
          <div className='change-password'>
            <CheckBox check={check} setCheck={setCheck} />
            <p onClick={ () => setCheck(!check) }>I want change my passowrd</p>
          </div>

          {
            check && (
            <motion.div
              initial='in'
              animate='to'
              variants={SettingsAnimation}
              transition={SettingsTransition}>
              <StyledInput 
                placeholder='Password'
              />

              <StyledInput 
                placeholder='New Password'
              />
              </motion.div>
            )
          }
          <Button to='/profile'>Save</Button>
          </form>
      </StyledContainer>
    </motion.div>
  </>
  )
}

export default Settigs;