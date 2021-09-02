import { Button } from '@material-ui/core';
import React,{useContext, useState} from 'react'
import { GolbalContext } from '../context/globalstate'

export default function Incomeexpense() {
  
  const takeData=useContext(GolbalContext)
  const income=takeData.transactions.map((single)=>single.amount);
  const sum=income
  .filter((sinlgeAmount)=>sinlgeAmount>0)
  .reduce((acc,cur)=>(acc+=cur),0)
  .toFixed(2);
  const expense=income.filter(item=>item<0).reduce((acc,cu)=>(acc-=cu),0).toFixed(2)
  // const expense=(income.filter(item=>item<0).reduce((acc,cu)=>(acc-=cu),0)-1).toFixed(2)
  const [state,setState]=useState(expense)
  console.log("This is the expense",state)
    return (
      <>
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus"> ${sum}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p  className="money minus">${Math.abs(state)}</p>
        </div>
      </div>  
        <div><button className="btn" >Remove Expense </button></div>
      </>
    )
    
}
