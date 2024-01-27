import {Transaction} from '../types/types';

export const SET_TRANSACTIONS = 'SET_TRANSACTIONS';

export const setTransactions = (transactions: Transaction[]) => ({
  type: SET_TRANSACTIONS,
  payload: transactions,
});
