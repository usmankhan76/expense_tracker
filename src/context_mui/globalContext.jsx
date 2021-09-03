import React,{ createContext, useReducer } from "react"
import Reducer from "./reducer"

const initialState={
    transactions:[
        // {id:Math.floor(Math.random()*12),
        // text:"Flower",
        // amount:40 },
        // {id:Math.floor(Math.random()*12),
        // text:"Bee",
        // amount:50 },
        // {id:Math.floor(Math.random()*12),
        // text:"Honey",
        // amount:-40 },
    ]
}
export const GlobalContext=createContext(initialState)  

export default function GlobalContextProvider({children}) {
    const [state,dispatch]=useReducer(Reducer,initialState)
    function addtransaction(transaction){
       return dispatch({
        type:"ADDTRANSACTION",
        payload:transaction
    })}
     function removetransaction(transaction){
        dispatch({
        type:"REMOVETRANSACTION",
        payload:transaction
    })}
    
    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            addtransaction,
            removetransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}
