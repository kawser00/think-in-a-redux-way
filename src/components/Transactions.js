import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../features/transaction/transactionSlice';
import Transaction from './Transaction';


export default function Transactions() {
  const dispatch = useDispatch();
  const {error, isError, isLoading, transactions} = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  //decide what to render for each
  let content;

  if (isLoading) content = <p>Loading...</p>;

  if (!isLoading && isError) content = <p className="error">{error}</p>

  if (!isLoading && !isError && transactions.length === 0) content =  <p className="text-center">No transactions found!</p>

  if (!isLoading && !isError && transactions.length > 0) content = transactions.map((transaction) => <Transaction key={transaction.id} transaction={transaction} />);

  return (
    <div>
      <p className="second_heading">Your Transactions:</p>

      <div className="container_of_list_of_transactions">
        <ul>
          {content}
        </ul>
      </div>
    </div>
  )
}
