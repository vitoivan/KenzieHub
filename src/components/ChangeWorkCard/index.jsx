import { StyledContainer } from './styles';
import Mark from '../../assets/image/mark.svg';
import Input from '../../components/Input'
import { StyledTextArea } from '../../pages/singup/styles'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
const ChangeWorkCard = ({ work, setUser, user}) => {

  const { title, description, id } = work;
  const [inputTitle, setInputTitle] = useState(title);
  const [inputDescription, setInputDescription] = useState(description);
  const history = useHistory()

  const handleEdit = () => {
      const token = localStorage.getItem('@KenzieHub token');
      const data = {
        title: inputTitle,
        description: inputDescription
      }
      axios({
        method: 'put',
        url: `https://kenziehub.me/users/works/${id}`,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then( response => {
        
        const data = response.data;
        const newWorks = user.works.map( work => {
          if(work.id === data.id){
            return data
          }else{
            return work
          }
        })
        setUser({...user, works: newWorks});
        toast.success('Work successfully updated', {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }).catch( e => {
        toast.error('Can not update this work', {
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


  const handleDelete = () => {
    const token = localStorage.getItem('@KenzieHub token');
    axios({
        method: 'delete',
        url: `https://kenziehub.me/users/works/${id}`,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then( response => {

        const newWorks = user.works.filter( work => work.id !== id);
        setUser({...user, works: newWorks})

        toast.success('Work successfully deleted', {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        history.push('/profile');
      }).catch( e => {
        toast.error('Can not delete this work', {
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

  return(
    <StyledContainer>
     <div>
       <h4>Title</h4>
        <Input value={inputTitle} setValue={setInputTitle} register={undefined} />
     </div>
      <div>
        <h4>Decsription</h4>
        <StyledTextArea rows={7} value={inputDescription} onChange={e => setInputDescription(e.target.value)} />
      </div>
    <button className='delete'><img src={Mark} alt="Delete"  onClick={handleDelete} /></button>
    <button className='save' onClick={handleEdit} >Save changes</button>
    </StyledContainer>
  )
}

export default ChangeWorkCard;