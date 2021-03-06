import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import React from 'react'
const useStyling=makeStyles(()=>({
    parent:{
        textAlign:'center',
        // border:"solid 1px"
    },
    typo:{
        marginTop:'10px',
      fontWeight:'bold',
    //   fontFamily:'serif'  
    letterSpacing:'0.5px'
    }
}))
export default function Header() {
    const classes=useStyling();
    return (
        <Grid    className={classes.parent}>
            <Typography variant="h5" className={classes.typo}>
                Expense Tracker</Typography>
        </Grid>
    )
}
