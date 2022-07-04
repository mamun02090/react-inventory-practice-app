import classes from '../styles/InventoryFooter.module.css'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ArrowsWithText from "./ArrowsWithText";
export default function Footer(){
    return(
        <div className={classes.button_footer}>
            <div className={classes.items_number}>
                <ArrowsWithText classProp='' text='10 items per page' arrow={faChevronDown}/>
            </div>
            <div className={classes.page_iteration}>
                <ArrowsWithText classProp={classes.page_number} text='Page 1 of 5' arrow={faChevronDown}/>
                <ArrowsWithText classProp={classes.arrow_direction} text='' arrow={faChevronLeft}/>
                <ArrowsWithText classProp={classes.arrow_direction} text='' arrow={faChevronRight}/>
            </div>
        </div>
        
    )
}