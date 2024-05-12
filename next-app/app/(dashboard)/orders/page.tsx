import { Order } from '@/app/lib/definitions';
import { createClient } from '@/app/lib/supabase/server';
import { getPagination, getTotalPages } from '@/app/lib/utils';
import FilterByStatus from '@/app/ui/orders/filters';
import Table from '@/app/ui/orders/table';
import Pagination from '@/app/ui/pagintaion';
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

  const { data: orders = [] } = await supabase
    .from('orders')
    .select('*')
    .limit(10)
    .range(from, to)
    .in('status', status === 'All' ? ['Accepted', 'Rejected'] : [status])
    .order(orderID, { ascending: orderDirection === 'ASC' });

  if (!orders)
    return (
      <div className="p-[20px] px-[32px]">
        <h1 className="mb-[40px] text-[1.5rem] font-bold">Orders</h1>
        <p>Orders not found</p>
      </div>
    );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const totalPages = getTotalPages(orders.length, 10);

  if (!user) return redirect('/login');

  return (
    <div className="p-[10px] px-[14px] lg:p-[20px] lg:px-[32px]">
      <h1 className="mb-[24px] text-[1.5rem] font-bold md:mb-[40px]">Orders</h1>
      <div className="rounded-[12px] pb-[20px] shadow-[0px_8px_28px_0px_#0000001A]">
        <FilterByStatus />
        <Table orders={orders} />
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
