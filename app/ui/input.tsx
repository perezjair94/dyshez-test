import { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'input'> & {};

export default function Input({ ...props }: Props) {
  return (
    <input
      className="rounded-full border-[2px] border-night border-opacity-10 p-[17px] px-[20px] font-hauora text-[14px] font-bold placeholder:text-night/50"
      {...props}
    />
  );
}
