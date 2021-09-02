import React from 'react'
import { GolbalContext } from '../context/globalstate'
import { useContext } from 'react'
export default function Balance() {
  const balance=useContext(GolbalContext)
  const amounts=balance.transactions.map((single)=>single.amount);
 
  const total = amounts.reduce((accumolator,currentvalue)=>(accumolator+=currentvalue),0).toFixed(2)
  
    return (
        <div>
         ${total}
        </div>
    )
}
