import classes from '../styles/Wrapper.module.scss'

const Wrapper = ({children}) => {
    return <div className = {classes.wrapper}> {children} </div>
}

export default Wrapper