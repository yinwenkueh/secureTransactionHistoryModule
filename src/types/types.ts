export interface Transaction {
  id: string;
  currency : string;
  amount: string;
  date: string;
  description: string;
  type: 'Debit' | 'Credit';
  remark : string;
}
