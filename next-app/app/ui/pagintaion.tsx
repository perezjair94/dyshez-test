import clsx from 'clsx';

function PaginationItem({
  active,
  children,
}: {
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        'flex h-[40px] w-[40px] items-center justify-center rounded-full border-2 border-night/10 font-hauora ',
        active
          ? 'border-dogwoose-rose text-dogwoose-rose'
          : 'border-transparent text-night',
      )}
    >
      {children}
    </div>
  );
}

export default function Pagination() {
  return (
    <div className="mt-[4px] flex items-center justify-center gap-[20px] p-[8px]">
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
        className="lucide lucide-chevron-left"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
      <div className="flex items-center gap-[2px]">
        {Array.from({ length: 5 }).map((_, i) => (
          <PaginationItem key={i} active={i === 0}>
            {i + 1}
          </PaginationItem>
        ))}
      </div>
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
        className="lucide lucide-chevron-right"
      >
        <path d="m9 6l6 6-6 6" />
      </svg>
    </div>
  );
}
