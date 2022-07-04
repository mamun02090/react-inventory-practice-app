import classes from '../../styles/Inventory.module.css'
import List from '../List'
import ListHeader from '../ListHeader'
import Search from '../Searchbar';
import UseData from '../UseData';
import InventoryBtnFooter from '../InventoryBtnFooter'
export default function Inventory(){
    const {data}= UseData();
    

    return(
        <div className={classes.inventory}>
            <h2 style={{textAlign: 'left', fontSize: '20px'}}>Inventory</h2>
            <div style={{width: '100%', color: 'red', height: '1px', backgroundColor: '#E5E5E6', marginTop: '20px', marginLeft: '-20px'}}></div>
            <div className={classes.inventory_section}>
                <Search className={classes.search}/>
                {console.log(data[0])}

                <table>
                    <ListHeader/>
                    {data.map((list, index)=> <List key={`list_${index}`} date={list.date} title={list.title} details={list.details} status={list.status} quantity={list.quantity} stock={list.stock} unitPrice={list.unitPrice} amount={`$${list.amount.toFixed(2)}`} index={index}/>)}
                </table>
                <InventoryBtnFooter/>
            </div>
        </div>
    )
}