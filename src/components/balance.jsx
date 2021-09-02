import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
const useStyling=makeStyles(()=>({
    parent:{
        textAlign:'center',
        // border:"solid 1px",
        paddingTop:'20px',
       
    },
    typo:{
    //   fontWeight:'bold',
    //   fontFamily:'serif'  
    }
}))
export default function Balance() {
    const classes=useStyling();

    return (
        <Grid  className={classes.parent}>
            <Typography variant='h6'  className={classes.typo} >
                CURRENT BALANCE
            </Typography >
            <Typography variant='h6'  className={classes.typo}>
                $0.00
            </Typography>
        </Grid>
    )
}
