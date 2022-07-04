

import classes from '../styles/List.module.css';


export default function List({date, title, details, status, quantity, stock, unitPrice, amount, index }){
    console.log(Math.random())
    console.log(Math.random())
    let setBgColor= 'green';
    if(status==='In Progress'){
        setBgColor='#F58A28';
    }
    else if(status==='Out of Stock'){
        setBgColor='#F52828';
    }
    return(  
            <tbody>
                <tr key={`list_${Math.random()}`} className={classes.list}>
                    <td className={classes.checkbox}  key={`list_${Math.random()}`}><input type='checkbox' /></td >
                    <td className={classes.date} key={`list_${Math.random()}`}>{date}</td >
                    <td className={classes.title} key={`list_${Math.random()}`}>{title}</td >
                    <td className={classes.details} key={`list_${Math.random()}`}>{details}</td >
                    <td className={classes.status_res} key={`list_${Math.random()}`}><div className={classes.status_text}>{status}</div><div className={classes.status} style={{backgroundColor: `${setBgColor}`}}></div></td >
                    <td className={classes.quantity} key={`list_${Math.random()}`}><p>{quantity}</p>/{stock}</td >
                    <td className={classes.unit_price} key={`list_${Math.random()}`}>{unitPrice}</td >
                    <td className={classes.amount} key={`list_${Math.random()}`}>{amount}</td >   
                </tr>
            </tbody>                                                            
            

    )
}