'use client';

import { Picture } from '@/app/lib/definitions';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function Cards({ pictures }: { pictures: Picture[] }) {
  return (
    <>
      {pictures.map((picture) => (
        <ImageCard key={picture.id} {...picture} />
      ))}
    </>
  );
}

function ImageCard({ id, name, user_id, object_id }: Picture) {
  const searchParams = useSearchParams();
  const source = searchParams.get('source');
  const image = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/v1/object/public/pictures/${user_id}/${name}`;
  return (
    <Link href={`/pictures?source=${object_id}`}>
      <div
        className={clsx(
          'group relative h-[124px] w-[124px] cursor-pointer rounded-[8px] bg-night/5',
          {
            'border-[6px] border-solid border-dogwoose-rose':
              object_id === source, // active,
          },
        )}
      >
        <Image src={image} alt={object_id} fill />
        <div className="absolute left-[50%] top-[50%] hidden h-[40px] w-[40px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[4px] border border-night bg-white shadow-sm transition-all hover:bg-night/5 group-hover:flex">
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
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
