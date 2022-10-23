import classes from '../styles/Button.module.css';

const Button = ({value, onClick}) => {
  if ((isNaN(value) && value === '←') || (isNaN(value) && value === '=')){
    return (
      <button className = {classes.arrow} onClick = {onClick}>{value}</button>
    )
  }else if (isNaN(value)){
    return (
      <button className = {classes.nan} onClick = {onClick}>{value}</button>
    )
  }else if (value === ''){
    return (
      <button className = {classes.empty} onClick = {onClick}>{value}</button>
    )
  }else{
    return (
      <button className = {classes.button} onClick = {onClick}>{value}</button>
    )
  }
  
}

export default Button