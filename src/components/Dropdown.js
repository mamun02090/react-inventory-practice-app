import classes from '../styles/Dropdown.module.css'

export default function Dropdown({option, className}){
    return(
        <select name="select" className={`${classes.dropdown} ${className}`}>
            <option value={option}>{option}</option>
        </select>
    )
}