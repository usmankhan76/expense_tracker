import React from 'react'
import { useState,useContext } from 'react'
import { GolbalContext } from '../context/globalstate'

export default function Addtransaction() {
    const[text,setText]=useState('')
    const[amount,setAmount]=useState()
    const{AddTransaction}=useContext(GolbalContext)
    const HandleNewTransaction=(e)=>{
        e.preventDefault();
          const NewTransaction={
              id:Math.floor(Math.random()*12),
              text,
              amount:+amount
          }
          AddTransaction(NewTransaction)
          setAmount(0)
          setText('')
    }
    return (
        <div>
             <h3>Add new transaction</h3>
      <form onSubmit={HandleNewTransaction} >
        <div className="htmlForm-control">
          <label htmlFor="text">Text</label>
          <input type="text" required="true"  placeholder="Enter text..." 
          value={text}
          onChange={(e)=>{setText(e.target.value)}} />
        </div>
        <div className="htmlForm-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" required="true"   placeholder="Enter amount..." 
          value={amount}
           onChange={(e)=>{setAmount(e.target.value)}}/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
        </div>
    )
}
