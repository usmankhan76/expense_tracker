import { Grid, makeStyles, Typography } from '@material-ui/core'
import React,{useContext} from 'react'
import { GlobalContext } from '../context_mui/globalContext'

const useStyling=makeStyles(()=>({
    parent:{
        textAlign:'center',
        // border:"solid 1px",
        paddingTop:'20px',
       
    },
    typo:{
    //   fontWeight:'bold',
      fontFamily:'serif'  
    }
}))
export default function Balance() {
    const classes=useStyling();
     const {transactions}=useContext(GlobalContext);
     const amount=transactions.map((item)=>item.amount)
     const total=amount.reduce((acc,cuva)=>acc+=cuva,0).toFixed(2);
     console.log(total);
    return (
        <Grid  className={classes.parent}>
            <Typography variant='h6'  className={classes.typo} >
                CURRENT BALANCE
            </Typography >
            <Typography variant='h6'  className={classes.typo}>
                ${total}
            </Typography>
        </Grid>
    )
}
