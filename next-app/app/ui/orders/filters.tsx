'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function FilterItem({ query, children }: { query: string; children: string }) {
  const searchParams = useSearchParams();
  const status = searchParams.get('status');
  return (
    <Link
      href={`/orders?status=${query}`}
      className={clsx(
        'ml-[8px] block rounded-full border p-[12px] px-[16px] font-hauora text-[14px] font-bold transition-colors hover:border-dogwoose-rose hover:text-dogwoose-rose',
        status === query
          ? 'border-dogwoose-rose  text-dogwoose-rose'
          : 'border-night/50 text-night/50',
      )}
    >
      {children}
    </Link>
  );
}

export default function StatusFilter() {
  return (
    <div className="flex items-center gap-[24px] px-[24px] py-[27px]">
      <h2 className="text-[1.125rem] font-semibold">Number of orders</h2>
      <div className="flex items-center gap-[10px]">
        <FilterItem query="all">All</FilterItem>
        <FilterItem query="accepted">Accepted(4)</FilterItem>
        <FilterItem query="rejected">Rejected (3)</FilterItem>
      </div>
    </div>
  );
}
