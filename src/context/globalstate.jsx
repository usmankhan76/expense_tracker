import React, { createContext,useReducer } from "react";
import AppReducer from "./appRdeucer";
// const context=createContext()
const initialState={
    transactions:[

    ]
}
export const GolbalContext=createContext(initialState)

export const GolbalProvider=({children})=>{
const[state,dispatch]=useReducer(AppReducer,initialState)
function deleteTransaction(id){
    console.log("i am chaling"); 
     dispatch({type:'DELETE',
           payload:id})
}
function AddTransaction(transaction){
     dispatch({
         type:'ADDTRANSACTION',
           payload:transaction})
}
return <GolbalContext.Provider value={{
    transactions:state.transactions,
    deleteTransaction,
    AddTransaction
    }}>
       {children}
</GolbalContext.Provider>
}