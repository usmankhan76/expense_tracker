import { Card, CardMedia, Divider, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
const useStyling=makeStyles(()=>({
    parent:{
        textAlign:'center',
        border:" 0.5px",
        backgroundColor:'#fff'
        
    },
    typo:{
    padding:'30px',
    display:'flex',
    flexDirection:'column'
    },
    cardMedia:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        
    },
    
}))
export default function Incomeexpenses() {
    const classes=useStyling();

    return (
          
          <Grid item lg={12} sm={12} xs={12} md={12}>
          <Card className={classes.card} elevation='5' > 
        {/* <Grid container className={classes.parent}> */}
              <CardMedia className={classes.cardMedia}> 
                  {/* <Grid item lg={6} sm={6} xs={6}> */}
                 <Typography variant="h6" className={classes.typo}>
                <span>INCOME</span> <span>0.0</span> 
                </Typography>
                <Divider />
            {/* </Grid> */}
            {/* <Grid item lg={6} sm={6} xs={6}> */}
                <Typography variant="h6" className={classes.typo}>
                  <span>EXPENSE</span> <span>0.0</span> 

                </Typography>
            {/* </Grid> */}
            </CardMedia>
        {/* </Grid> */}
            </Card>
            </Grid>
    )
}
