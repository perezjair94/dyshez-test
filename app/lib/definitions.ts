export type Order = {
  id: number;
  customer: string;
  date: string;
  time: string;
  mode: string;
  total: string;
  payment_method: string;
  status: string;
};

export type Picture = {
  id: number;
  name: string;
  url: string;
  created_at: string;
};
