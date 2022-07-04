import MenuItems from "./MenuItems";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import classes from '../styles/Menu.module.css';
import '../styles/style.css'
export default function Menu(){
    return(
        <nav className={classes.menu_nav}>
            <NavLink to='/dashboard' className={classes.items}><MenuItems text='Dashboard' icon={faHome}/></NavLink>
            <NavLink to='/inventory' className={classes.items}><MenuItems text='Inventory' icon={faFileInvoice}/></NavLink>
            <NavLink to='/documents' className={classes.items}><MenuItems text='Documents' icon={faFile}/></NavLink>
            <NavLink to='/settings' className={classes.items}><MenuItems text='Settings' icon={faGear}/></NavLink> 
        </nav>
    )
}