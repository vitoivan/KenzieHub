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
import { StyledTextArea } from '../singup/styles';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addTechSchema, addJobSchema } from '../../assets/js/schemas/schema';
import Button from '../../components/SubmitButton';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddSomething = ({ auth, setUser, user }) => {

  const [inputValue, setInput] = useState('Tech');
  const [TechLevel, setTechLevel] = useState('Iniciante');
  const { register, handleSubmit, formState:{ errors: formError } } = useForm({
    resolver: yupResolver( inputValue === 'Tech' ? addTechSchema : addJobSchema )
  })
  
  if(!auth){
   return  <Redirect to='/login' />
  }

  const handleAdd = data => {
    if(inputValue === 'Tech'){
      const token = localStorage.getItem('@KenzieHub token');
     const dataToSend = {
        title: data.title,
        status: TechLevel,
      }
      axios({
        method: 'post',
        url: `https://kenziehub.me/users/techs`,
        data: dataToSend,
        headers:{ Authorization: `Bearer ${token}`  }
      })
      .then( response => {
        if(user.techs){
          setUser({ ...user, techs: [...user.techs, response.data] })
        }else{
          setUser({ ...user, techs: [response.data] })
        }
        toast.success('Technology successfully added', {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        })
      }).catch( e => toast.error('Unable to add a new tech', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      }))

    }else{
      const token = localStorage.getItem('@KenzieHub token');
      const dataToSend = {
        title: data.title,
        description: data.description,
        deploy_url: 'https://kenziehub.me'
      }
      axios({
        method: 'post',
        url: `https://kenziehub.me/users/works`,
        data: dataToSend,
        headers:{ Authorization: `Bearer ${token}`  }
      })
      .then( response => {
        if(user.works){
          setUser({ ...user, works: [...user.works, response.data] })
        }else{
          setUser({ ...user, works: [response.data] })
        }
        toast.success('Work successfully added', {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        })
      }).catch( e => toast.error('Unable to add a new work', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      }))
    }

  }


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
    <form onSubmit={handleSubmit(handleAdd)}>
    {   
      inputValue === 'Job' && (
        <div className='tech-content'>
          <StyledInput
          error={formError.title ? true : false}
          helperTxt={formError.title?.message}
          placeholder='Job title'
          register={register}
          name='title'
          /> 

        <StyledTextArea {...register("description")} cols={25} rows={8} maxLength={200} placeholder='Bio'/>
        </div>
      )
    }
    {   
      inputValue === 'Tech' && (
        <div className='tech-content'>
          <StyledInput
          helperTxt={formError.title?.message}
          error={formError.title ? true : false}
          placeholder='Tech title'
          name='title'
          register={register}
          /> 
 
         Status:<Select register={register} text='status' options={['Iniciante', 'Intermediário', 'Avançado']} value={ TechLevel } setValue={ setTechLevel } />

        </div>
      )
    }
    <Button>Add {inputValue}</Button>
    </form>
    </StyledContainer>
    </motion.div>
    </>
    
  )
}
export default AddSomething;