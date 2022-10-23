import classes from '../styles/Screen.module.css';

const Screen = ({value}) => {
    return (
        <div className = {classes.screen} mode = 'single' max = {50}> {value} </div>
    )
}

export default Screen
