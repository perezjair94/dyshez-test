'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export default function PreviewPicture() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') as string;
  const url = searchParams.get('preview_url') as string;
  console.log(name, url);
  if (!name || !url) return null;
  return (
    <div className="flex h-[100%] w-[100%] flex-col items-center justify-center gap-[32px]">
      <div>
        <h2 className="mb-[6px] text-center font-hauora text-[14px] font-bold">
          Preview 1:1
        </h2>
        <div className="relative h-[163px] w-[163px] overflow-hidden rounded-[10px] shadow-md">
          <Image src={url} alt={name} className="object-cover" fill />
        </div>
      </div>
      <div>
        <h2 className="mb-[6px] text-center font-hauora text-[14px] font-bold">
          Preview 16:9
        </h2>
        <div className="relative h-[144px] w-[256px] overflow-hidden rounded-[10px] shadow-md">
          <Image src={url} alt={name} className="object-cover" fill />
        </div>
      </div>
      <div>
        <h2 className="mb-[6px] text-center font-hauora text-[14px] font-bold">
          Preview 16:9
        </h2>
        <div className="relative h-[256px] w-[144px] overflow-hidden rounded-[10px] shadow-md">
          <Image src={url} alt={name} className="object-cover" fill />
        </div>
      </div>
    </div>
  );
}
