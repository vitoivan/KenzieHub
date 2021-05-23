import { motion } from 'framer-motion';
import { Redirect, Link } from 'react-router-dom';
import BackArrow from '../../assets/image/back-arrow.svg';
import { SettingsAnimation, SettingsTransition } from '../../assets/js/animations';
import { BG } from '../settings/styles';
import { StyledContainer } from './styles';
import Select from '../../components/Select';
import { useState } from 'react';
import AllTechs from '../../components/ChangeTechCard'
import AllWorks from '../../components/ChangeWorkCard'



const EditTech = ({ auth, setUser, user }) => {

  const [selectValue, setSelect] = useState('Techs');

  if(!auth){
    return  <Redirect to='/login' />
  }
  return (
    <>
      <BG/>
      <motion.div
      initial='in'
      animate='to'
      exit='out'
      variants={SettingsAnimation}
      transition={SettingsTransition}
      >
      <StyledContainer>
      
     <header>
       <Link to='/profile'><img src={BackArrow} alt="Back" /></Link>
        <Select options={['Techs', 'Works']} value={ selectValue } setValue={setSelect} spacing={15}/>
     </header>
     
       <h1>Edit</h1>
        { 
          selectValue === 'Techs' ? (
            <div className='all-techs'>
             {
                user.techs.map( (tech, index) => {
                return <AllTechs tech={tech} key={index} user={user} setUser={setUser} />
                })
             }
            </div>
          ) : (
          // eslint-disable-next-line
            user.works.map( (work, index) => {
              if(work){
                return <AllWorks work={work} key={index} setUser={setUser} user={user}/>
              }
           
            })
          )
        }


      </StyledContainer>
    

    </motion.div>
    </>
  )
}

export default EditTech;