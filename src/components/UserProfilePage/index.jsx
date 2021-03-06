import { StyledContainer } from './styles';
import profile from '../../assets/image/profile-user-page.svg';

const Profile = ({ user }) => {

  const { name, course_module, bio, img='', contact } = user;
  return (
    <StyledContainer className='profile'>
      { !!img ? <img src={img} alt="Profile" /> : (
          <img className='profile' src={profile} alt="Profile" />
      )}
        <div className="about">
          <h1>{name}</h1>
          <h2>{course_module}</h2>
        </div>
        <p>❝ {bio} ❞</p>
        <p>contact: {contact}</p>
    </StyledContainer>
  )
}

export default Profile;