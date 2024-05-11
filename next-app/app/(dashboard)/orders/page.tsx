import { Order } from '@/app/lib/definitions';
import { createClient } from '@/app/lib/supabase/server';
import { getPagination } from '@/app/lib/utils';
import Table from '@/app/ui/orders/table';
import { redirect } from 'next/navigation';

export default async function Page({
  searchParams: { order = 'id:ASC', status = 'All', page = '1' },
}: {
  searchParams: { order: string; status: string; page: string };
}) {
  const supabase = createClient();
  const { from, to } = getPagination(Number(page) - 1, 10);

  const orderID = order.split(':')[0];
  const orderDirection = order.split(':')[1];

  const { data: orders } = await supabase
    .from('orders')
    .select('*')
    .limit(10)
    .range(from, to)
    .in('status', status === 'All' ? ['Accepted', 'Rejected'] : [status])
    .order(orderID, { ascending: orderDirection === 'ASC' });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return redirect('/login');

  return (
    <div className="p-[20px] px-[32px]">
      <h1 className="mb-[40px] text-[1.5rem] font-bold">Orders</h1>
      <Table orders={orders as Order[]} />
    </div>
  );
}
