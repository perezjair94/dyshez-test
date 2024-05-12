'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';

export default function Pagination({ totalPages }: { totalPages: number }) {
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || 1;

  return (
    <div className="mt-[4px] flex items-center justify-center gap-[20px] p-[8px]">
      <PrevPageButton page={Number(page)} />
      <div className="flex items-center gap-[2px]">
        {Array.from({ length: totalPages }).map((_, i) => (
          <PaginationItem key={i} active={i === Number(page) - 1} page={i + 1}>
            {i + 1}
          </PaginationItem>
        ))}
      </div>
      <NextPageButton page={Number(page)} totalPages={totalPages} />
    </div>
  );
}

type PaginationItemProps = {
  active: boolean;
  page: number;

  children: React.ReactNode;
};

function PaginationItem({ active, children, page }: PaginationItemProps) {
  return (
    <Link href={`/orders?page=${page}`}>
      <div
        className={clsx(
          'flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 font-hauora hover:text-dogwoose-rose md:h-[40px] md:w-[40px]',
          active
            ? 'border-dogwoose-rose text-dogwoose-rose'
            : 'border-transparent text-night',
        )}
      >
        {children}
      </div>
    </Link>
  );
}

type PrevPageButtonProps = {
  page: number;
};

function PrevPageButton({ page }: PrevPageButtonProps) {
  const router = useRouter();

  const disabled = page === 1;

  const handleClick = () => {
    const newPage = page - 1;
    if (newPage > 0) {
      router.push(`/orders?page=${newPage}`);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={clsx({ 'text-neutral-400': disabled })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
    </button>
  );
}

type NextPageButtonProps = {
  page: number;
  totalPages: number;
};

function NextPageButton({ page, totalPages }: NextPageButtonProps) {
  const router = useRouter();

  const disabled = page === totalPages;

  const handleClick = () => {
    const newPage = page + 1;
    if (newPage <= totalPages) {
      router.push(`/orders?page=${newPage}`);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={clsx({ 'text-neutral-400': disabled })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 6l6 6-6 6" />
      </svg>
    </button>
  );
}
