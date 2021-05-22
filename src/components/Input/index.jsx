import { InputContainer } from './styles'

const Input = ({ placeholder ,error=false, helperTxt=''}) => {
  return (
    <InputContainer error={error}>
      { error && <p>* {helperTxt}</p> }
      <input type="text" placeholder={placeholder} autoComplete='off'/>
    </InputContainer>
  )
}
export default Input;