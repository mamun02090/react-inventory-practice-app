import classes from '../styles/Dropdown.module.css'

export default function Dropdown({option}){
    return(
        <select name="select" className={classes.dropdown}>
            <option value="starbucks">{option}</option>
        </select>
    )
}