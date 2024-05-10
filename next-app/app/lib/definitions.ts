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
  id: string;
  name: string;
  user_id: string;
  object_id: string;
  created_at: string;
};

export type PictureField = {
  name: string;
  url: string;
};
