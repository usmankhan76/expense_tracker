import { AccordionSummary, Card, CardContent, CardMedia, Divider, Grid, makeStyles, Typography } from '@material-ui/core'
import React,{useContext} from 'react'
import { GlobalContext } from '../context_mui/globalContext';
const useStyling=makeStyles(()=>({
    parent:{
        textAlign:'center',
        border:" 0.5px",
        backgroundColor:'#fff'
        
    },
    typo:{
    padding:'auto',
    display:'flex',
    flexDirection:'column',
    

    },
    cardMedia:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        
    },
    card:{
        elevation:"5"
    },
    green:{
        color:"green"
    },
    red:{color:'red'}

}))
export default function Incomeexpenses() {
    const classes=useStyling();
     const {transactions}=useContext(GlobalContext);
     const sum=transactions.map((single)=>single.amount)
     .filter((item)=>item>0)
     .reduce((accumolator,currentValue)=>accumolator+=currentValue,0)
     .toFixed(2);
     const expense=transactions.map(item=>item.amount)
     .filter(item=>item<0)
     .reduce((accumolator,currentValue)=>accumolator-=currentValue,0)
     .toFixed(2)
    return (
          
          <Grid item lg={12} sm={12} xs={12} md={12}>
          <Card className={classes.card} elevation={5}  > 
        {/* <Grid container className={classes.parent}> */}
              <CardContent className={classes.cardMedia}> 
                  {/* <Grid item lg={6} sm={6} xs={6}> */}
                 <Typography 
                 variant="body1" 
                 className={classes.typo}>
                <span className={classes.green}>INCOME</span>
                 <span className={classes.green}>{sum}</span> 
                </Typography>
                <Divider />
            {/* </Grid> */}
            {/* <Grid item lg={6} sm={6} xs={6}> */}
                <Typography 
                variant="body1"
                 className={classes.typo}>
                  <span className={classes.red}>EXPENSE</span> 
                  <span className={classes.red}>${expense}</span> 

                </Typography>
            {/* </Grid> */}
            </CardContent>
        {/* </Grid> */}
            </Card>
            </Grid>
    )
}
