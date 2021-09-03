import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core'
import React,{useContext} from 'react'
import { GlobalContext } from '../context_mui/globalContext'
import Transaction from './transaction'
const useStyling=makeStyles(()=>({
    parent:{
        textAlign:'center',
        // border:"solid 1px"
    },
    typo:{
          textAlign:'center',
        marginTop:'10px',
      fontWeight:'bold',
    //   fontFamily:'serif'  
    letterSpacing:'0.5px'
    },
    content:{
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-between",
        height:"35px",
        // marginBottom:'10px'
        
       padding:'5px 10px'
    },
    card:{
        marginBottom:'10px'
    },
    typo1:{
        // paddingBottom:'5px'
    }
}))

export default function TransactionsList() {
    const {transactions}=useContext(GlobalContext)
    console.log(transactions);
    
    const classes=useStyling();

    return (
        <Grid  ><Typography variant='body1' className={classes.typo} >
                  Transaction History
               </Typography>
               <hr/>
            {transactions.map((transaction)=>{
                
               return <Transaction key={transaction.id} {...transaction}/>
               
            })}
        </Grid>
    )
}
