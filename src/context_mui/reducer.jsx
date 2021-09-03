
export default function Reducer(state,action) {
    console.log("action reducer",action.payload);
    if(action.type==="ADDTRANSACTION"){
        return{...state,transactions:[action.payload,...state.transactions]}
    }
    if(action.type==="REMOVETRANSACTION"){
        return{...state,
        transactions:state.transactions.filter((item)=>item.id!==action.payload)}
    }
   return state 
}
