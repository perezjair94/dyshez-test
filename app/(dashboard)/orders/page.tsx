import { orders } from '@/app/lib/placeholder-data';
import Table from '@/app/ui/orders/table';

export default function Page() {
  return (
    <div className="flex-1 p-[20px] px-[32px]">
      <h1 className="mb-[40px] text-[1.5rem] font-bold">Orders</h1>
      <Table orders={orders} />
    </div>
  );
}
