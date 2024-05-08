import { Order } from '@/app/lib/definitions';
import { TableCell, TableHead, TableRow } from '@/app/ui/table';
import PaymentStatus from './payment-status';

function Header() {
  return (
    <div className="flex items-center gap-[24px] px-[24px] py-[27px]">
      <h2 className="text-[1.125rem] font-semibold">Number of orders</h2>
      <div className="flex items-center gap-[10px]">
        <a className="ml-[8px] block rounded-full border border-dogwoose-rose p-[12px] px-[16px] font-hauora text-[14px] font-bold text-dogwoose-rose">
          All
        </a>
        <a className="px-[16px ml-[8px] rounded-full border border-night/50 p-[12px] font-hauora text-[14px] font-bold text-night/50">
          Accepted(4)
        </a>
        <a className="px-[16px ml-[8px] rounded-full border border-night/50 p-[12px] font-hauora text-[14px] font-bold text-night/50">
          Rejected (3)
        </a>
      </div>
    </div>
  );
}

export default function Table({ orders }: { orders: Order[] }) {
  return (
    <div className="overflow-visible rounded-[12px] shadow-[0px_8px_28px_0px_#0000001A]">
      <Header />
      <table className="table min-w-full">
        <thead>
          <TableRow className="border-t">
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Mode</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Payment Method</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </thead>
        <tbody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.time}</TableCell>
              <TableCell>{order.mode}</TableCell>
              <TableCell>{order.total}</TableCell>
              <TableCell>{order.payment_method}</TableCell>
              <TableCell>
                <PaymentStatus status={order.status} />
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}
