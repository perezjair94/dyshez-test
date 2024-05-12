'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function FilterItem({ query, children }: { query: string; children: string }) {
  const searchParams = useSearchParams();
  const status = searchParams.get('status') || 'All';
  return (
    <Link
      href={`/orders?status=${query}`}
      className={clsx(
        'block rounded-full border p-[5px] px-[8px] font-hauora text-[12px] font-bold transition-colors hover:border-dogwoose-rose hover:text-dogwoose-rose md:p-[12px] md:px-[16px] md:text-[14px]',
        status === query
          ? 'border-dogwoose-rose  text-dogwoose-rose'
          : 'border-night/50 text-night/50',
      )}
    >
      {children}
    </Link>
  );
}

export default function FilterByStatus() {
  return (
    <div className="flex flex-col items-center gap-[20px] py-[20px] md:flex-row md:gap-[24px] md:px-[24px] md:py-[27px]">
      <h2 className="text-[1.125rem] font-semibold">Number of orders</h2>
      <div className="flex flex-wrap items-center justify-center gap-[5px] md:gap-[10px]">
        <FilterItem query="All">All</FilterItem>
        <FilterItem query="Accepted">Accepted(4)</FilterItem>
        <FilterItem query="Rejected">Rejected (3)</FilterItem>
      </div>
    </div>
  );
}
