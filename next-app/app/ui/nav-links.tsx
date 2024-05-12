'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps } from 'react';

const links = [
  {
    name: 'Orders',
    href: '/orders',
    icon: ({ ...props }: ComponentProps<'svg'>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    name: 'Pictures',
    href: '/pictures',
    icon: ({ ...props }: ComponentProps<'svg'>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
    ),
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'relative flex items-center justify-center transition-colors hover:text-dogwoose-rose  lg:mb-[10px] lg:p-[10px]',

              pathname === link.href
                ? 'text-dogwoose-rose'
                : 'text-neutral-400',
            )}
          >
            <LinkIcon className="text-current" />
            {pathname === link.href && (
              <div className="absolute -bottom-[26px] h-[38px] w-[6px] -rotate-90 transform rounded-br-[6px] rounded-tr-[6px] bg-dogwoose-rose lg:bottom-0 lg:left-0 lg:top-[50%] lg:-translate-y-1/2 lg:rotate-0" />
            )}
          </Link>
        );
      })}
    </>
  );
}
