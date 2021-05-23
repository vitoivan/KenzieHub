import { InputContainer } from './styles'

const Input = ({ placeholder ,error=false, helperTxt='', name, register, type='text', defaultValue='', min, max}) => {
  return (
    <InputContainer error={error}>
    { error && <p className='error'>* {helperTxt}</p> }
      <input min={min} max={max} defaultValue={defaultValue} placeholder={placeholder} autoComplete='off'  {...register(name) } type={type}/>
    </InputContainer>
  )
}
export default Input;