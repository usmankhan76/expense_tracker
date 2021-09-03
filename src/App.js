
import { Grid, makeStyles } from '@material-ui/core';

import './App.css';
import './style/styling.css'
// import Header  from './component2/header';
// import Balance from './component2/balance';
// import Incomeexpense from './component2/incomeexpense';
// import Transactionlist from './component2/transactionlist';
// import Addtransaction from './component2/addtransaction';
// import { GolbalProvider } from './context/globalstate';
import Header from './components/header';
import Balance from './components/balance';
import Incomeexpenses from './components/incomeexpenses';
import GlobalContextProvider from './context_mui/globalContext';
import TransactionsList from './components/transactionsList';
import AddTransactions from './components/addTransactions';
const useStyling=makeStyles(()=>({
  parent:{
    // marginTop:'20px ',
    // border:"solid 2px",
    
  },
  con2:{
    // backgroundColor:"#fafdfd"
    backgroundColor:'#2196f3',
    minHeight:'80vh'
  }

}))
function App() {
  const classes=useStyling()
  return (
    // <>
    <GlobalContextProvider >
    <Grid container    className={classes.parent}>
     <Grid item  lg={4} sm={2} md={4} xs={2}></Grid>
     <Grid item container lg={4} md={4} sm={8} className={classes.con2}>
       <Grid item lg={12} md={12} sm={12} xs={12}>
      <Header/>
       </Grid>
       <Grid item lg={12} md={12} sm={12} xs={12}>
         <Balance/>
       </Grid>
       <Grid item lg={12} md={12} sm={12} xs={12}>
         <Incomeexpenses/>
       </Grid>
       <Grid item lg={12} md={12} sm={12} xs={12}>
         <TransactionsList/>
       </Grid>
       <Grid item lg={12} md={12} sm={12} xs={12}>
         <AddTransactions/>
       </Grid>
     </Grid>
     <Grid item lg={4} md={4} sm={2} xs={2}></Grid>
    </Grid>
    </GlobalContextProvider>
    /* <GolbalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <Incomeexpense/>
        <Transactionlist />
        <Addtransaction/>


      </div>
    </GolbalProvider> */
    // </>
  );
}

export default App;
