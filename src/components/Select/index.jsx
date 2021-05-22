import { useState } from 'react';
import { StyledSelect } from './styles';
import arrow from '../../assets/image/select-arrow.svg';
// import arrow from '../../assets/image/select-arrow.svg';


const Select = ({ options, value='', setValue }) => {

  const [openned, setOpenned] = useState(false);

  const handleSelect = (value) => {
    setValue(value);
  }

  const beBlur = (e) =>  e.target.blur();

  const toggleOpenned = () => setOpenned(!openned)
  return (
    
      <StyledSelect className='select' onClick={toggleOpenned}>
      {  /* eslint-disable-next-line */ }
        <input type="text" onFocus={beBlur} onChange={ e => setValue(e.target.value) } value={value} maxLength={0} minLength={0} id='select-input' />
        <img src={arrow} alt="Arrow" />
        {
          openned && (
            <>
              {
               options.map( (option, index) => <div  key={index} className='option' onClick={ e => handleSelect(e.target.innerText) }>{ option }</div>) 
              }
            </>
          )
        }
      </StyledSelect>
  )
}

export default Select;