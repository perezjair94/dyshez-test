'use client';

import { uploadPicture } from '@/app/lib/actions';
import { ChangeEvent, useRef } from 'react';

export default function UploadForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const hanldeFileInputChange = async (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      await uploadPicture(formData);
    }
  };

  return (
    <label htmlFor="file">
      <div className="row-span-1 flex h-[134px] w-full cursor-pointer items-center justify-center rounded-[8px] border border-night/40 bg-white text-[#808080] transition-all hover:bg-night/5 hover:shadow-lg md:h-[124px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-plus"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      </div>
      <input
        ref={fileInputRef}
        onChange={hanldeFileInputChange}
        type="file"
        name="file"
        id="file"
        accept="image/*"
        className="hidden"
      />
    </label>
  );
}
