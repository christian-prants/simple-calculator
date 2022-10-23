import classes from '../styles/ButtonContainer.module.css'

const ButtonContainer = ({children}) => {
  return (
    <div className = {classes.btncontainer}>{children}</div>
  )
}

export default ButtonContainer