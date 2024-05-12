import clsx from 'clsx';
import { ComponentProps, forwardRef } from 'react';

const TableHead = forwardRef<HTMLTableCellElement, ComponentProps<'th'>>(
  ({ children, className, ...props }, ref) => (
    <th
      ref={ref}
      className={clsx(
        'h-[44px] px-[24px] text-left text-[13px] font-semibold leading-[17px] tracking-wider',
        className,
      )}
      {...props}
    >
      {children}
    </th>
  ),
);

TableHead.displayName = 'TableHead';

const TableRow = forwardRef<HTMLTableRowElement, ComponentProps<'tr'>>(
  ({ children, className, ...props }, ref) => (
    <tr
      ref={ref}
      className={clsx('border-y border-night/10', className)}
      {...props}
    >
      {children}
    </tr>
  ),
);

TableRow.displayName = 'TableRow';

const TableCell = forwardRef<HTMLTableCellElement, ComponentProps<'td'>>(
  ({ children, className, ...props }, ref) => (
    <td
      ref={ref}
      className={clsx(
        'h-[72px] whitespace-nowrap px-[24px] text-[13px] leading-[17px] text-night/80',
        className,
      )}
      {...props}
    >
      {children}
    </td>
  ),
);

TableCell.displayName = 'TableCell';

export { TableHead, TableRow, TableCell };
