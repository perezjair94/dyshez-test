import { Order } from '@/app/lib/definitions';
import { TableCell, TableHead, TableRow } from '@/app/ui/table';
import PaymentStatus from './payment-status';
import Pagination from '@/app/ui/pagintaion';
import FilterByStatus from './filters';
import OrderButton from './order-button';
import { getTotalPages } from '@/app/lib/utils';

export default function Table({ orders }: { orders: Order[] }) {
  const totalPages = getTotalPages(orders.length, 10);
  return (
    <div className="relative w-[82.5rem] overflow-x-auto rounded-[12px] pb-[20px] shadow-[0px_8px_28px_0px_#0000001A]">
      <FilterByStatus />
      <table className="table w-full min-w-[82.5rem]">
        <thead>
          <TableRow className="border-t">
            <TableHead>
              Order ID <OrderButton id="id" className="ml-2 align-middle" />
            </TableHead>
            <TableHead className="w-[19.375rem]">
              Customer
              <OrderButton id="customer" className="ml-2 align-middle" />
            </TableHead>
            <TableHead>
              Date <OrderButton id="date" className="ml-2 align-middle" />
            </TableHead>
            <TableHead>
              Time <OrderButton id="time" className="ml-2 align-middle" />
            </TableHead>
            <TableHead>
              Mode <OrderButton id="mode" className="ml-2 align-middle" />
            </TableHead>
            <TableHead>
              Total <OrderButton id="total" className="ml-2 align-middle" />
            </TableHead>
            <TableHead className="w-[19.375rem]">
              Payment Method
              <OrderButton id="payment_method" className="ml-2 align-middle" />
            </TableHead>
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
      <Pagination totalPages={totalPages} />
    </div>
  );
}
