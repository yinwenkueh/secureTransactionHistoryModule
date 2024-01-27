export interface Transaction {
  id: string;
  currency : string;
  amount: string;
  date: string;
  oriDate: Date;
  description: string;
  type: 'Debit' | 'Credit';
  remark : string;
}
