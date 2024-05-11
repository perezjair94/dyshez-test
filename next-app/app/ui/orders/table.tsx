import { Order } from '@/app/lib/definitions';
import { TableCell, TableHead, TableRow } from '@/app/ui/table';
import PaymentStatus from './payment-status';
import Pagination from '@/app/ui/pagintaion';
import StatusFilter from './filters';

export default function Table({ orders }: { orders: Order[] }) {
  return (
    <div className="rounded-[12px] pb-[20px] shadow-[0px_8px_28px_0px_#0000001A]">
      <StatusFilter />
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
      <Pagination />
    </div>
  );
}
