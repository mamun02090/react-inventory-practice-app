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
                    <div style={{height: '100vh', color: 'red', width: '1px', backgroundColor: '#E5E5E6', marginTop: '64px'}}></div>
                     <div className="content">{children}</div>
                </div>
            </div>
        </>
    )
}