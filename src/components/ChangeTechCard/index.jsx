import { StyledContainer } from './styles';
import Select from '../Select';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ChangeTechCard = ({ tech, setUser, user,}) => {
  

  const { title, status, id } = tech;
  const [select, setSelect] = useState(status);

 useEffect( () => {
    
  
 }, [select])

 const handleSave = () => {
  
    const token = localStorage.getItem('@KenzieHub token');
    axios({
      method: 'put',
      url: `https://kenziehub.me/users/techs/${id}`,
      data: {status: select},
      headers: { Authorization: `Bearer ${token}` }
    }).then( response => {

      const data = response.data;
      const newTechs = user.techs.map( tech => tech.id === data.id ? data : tech);
      setUser({...user, techs: newTechs})



      toast.success('Technology successfully updated', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      })
    }).catch( e => {
      toast.error('Can not update this tech', {
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
 const handleDelete = () => {
  
    const token = localStorage.getItem('@KenzieHub token');
    axios({
      method: 'delete',
      url: `https://kenziehub.me/users/techs/${id}`,
      headers: { Authorization: `Bearer ${token}` }
    }).then( response => {
      const newTechs = user.techs.filter( tech => tech.id !== id );
      setUser({...user, techs: newTechs});
      toast.success('Tech successfully deleted', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }).catch( e => {
      toast.error('Can not delete this tech', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    })
 }

  return (
    <StyledContainer>
      <div>
        <h3>{ title }</h3>
        <p>Current lvl: <strong> { status }</strong></p>
      </div>
      <Select  value={select} setValue={setSelect} options={ ['Iniciante', 'Intermediário', 'Avançado'] }/>
      <button onClick={ handleSave }>Save changes</button>
      <button  className='remove' onClick={ handleDelete }>Delete</button>
    </StyledContainer>
  )
}
export default ChangeTechCard;