import { InputContainer } from './styles'

const Input = ({ placeholder ,error=false, helperTxt='', name, register, type='text', defaultValue='', min, max, value, setValue}) => {

  const haveHookForm = register !== undefined;

  return (
    <InputContainer error={error}>
     {
        haveHookForm ? (
          <>
          {  error && <p className='error'>* {helperTxt}</p> }
          <input min={min}
          max={max} 
          defaultValue={defaultValue} 
          placeholder={placeholder} 
          autoComplete='off'  
          {...register(name) } 
          type={type}/>
          </>
        ) : !!value === false ? (
           <>
              {  error && <p className='error'>* {helperTxt}</p> }
              <input 
              min={min} 
              max={max}
              defaultValue={defaultValue} 
              placeholder={placeholder} 
              autoComplete='off'
              type={type}/>
           </>
        ) : (
         <>
         {  error && <p className='error'>* {helperTxt}</p> }
         <input 
         min={min} 
         max={max}
         placeholder={placeholder} 
         autoComplete='off'
         value={value}
         onChange={e => setValue(e.target.value)}
         type={type}/>
      </>

        )
     }
      </InputContainer>
    
    
  )
}
export default Input;