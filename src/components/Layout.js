import Navbar from "./Navbar";
import '../styles/style.css'
import Menu from "./Menu";


export default function Layout({children}){
    return(
        <>
            <Navbar/>
            
            <div className="container">
                <div className="contents">
                    <Menu/>
                    <div className="vertical_line"></div>
                     <div className="content">{children}</div>
                </div>
            </div>
        </>
    )
}