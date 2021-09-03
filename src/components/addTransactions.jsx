import { Button, Grid, Input, makeStyles, TextField, Typography } from '@material-ui/core'
import { Label } from '@material-ui/icons';
import React,{useContext} from 'react'
import { useState } from 'react';
import { GlobalContext } from '../context_mui/globalContext';

const useStyling=makeStyles((theme)=>({
    typo:{
          textAlign:'center',
        marginTop:'10px',
      fontWeight:'bold',
    //   fontFamily:'serif'  
    letterSpacing:'0.5px'
    },
    inp:{
        backgroundColor:"#fff",
        // margin: theme.spacing(1),
    //   width: '25ch',
    },
    btn:{
        backgroundColor:'green',
        marginTop:"10px",
       
    }
}))
export default function AddTransactions() {
    const classes=useStyling();
    const[text,setText]=useState('')
    const[amount,setAmount]=useState()
    const{addtransaction}=useContext(GlobalContext)
 const handleSubmit=(e)=>{
         e.preventDefault();
         const newTransaction={
             id:Math.floor(Math.random()*12000).Math.random(),
             text,
             amount:+amount
         }
         console.log("submit is chaling")
         addtransaction(newTransaction)
          setAmount(0)
          setText('')       
    }
    return (
        <Grid >
            <form onSubmit={handleSubmit}>
        <Typography vairant="body1" className={classes.typo}>Add New Transactions</Typography>
        <hr/>
        <label htmlFor="inp1">Description</label>
        <Input type="text" 
        id="inp1"
        fullWidth required={true} 
        className={classes.inp}
        placeholder="Please enter the description"
        margin='dense'
        value={text}
        onChange={(e)=>{setText(e.target.value)}}
        ></Input> 
        {/* <TextField id="outlined-basic" label="Description" variant="outlined"  className={classes.inp} /> */}
        <label htmlFor="inp2">Transaction Amount</label>

        <Input type="number"
        id="inp2"
        fullWidth required={true}
        className={classes.inp}
        autoFocus={true}
        placeholder="Enter ampunt"
        value={amount}
        onChange={(e)=>{setAmount(e.target.value)}}
        > </Input> 
        <Button  fullWidth vairant="contained" className={classes.btn} >Add Transaction</Button>
        </form> 
        </Grid>
    )
}
