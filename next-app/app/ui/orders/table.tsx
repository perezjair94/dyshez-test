import { Order } from '@/app/lib/definitions';
import { TableCell, TableHead, TableRow } from '@/app/ui/table';
import PaymentStatus from './payment-status';
import OrderButton from './order-button';

export default function Table({ orders }: { orders: Order[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-[82.5rem] min-w-full md:w-full">
        <thead>
          <TableRow className="border-t">
            <TableHead>
              Order ID <OrderButton id="id" className="ml-2 align-middle" />
            </TableHead>
            <TableHead>
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
            <TableHead>
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
    </div>
  );
}
