import { BG } from '../settings/styles';
import { Link } from 'react-router-dom';
import BackArrow from '../../assets/image/back-arrow.svg';
import { motion } from 'framer-motion';
import { SettingsAnimation, SettingsTransition } from '../../assets/js/animations';
import Select from '../../components/Select';
import { AddOptions } from '../../assets/js/selects'
import { useState } from 'react';
import { StyledContainer } from './styles';
import StyledInput from '../../components/Input';
import { StyledTextArea } from '../singup/styles'

const AddSomething = () => {

  const [inputValue, setInput] = useState('Tech');
  const [TechLevel, setTechLevel] = useState('Initial')

  return(
    <>
    <BG />
    <motion.div
    initial='in'
    animate='to'
    exit='out'
    variants={SettingsAnimation}
    transition={SettingsTransition}>

    <StyledContainer>
    <Link to='/profile'><img src={BackArrow} alt="Back" /></Link>
    <div className="container">
      <h1>I wanna add a new</h1>
      <Select options={ AddOptions } value={ inputValue } setValue={ setInput } />
    </div>
    {   
      inputValue === 'Job' && (
        <div className='tech-content'>
          <StyledInput
          helperTxt='Email is required'
          placeholder='Email'/> 

        <StyledTextArea cols={25} rows={8} maxLength={200} placeholder='Bio'/>
        </div>
      )
    }
    {   
      inputValue === 'Tech' && (
        <div className='tech-content'>
          <StyledInput
          helperTxt='Email is required'
          placeholder='Tech title'/> 
 
         Status:<Select options={['Initial', 'Intermediate', 'Advanced']} value={ TechLevel } setValue={ setTechLevel } />

        </div>
      )
    }
    </StyledContainer>
    </motion.div>
    </>
    
  )
}
export default AddSomething;