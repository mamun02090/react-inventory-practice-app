import classes from '../styles/List.module.css';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowsUpDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function ListHeader(){

    return(
        <tbody>
            <tr className={`${classes.list} ${classes.list_header}`} >
            
            <td className={classes.checkbox}><input type='checkbox' /></td>
            <td className={classes.date}>Date Updated <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon></td>
            <td>Title <FontAwesomeIcon icon={faArrowsUpDown}></FontAwesomeIcon></td>
            <td className={classes.details}>Details</td>
            <td className={classes.status_header}><span>Status</span></td>
            <td className={classes.quantity_header}><span>Quantity</span></td>
            <td className={classes.unit_price}>Unit Price</td>
            <td>Amount <FontAwesomeIcon icon={faArrowsUpDown}></FontAwesomeIcon></td>
        </tr>    
        </tbody>
        
    )
}