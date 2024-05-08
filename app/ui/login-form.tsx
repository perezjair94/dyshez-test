'use client';

import toast, { Toaster } from 'react-hot-toast';
import Input from './input';

export default function LoginForm() {
  const onSubmit = () => toast.error('Error');

  return (
    <form>
      <div className="mb-[40px] flex flex-col gap-[1rem]">
        <Input placeholder="Correo o teléfono" />
        <Input placeholder="Contraseña" type="password" />
      </div>
      <button
        type="button"
        className="mx-auto flex items-center gap-[6px] rounded-full bg-dogwoose-rose p-[14px] px-[24px] font-hauora text-[14px] font-bold text-white hover:bg-opacity-85"
        onClick={onSubmit}
      >
        Continuar
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
          className="lucide lucide-arrow-right"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
      <p className="mt-[14px] text-center font-hauora text-[13px] font-semibold leading-[17px] text-night/50">
        ¿Cambiaste tu teléfono?
      </p>
      <Toaster />
    </form>
  );
}
