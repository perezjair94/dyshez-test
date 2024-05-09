'use client';

import { PictureField } from '@/app/lib/definitions';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { DeletePictureButton } from './buttons';

export default function Cards({ pictures }: { pictures: PictureField[] }) {
  return (
    <>
      {pictures.map((picture) => (
        <ImageCard key={picture.name} {...picture} />
      ))}
    </>
  );
}

function ImageCard({ name, url }: PictureField) {
  const searchParams = useSearchParams();
  const source = searchParams.get('name');
  const isActive = source === name;
  return (
    <Link href={`/pictures?name=${name}&preview_url=${url}`}>
      <div
        className={clsx(
          'group relative h-[124px] w-[124px] cursor-pointer overflow-hidden rounded-[8px] bg-night/5',
          {
            'border-[6px] border-solid border-dogwoose-rose': isActive, // active,
          },
        )}
      >
        <Image src={url} alt={name} className="object-cover" fill />
        <div className="absolute left-[50%] top-[50%] hidden h-[40px] w-[40px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[4px] border border-night bg-white shadow-sm transition-all hover:bg-white/90 group-hover:flex">
          <DeletePictureButton id={name} />
        </div>
      </div>
    </Link>
  );
}
