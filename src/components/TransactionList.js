import React from 'react'
import { GlobalContext } from '../Context/GlobalStates';
import { Transactions } from './Transactions';

export const TransactionList = () => {
    const {transactions} = React.useContext(GlobalContext);
    return (
        <>
          <h3>History</h3>
          <ul id="list" className="list">
          {transactions.map(transaction=> (<Transactions key={transaction.id} transaction={transaction}/>
          ))}       
          </ul>  
        </>
    )
}
