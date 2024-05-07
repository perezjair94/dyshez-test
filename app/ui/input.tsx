import { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'input'> & {};

export default function Input({ ...props }: Props) {
  return (
    <input
      type="text"
      className="font-hauora rounded-full border-[2px] border-night border-opacity-10 p-[17px] px-[20px] text-[14px] font-bold placeholder:text-night/50"
      {...props}
    />
  );
}
