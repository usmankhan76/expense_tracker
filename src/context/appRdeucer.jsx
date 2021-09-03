

export default function AppReducer(state,action) {
    
        if(action.type==="DELETE"){
            //  const newTransaction=state.transactions.filter((item)=>item.id  !==action.pyload)
           return { ...state,
            transactions:state.transactions.filter((item)=>item.id  !==action.payload )  
            // transactions:state.transactions.map(single=>single.id!==action.payload)
        }
           
        }
        if(action.type==="ADDTRANSACTION"){
            return{
                ...state,transactions:[action.payload,...state.transactions]
            }
        }
        // return state
    
}
