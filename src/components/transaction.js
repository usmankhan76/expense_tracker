import { Button, Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core'
import React,{useContext} from 'react'
import { GlobalContext } from '../context_mui/globalContext';

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
        marginBottom:'10px',
        '&:hover': {
       background: "#f00",
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#3c52b2',
          },
    },

    },
    typo1:{
        // paddingBottom:'5px'
    },
    btn:{
         cursor: 'pointer',
  backgroundColor: '#e74c3c',
  border: '0',
  color: '#fff',
  fontSize: '20px',
  lineHeight: '20px',
  padding: '2px 5px',
  position: 'absolute',
  top: '50%',
  left: '0',
  transform: 'translate(-100%, -50%)',
  opacity: '0',
  transition: 'opacity 0.3s ease',
  '&:hover': {
       background: "#f00",
    },
  
    }
}))
export default function Transaction({id,amount,text}) {
    const classes=useStyling();
   const sign=amount<0?"-":"+";
   const {removetransaction}=useContext(GlobalContext)
    return (
       <Card key={id}  elevation={5} 
       className={classes.card} 
       onClick={()=>{removetransaction(id)}}
       >
         <CardContent
          className={classes.content}>
        <Typography 
        className={classes.typo1}>
            {text}</Typography>
            <Typography  
            className={classes.typo1}>
                {sign}${Math.abs(amount)}</Typography>
                   </CardContent>
              
               </Card>
    )
}
