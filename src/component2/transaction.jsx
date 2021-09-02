import React,{useContext} from 'react'
import { GolbalContext } from '../context/globalstate'

export default function Transaction({id,text,amount}) {
    //  const {id,text,amount}=transaction;
    console.log(id);
    const sign=amount<0 ? '-' :'+'; 
    const {deleteTransaction}=useContext(GolbalContext)
    return (
        <li className={amount<0? "minus":"plus"} 
        key={id}>
         {text}
          <span>{sign}${Math.abs(amount)}</span>
          <button className="delete-btn" onClick={()=>{deleteTransaction(id)}}>x</button>
        </li> 
    )
}
