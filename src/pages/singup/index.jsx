import logo from '../../assets/image/logo-mini.svg';
import { StyledContainer, StyledTextArea } from './styles';
import StyledInput from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SingupAnimation, SingupTransition } from '../../assets/js/animations';
import { RegisterSchema } from '../../assets/js/schemas/schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';




const Singup = ({ auth }) => {

  const { register, handleSubmit, formState:{ errors: formError } } = useForm({
    resolver: yupResolver(RegisterSchema)
  })
  
  if(auth){
    return <Redirect to='/profile'/>
  }



  const handleRegister = data => {
    axios({
      method:'post',
      url: `https://kenziehub.me/users/`,
      data: data
    }).then( response => {
      toast.success('Account successfully registerd', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }).catch( e => toast.error('Email already registered or server unabailable', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    }));
  }

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
        <form onSubmit={ handleSubmit(handleRegister) }>
          <StyledInput 
            placeholder='Name'
            register={ register }
            helperTxt={formError.name?.message}
            error={formError.name ? true : false}
            type='text'
            name='name'
            />
          <StyledInput 
            placeholder='Email'
            register={ register }
            helperTxt={formError.email?.message}
            error={formError.email ? true : false}
            type='email'
            name='email'
            />
          <StyledInput 
            placeholder='Password'
            register={ register }
            helperTxt={formError.password?.message}
            error={formError.password ? true : false}
            type='password'
            name='password'
            />
          <StyledInput 
            placeholder='Social media / contact'
            register={ register }
            helperTxt={formError.contact?.message}
            error={formError.contact ? true : false}
            type='text'
            name='contact'
            />
          <StyledInput 
            placeholder='Your module (quarter)'
            error={formError.quarter ? true : false}
            helperTxt={formError.quarter?.message}
            register={ register }
            name='course_module'
            type='Number'
            min={1}
            max={4}
            />
          <StyledTextArea cols={25} rows={4} maxLength={200} placeholder='Bio (optional)'{ ...register('bio') }/>

          <div className="haveAcc">
          <p>Already have an account? login <Link to='/login'>here</Link></p>
          </div>
          <SubmitButton>Sing up</SubmitButton>
        </form>
      </main>
    </StyledContainer>

    </motion.div>
  )
}

export default Singup;