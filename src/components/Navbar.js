import Dropdown from './Dropdown'
import Search from './Searchbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import classes from '../styles/Navbar.module.css';
import image from '../image/Team-Member-3.jpg'
export default function Navbar(){
    return(
        <nav className={classes.mainNav}>
            <div className={`${classes.navitem} ${classes.firstItem}`}>
                <Dropdown option='Starbucks' className={classes.dropdown_arrow}/>
                <Search className={classes.navSearch}/>
            </div>
            <div className={`${classes.navitem} ${classes.secondItem}`}>
                <FontAwesomeIcon className={classes.icon} icon={faBell}></FontAwesomeIcon>
                <img src={image} alt='user'/>
                <Dropdown option='John Doe' className={classes.dropdown_arrow}/>
            </div>
        </nav>
    )
}