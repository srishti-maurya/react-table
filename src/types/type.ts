import { SetStateAction } from 'react';

export type Data = {
  name: String;
  txn_date: String;
  due_date: String;
  payer: String;
  payee: String;
  original: Number;
  CCY: String;
  TxnCCY: String;
  usd: Number;
  status: String;
  netting_summary: NettingSummary;
};

export type NettingSummary = {
  total: Number;
  oppertunity: Number;
  unnetted: Number;
  netted: Number;
};

export type Chart = {
  data: NettingSummary;
};

export type MyTableProps = {
  data: Data[];
  setData: React.Dispatch<SetStateAction<Data[]>>;
};
