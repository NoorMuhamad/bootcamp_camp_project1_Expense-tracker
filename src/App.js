import React from 'react';
import './App.css';
import { Header } from './components/header';
import { Balance } from './components/balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './Context/GlobalStates'

function App() {
  
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
       <Balance />
       <IncomeExpense />
       <TransactionList/>
       <AddTransaction/>
      </div> 
          
    </GlobalProvider>
  );
}

export default App;
