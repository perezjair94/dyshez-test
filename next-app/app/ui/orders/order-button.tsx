'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { ComponentProps } from 'react';

type Props = ComponentProps<'button'> & {};

export default function OrderButton({ id, ...props }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const query = searchParams.get('order');
  const status = searchParams.get('status') || 'All';

  const handleClick = () => {
    const order = query?.split(':')[1] === 'ASC' ? 'DESC' : 'ASC';
    router.push(`/orders?order=${id}:${order}&status=${status}`);
  };
  return (
    <button {...props} onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-neutral-400"
      >
        <path d="m3 16 4 4 4-4" />
        <path d="M7 20V4" />
        <path d="m21 8-4-4-4 4" />
        <path d="M17 4v16" />
      </svg>
    </button>
  );
}
