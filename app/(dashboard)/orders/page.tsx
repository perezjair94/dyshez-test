import { Order } from '@/app/lib/definitions';
import { createClient } from '@/app/lib/supabase/server';
import Table from '@/app/ui/orders/table';

export default async function Page() {
  const supabase = createClient();
  const { data: orders } = await supabase.from('orders').select();
  return (
    <div className="flex-1 p-[20px] px-[32px]">
      <h1 className="mb-[40px] text-[1.5rem] font-bold">Orders</h1>
      <Table orders={orders as Order[]} />
    </div>
  );
}
