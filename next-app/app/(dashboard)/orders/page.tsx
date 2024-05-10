import { Order } from '@/app/lib/definitions';
import { createClient } from '@/app/lib/supabase/server';
import Table from '@/app/ui/orders/table';
import { redirect } from 'next/navigation';

export default async function Page() {
  const supabase = createClient();

  const { data: orders } = await supabase.from('orders').select();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/login');
  }

  return (
    <div className="p-[20px] px-[32px]">
      <h1 className="mb-[40px] text-[1.5rem] font-bold">Orders</h1>
      <Table orders={orders as Order[]} />
    </div>
  );
}
