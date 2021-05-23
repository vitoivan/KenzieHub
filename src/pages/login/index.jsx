import StyledInput from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import { StyledContainer } from './styles';
import logo from '../../assets/image/Logo-login.svg';
import { Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LoginAnimation, LoginTransition } from '../../assets/js/animations';
import { LoginSchema } from '../../assets/js/schemas/schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = ({ setAuth, setUser, auth }) => {  

  const history = useHistory();
  const { register, handleSubmit, formState:{ errors: formError } } = useForm({
    resolver: yupResolver(LoginSchema)
  })
  if(auth){
    return <Redirect to='/profile'/>
  }

  const handleLogin = data => {

    axios({
      method:'post',
      url: `https://kenziehub.me/sessions/`,
      data: data
    }).then( response => {
      setUser(response.data.user);
      setAuth(true);
      localStorage.setItem('@KenzieHub token', response.data.token);
      localStorage.setItem('@KenzieHub user', JSON.stringify(response.data.user));
      history.push('/profile');

    }).catch(e => {
      toast.error('Login or password is wrong', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      })
    })
  }

  return(
    <motion.div
      initial='in'
      animate='to'
      exit='out'
      variants={LoginAnimation}
      transition={LoginTransition}
    >

      <StyledContainer>
          <Link to='/'><img className='logo' src={logo} alt="Kenzie Hub" /></Link>
          <form onSubmit={ handleSubmit(handleLogin) }>

              <StyledInput
              error={formError.email ? true : false}
              helperTxt={formError.email?.message}
              placeholder='Email'
              register={register}
              name='email'
              type='email'
              />

              <StyledInput
              error={formError.password ? true : false}
              helperTxt={formError.password?.message}
              placeholder='Password'
              type='password'
              register={register}
              name='password'
              />

              <p>
              Dont’t have an account? Sing up <Link to='/singup'>here</Link>
              </p>
              <SubmitButton>Login</SubmitButton>
          </form>
      </StyledContainer>
    </motion.div>
    
  )
}
export default Login;