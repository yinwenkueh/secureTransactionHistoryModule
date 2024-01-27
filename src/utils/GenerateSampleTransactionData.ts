import {Transaction} from '../types/types';
import uuid from 'react-native-uuid';
import {format} from 'date-fns';

const generateRandomTransaction = (fixDate: boolean): Transaction => {
  const randomID = uuid.v4().toString();
  const randomCurrency: 'RM' | 'USD' = Math.random() < 0.5 ? 'RM' : 'USD'; // Random type (RM or USD)
  const randomAmount = (Math.random() * 1000 + 1).toFixed(2); // Random amount between 1 and 1000
  let randomDate = new Date(
    Date.now() - Math.floor(Math.random() * 10000000000),
  ); // Random date within the last 10000 days

  if (fixDate) randomDate = new Date();

  const randomDescription = `Transaction Description ${Math.floor(
    Math.random() * 100,
  )}`; // Random description
  const randomType: 'Debit' | 'Credit' =
    Math.random() < 0.5 ? 'Debit' : 'Credit'; // Random type (debit or credit)

  const randomRemark = `Transaction Remark ${Math.floor(Math.random() * 100)}`; // Random description
  return {
    id: randomID,
    currency: randomCurrency,
    amount: randomAmount,
    date: format(randomDate, 'dd MMM yyyy - hh:mm a'),
    description: randomDescription,
    type: randomType,
    remark: randomRemark,
  };
};

// Generate sample transaction data with at least 20 transactions
const sampleTransactions: Transaction[] = [];
for (let i = 0; i < 20; i++) {
  sampleTransactions.push(generateRandomTransaction(false));
}

// Generate 2 more sample transaction data with today date
export const pullRefreshAddRandomTransactions = () => {
  for (let i = 0; i < 2; i++) {
    sampleTransactions.push(generateRandomTransaction(true));
  }
};

export default sampleTransactions;
