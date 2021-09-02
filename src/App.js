
// import { Grid, makeStyles } from '@material-ui/core';

import './App.css';
import './style/styling.css'
import Header  from './component2/header';
import Balance from './component2/balance';
import Incomeexpense from './component2/incomeexpense';
import Transactionlist from './component2/transactionlist';
import Addtransaction from './component2/addtransaction';
import { GolbalProvider } from './context/globalstate';
// import Header from './components/header';
// import Balance from './components/balance';
// import Incomeexpenses from './components/incomeexpenses';
// const useStyling=makeStyles(()=>({
//   parent:{
//     marginTop:'20px',
//     border:"solid 2px",
//     // backgroundColor:' #f7f7f7'
//   }

// }))
function App() {
  // const classes=useStyling()
  return (
    <>
    {/* <Grid container lg={12}   className={classes.parent}>
     <Grid item  lg={4} sm={2} md={4} xs={2}></Grid>
     <Grid item container lg={4} md={4} sm={8}>
       <Grid lg={12} md={12} sm={12} xs={12}>
      <Header/>
       </Grid>
       <Grid lg={12} md={12} sm={12} xs={12}>
         <Balance/>
       </Grid>
       <Grid lg={12} md={12} sm={12} xs={12}>
         <Incomeexpenses/>
       </Grid>
     </Grid>
     <Grid item lg={4} md={4} sm={2} xs={2}></Grid>
    </Grid> */}
    <GolbalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <Incomeexpense/>
        <Transactionlist />
        <Addtransaction/>


      </div>
    </GolbalProvider>
    </>
  );
}

export default App;
