import { StyledContainer } from './styles';
import profilePic from '../../assets/image/Profile-pic.svg';

const UserCard = ({ quarter, name}) => {

  return(
    <StyledContainer className='user-card'>
      <div>
          <img src={profilePic} alt="Profile" />
          <h3>{name}</h3>
      </div>
      <span>Q{quarter}</span>
    </StyledContainer>

  )
}

export default UserCard;