import React from 'react'
import { GolbalContext } from '../context/globalstate'
import { useContext } from 'react'
import Transaction from './transaction'
export default function Transactionlist() {
    const takeData=useContext(GolbalContext)
    return (
        <div>
            <h3>History</h3>
      <ul className="list">
          {takeData.transactions.map((transaction)=>{
           return <Transaction key={transaction.id} {...transaction}/>    
          })}
       
      </ul>
        </div>
    )
}
