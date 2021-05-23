import StyledInput from '../../components/Input';
import { StyledTextArea } from '../singup/styles';
import { StyledContainer, BG } from './styles.js';
import { motion } from 'framer-motion';
import CheckBox from '../../components/CheckBox'
import { useState } from 'react';
import { SettingsAnimation, SettingsTransition } from '../../assets/js/animations';
import BackArrow from '../../assets/image/back-arrow.svg';
import { Link } from 'react-router-dom';
import Button from '../../components/SubmitButton';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SettingsSchema, SettingsWithoutPasswordSchema } from '../../assets/js/schemas/schema';
import axios from 'axios';
import { toast } from 'react-toastify';

const modulo1 = "Primeiro módulo (Introdução ao Frontend)"
const modulo2 = "Segundo módulo (Frontend Avançado)";
const modulo3 = "Terceiro módulo (Introdução ao Backend)";
const modulo4 = "Quarto módulo (Backend Avançado)";

const Settigs = ({ auth, user, setUser }) => {


const [check, setCheck] = useState(false);
const { register, handleSubmit, formState:{ errors: formError } } = useForm({
  resolver: yupResolver(check ? SettingsSchema : SettingsWithoutPasswordSchema)
})

const handleChangeSettings = data => {

  if(data.course_module === 1){
    data.course_module = "Primeiro módulo (Introdução ao Frontend)"
  }
  if(data.course_module === 2){
    data.course_module = "Segundo módulo (Frontend Avançado)"
  }
  if(data.course_module === 3){
    data.course_module = "Terceiro módulo (Introdução ao Backend)"
  }
  if(data.course_module === 4){
    data.course_module = "Quarto módulo (Backend Avançado)"
  }

  console.log(data)
  const token = localStorage.getItem('@KenzieHub token');
  axios({
    method: 'put',
    url: `https://kenziehub.me/profile`,
    data: data,
    headers: { Authorization: `Bearer ${token}`}
  }).then( response => {
    setUser(response.data);
    toast.success('Settings successfully updated', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    })
  }).catch(e => toast.error('Unable to update settings', {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  }));
  
}
if(!auth){
  return  <Redirect to='/login' />
}
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
      <form onSubmit={handleSubmit(handleChangeSettings)} >
        <h1>User settings</h1>
        <StyledInput 
          placeholder='Profile Name'
          register={register}
          name='name'
          defaultValue={user.name}
          />
        <StyledInput 
          placeholder='Email'
          register={register}
          defaultValue={user.email}
          name='email'
          />
        <StyledInput 
          placeholder='Contact'
          register={register}
          defaultValue={user.contact}
          name='contact'
          error={formError.contact ? true : false}
          helperTxt={formError.contact?.message}
          />
        <StyledInput 
          placeholder='Course Module'
          register={register}
          defaultValue={user.course_module === 1 ? modulo1 : user.course_module === 2 ? modulo2 : user.course_module === 3 ? modulo3 : user.course_module === 4 ? modulo4 : user.course_module }
          name='course_module'
          error={formError.course_module ? true : false}
          helperTxt={formError.course_module?.message}
          type='Number'
          max={4}
          min={1}
          />
        <StyledTextArea 
          {...register('bio')}
          defaultValue={user.bio}
          placeholder='Bio'
          rows={9}
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
                placeholder='Old Password'
                register={register}
                name='old_password'
                type='password'
                error={formError.old_password ? true : false}
              />

              <StyledInput 
                placeholder='New Password'
                register={register}
                name='password'
                type='password'
                error={formError.password ? true : false}
                helperTxt={formError.password ? 'Invalid Password' : ''}
              />
              </motion.div>
            )
          }
          <Button>Save</Button>
          </form>
      </StyledContainer>
    </motion.div>
  </>
  )
}

export default Settigs;